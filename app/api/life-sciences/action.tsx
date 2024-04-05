import { OpenAI } from "openai";
import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import getDrugData from "@/helpers/life-sciences/getDrugData";
import determineDrugMeasurement from "@/helpers/life-sciences/determineDrugMeasurement";
import getJournalData from "@/helpers/life-sciences/getJournalData";
import JournalCardGrid from "@/components/ui/card/JournalCardGrid";

 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type SubmitUserMessageResponse = {
  id: number
  display: React.ReactNode;
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
    model: 'gpt-4-0125-preview',
    provider: openai,
    messages: [
      { role: 'system', content: `You are an advanced life science assistant that can answer a wide range of questions about different life science topics
      
      Always get paper data

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
 
      return <p>{content}</p>
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
            <p>Loading...</p>
          </div>

          const journals = await getJournalData(topicOne, topicTwo, topicThree, publication)

          const records = journals.records

          return (
            <div>
              <JournalCardGrid 
                records={records}
              />
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