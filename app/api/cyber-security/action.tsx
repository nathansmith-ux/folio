import { aiConnection } from "@/utils/openAI";
import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import { scanUrl } from "@/helpers/cyber-security/scanUrl";
import { getUrlAnalysis } from "@/helpers/cyber-security/getUrlAnalysis";
import Spinner from "@/components/ui/loading/Spinner";
import DonutChartGrid from "@/components/ui/card/DonutChartGrid";
import AICard from "@/components/ui/card/AICard";

type SubmitUserMessageResponse = {
  id: number
  display: React.ReactNode;
}


let idCounter = 0

function generateUniqueId() {
  return `id-${Date.now()}-${++idCounter}`;
}
 
async function submitUserMessage(userInput: string): Promise<SubmitUserMessageResponse> {
  'use server';
 
  const aiState = getMutableAIState<typeof AI>();
 
  // Update the AI state with the new user message.
  aiState.update([
    ...aiState.get(),
    {
      role: 'user',
      content: userInput,
    },
  ]);
 
  // The `render()` creates a generated, streamable UI.
  const ui = render({
    model: 'gpt-3.5-turbo-0125',
    provider: aiConnection,
    messages: [
      { role: 'system', content: `You are a cybersecurity assistant who is well versed and understands the different ways that cyber attacks are carried out.
      
      Your job is to provide educational information to help train future cybersecurity analysts but should not go into detail or provide a step by step process on how to perpetrate different cyber attacks
      
      If the user wants to get an analysis a url on call scan_url
      
      Otherwise answer their questions in regular text
      ` },
      ...aiState.get()
    ],
    // `text` is called when an AI returns a text response (as opposed to a tool call).
    // Its content is streamed from the LLM, so this function will be called
    // multiple times with `content` being incremental.
    text: ({ content, done }) => {
      // When it's the final content, mark the state as done and ready for the client to access.
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
 
// Define the initial state of the AI. It can be any JSON object.
const initialAIState: {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
  id?: string;
  name?: string;
}[] = [];
 
// The initial UI state that the client will keep track of, which contains the message IDs and their UI nodes.
const initialUIState: {
  id: number;
  display: React.ReactNode;
}[] = [];
 
// AI is a provider you wrap your application with so you can access AI and UI state in your components.
export const AI = createAI({
  actions: {
    submitUserMessage
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState,
  initialAIState
});