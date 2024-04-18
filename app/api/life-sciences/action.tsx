import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import OpenAI from "openai";

// API Calls
import getDrugData from "@/helpers/life-sciences/getDrugData";
import determineDrugMeasurement from "@/helpers/life-sciences/determineDrugMeasurement";
import getDiseasePathogenesis from "@/helpers/life-sciences/disease/getDiseasePathogenesis";
import getDiseaseSymptoms from "@/helpers/life-sciences/disease/getDiseaseSymptoms";
import getDiseaseRiskFactors from "@/helpers/life-sciences/disease/getDiseaseRiskFactors";
import getDiseaseTreatment from "@/helpers/life-sciences/disease/getDiseaseTreatment";
import getDiseaseSummary from "@/helpers/life-sciences/disease/getDiseaseSummary";
import getJournalData from "@/helpers/life-sciences/getJournalData";

// Components
import JournalCardGrid from "@/components/ui/life-science/JournalCardGrid";
import DiseaseCard from "@/components/ui/life-science/DiseaseCard";
import TabCardSkeleton from "@/components/ui/loading/TabCardSkeleton";
import Spinner from "@/components/ui/loading/Spinner";
import AICard from "@/components/ui/card/AICard";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
 
  // The `render()` creates a generated, streamable UI.
  const ui = render({
    model: 'gpt-4-0125-preview',
    provider: openai,
    messages: [
      { role: 'system', content: `You are an advanced life science assistant that can answer a wide range of questions about different life science topics
      
      If the user wants to find a research paper or research journal call get_paper_data

      If the user wants to learn about a specific disease call get_disease_data

      ` },
      { role: "user", content: userInput },
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
          cyberSecurity={false}
        >
          <p className="text-white">{content}</p>
        </AICard>
      )
    },
    tools: {
      get_drug_data: {
        description: 'Get the available information on a specific drug',
        parameters: z.object({
          drugName: z.string().describe('The name of the drug'),
          measurement: z.string().describe('The type of measurement the user is looking for')
        }).required(),
        render: async function* ({ drugName, measurement }) {

          yield <div className="flex justify-center">
            <p>Loading...</p>
          </div>

          const matchingMeasurement = await determineDrugMeasurement(measurement)

            // Check if matchingMeasurement is null and handle it
          if (matchingMeasurement === null) {
            // Handle the null case. This might involve setting an error message
            // or choosing a default value for matchingMeasurement
            console.error('No matching measurement found');
            return (
              <div>
                <p>Error: No matching measurement found</p>
              </div>
            );
          }

          const drugInfo = await getDrugData(drugName, matchingMeasurement)

          console.log(matchingMeasurement)
          console.log(drugInfo)
      

          return (
            <div>
              {drugInfo.map((info:string) => (
                <p 
                  key={info}
                >{info}</p>
              ))}
            </div>
          )

        }
      },
      get_paper_data: {
        description: 'Find specific research papers',
        parameters: z.object({
          topicOne: z.string().describe('The name of the topic the user is looking for'),
          topicTwo: z.string().describe('The name of the second topic the user is looking for'),
          topicThree: z.string().describe('The name of the three topic the user is looking for'),
          publication: z.string().describe('The publication the user is looking for')
        }).required(),
        render: async function* ({ topicOne, topicTwo, topicThree, publication }) {

          yield <div className="flex justify-center">
            <Spinner />
          </div>

          const journals = await getJournalData(topicOne, topicTwo, topicThree, publication)

          const records = journals.records

          return (
            <div>
              <AICard
                cyberSecurity={false}
              >
                <JournalCardGrid 
                  records={records}
                />
              </AICard>
            </div>
          )

        }
      },
      get_disease_data: {
        description: 'Provide information about a specific disease',
        parameters: z.object({
          disease: z.string().describe("The name of the disease the user is trying to understand")
        }).required(),
        render: async function* ({ disease }) {

          yield <div className="flex justify-center">
            <TabCardSkeleton />
          </div>

          const summary = await getDiseaseSummary(disease)
          const pathogenesis = await getDiseasePathogenesis(disease)
          const symptoms = await getDiseaseSymptoms(disease)
          const riskFactors = await getDiseaseRiskFactors(disease)
          const treatment = await getDiseaseTreatment(disease)

          return (
            <div>
              <AICard
                cyberSecurity={false}
              >
                <DiseaseCard 
                  summary={summary}
                  pathogenesis={pathogenesis}
                  symptoms={symptoms}
                  risk_factors={riskFactors}
                  treatment={treatment}
                />
              </AICard>
            </div>
          )

        }
      }
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