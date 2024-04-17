import { aiConnection } from "@/utils/openAI";
import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import getCurrentWeather from "@/helpers/weather/getCurrentWeather";
import getWeatherForecast from "@/helpers/weather/getWeatherForecast";

import CurrentWeatherCard from "@/components/ui/weather/CurrentWeatherCard";
import CurrentWeatherCardSkeleton from "@/components/ui/loading/CurrentWeatherCardSkeleton";

import ForecastWeatherCard from "@/components/ui/weather/ForecastWeatherCard";
import TabCardSkeleton from "@/components/ui/loading/TabCardSkeleton"; 
import { scanUrl } from "@/helpers/cyber-security/scanUrl";
import { getUrlAnalysis } from "@/helpers/cyber-security/getUrlAnalysis";

type SubmitUserMessageResponse = {
  id: number
  display: React.ReactNode;
}

enum TabName {
  About = 'about',
  Services = 'services',
  Statistics = 'statistics',
}

type TabData = {
  name: TabName;
  content: JSX.Element;
};

const tabs: TabData[] = [
  { name: TabName.About, content: <p>Hello There about</p> },
  { name: TabName.Services, content: <p>Hello There services</p> },
  { name: TabName.Statistics, content: <p>Hello There statistics</p> },
];
 
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
      { role: 'system', content: `You are a weather assistant, 
      
      If the user wants to get an analysis on call scan_url` },
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
      scan_url: {
        description: 'Get the latest weather updates',
        parameters: z.object({
          url: z.string().describe('the url the user wants to scan')
        }).required(),
        render: async function* ({ url }) {
          yield <div className="flex justify-center">
            <CurrentWeatherCardSkeleton />
            </div>

          const data = await scanUrl(url)

          const urlAnalysis = data.data.links.self

          const analysis = await getUrlAnalysis(urlAnalysis)

          return (
            <div className="flex justify-center">
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