import { aiConnection } from "@/utils/openAI";
import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import { scanUrl } from "@/helpers/cyber-security/scanUrl";
import { getUrlAnalysis } from "@/helpers/cyber-security/getUrlAnalysis";
import Spinner from "@/components/ui/loading/Spinner";
import DonutChartGrid from "@/components/ui/card/DonutChartGrid";
import AICard from "@/components/ui/card/AICard";

type AIStateItem =
  | {
      readonly role: "user" | "assistant" | "system";
      readonly content: string;
    }
  | {
      readonly role: "function";
      readonly content: string;
      readonly name: string;
    };

interface UIStateItem {
  readonly id: number;
  readonly display: React.ReactNode;
}


let idCounter = 0

function generateUniqueId() {
  return `id-${Date.now()}-${++idCounter}`;
}
 
async function submitUserMessage(userInput: string): Promise<UIStateItem> {
  'use server';
 
  const aiState = getMutableAIState<typeof AI>();
 
  aiState.update([
    ...aiState.get(),
    {
      role: 'user',
      content: userInput,
    },
  ]);
 
  const ui = render({
    model: 'gpt-3.5-turbo-0125',
    provider: aiConnection,
    messages: [
      { role: 'system', content: `You are a cybersecurity assistant who is well versed and understands the different ways that cyber attacks are carried out.
      
      Your job is to provide educational information to help train future cybersecurity analysts but should not go into detail or provide a step by step process on how to perpetrate different cyber attacks
      
      If the user wants to get an analysis a url on call scan_url
      
      Otherwise answer their questions in regular text
      ` },
      { role: "user", content: userInput },
      ...aiState.get()
    ],
    text: ({ content, done }) => {
      if (done) {
        aiState.done([
          ...aiState.get(),
          {
            role: "assistant",
            content
          }
        ]);
      }
 
      return (
        <AICard
          cyberSecurity={true}
        >
          <p className="w-full text-white">{content}</p>
        </AICard>
      )
    },
    tools: {
      scan_url: {
        description: 'Scan a url and determine if it is dangerous',
        parameters: z.object({
          url: z.string().describe('the url the user wants to scan')
        }).required(),
        render: async function* ({ url }) {
          yield <Spinner />

          const data = await scanUrl(url)

          const urlAnalysis = data.data.links.self

          const { tally, status } = await getUrlAnalysis(urlAnalysis)

          const chartOne = {
            header: "Security Categories",
            labels: ["Harmless", "Undetected", "Suspicious", "Malicious"],
            values: [tally.harmless, tally.undetected, tally.suspicious, tally.malicious],
            colors: ["#22c55e", "#fde047", "#f43f5e", "#dc2626"],
            id: generateUniqueId()
        }
      
        const chartTwo = {
            header: "Overall Result",
            labels: ["Clean", "Unrated", "Null"],
            values: [status.clean, status.unrated, status.null],
            colors: ["#22c55e", "#fde047", "#000000"],
            id: generateUniqueId()
        }

        aiState.done([
          ...aiState.get(),
          {
            role: "function",
            name: "scan_url",
            content: JSON.stringify({ tally, status }),
          }
        ]);

          return (
            <div>
              <AICard
                cyberSecurity={true}
              >
                <DonutChartGrid 
                  header="URL Analysis Results" 
                  description="An overview of the security categories and the overall result"
                  chartOne={chartOne}
                  chartTwo={chartTwo}
                />
              </AICard>
            </div>
          )
        }
      },
    }
  })
 
  return {
    id: Date.now(),
    display: ui
  };
}
 
const initialAIState: AIStateItem[] = [];
const initialUIState: UIStateItem[] = [];
 
export const AI = createAI({
  actions: {
    submitUserMessage
  },
  initialUIState,
  initialAIState
});