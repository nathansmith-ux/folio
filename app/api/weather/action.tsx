import { OpenAI } from "openai";
import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import getCurrentWeather from "@/helpers/weather/getCurrentWeather";
import getWeatherForecast from "@/helpers/weather/getWeatherForecast";
 
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
    model: 'gpt-3.5-turbo-0125',
    provider: openai,
    messages: [
      { role: 'system', content: `You are a weather assistant, 
      
      Always return the get_weather_forecast function` },
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
      get_current_weather: {
        description: 'Get the latest weather updates',
        parameters: z.object({
          weatherLocation: z.string().describe('the location that the user wants the weather for')
        }).required(),
        render: async function* ({ weatherLocation }) {
          yield <div>
            <p>Loading...</p>
          </div>

          const weatherInfo = await getCurrentWeather(weatherLocation)

          return <div><p>The weather for location {weatherLocation} is {weatherInfo.current.temp_c} degrees celcius with conditions {weatherInfo.current.condition.text} but it feels like {weatherInfo.current.feelslike_c}</p></div>
        }
      },
      get_weather_forecast: {
        description: 'Get the weather forecast over a number of days',
        parameters: z.object({
          numberOfDays: z.number().describe('The number of days the user wants the weather for max 3'),
          weatherLocation: z.string().describe('The location that the user wants the weather for')
        }).required(),
        render: async function* ({ numberOfDays, weatherLocation }) {

          yield <div>
            <p>Loading...</p>
          </div>

          const weatherInfo = await getWeatherForecast(numberOfDays, weatherLocation)

          return <div><p>The weather forecast for location {weatherLocation} is</p></div>

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