import { aiConnection } from "@/utils/openAI";
import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import getCurrentWeather from "@/helpers/weather/getCurrentWeather";
import getWeatherForecast from "@/helpers/weather/getWeatherForecast";

import CurrentWeatherCard from "@/components/ui/weather/CurrentWeatherCard";
import CurrentWeatherCardSkeleton from "@/components/ui/loading/CurrentWeatherCardSkeleton";

import ForecastWeatherCard from "@/components/ui/weather/ForecastWeatherCard";
import TabCardSkeleton from "@/components/ui/loading/TabCardSkeleton"; 

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
 
async function submitUserMessage(userInput: string): Promise<UIStateItem> {
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
      
      If the user asks for the current weather call get_current_weather

      If the user asks for the weather forecast call get_weather_forecast` },
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
 
      return <p>{content}</p>
    },
    tools: {
      get_current_weather: {
        description: 'Get the latest weather updates',
        parameters: z.object({
          weatherLocation: z.string().describe('the location that the user wants the weather for')
        }).required(),
        render: async function* ({ weatherLocation }) {
          yield <div className="flex justify-center">
            <CurrentWeatherCardSkeleton />
            </div>

          const weatherInfo = await getCurrentWeather(weatherLocation)

          const image = await aiConnection.images.generate({
            model: "dall-e-2",
            prompt: `A unique landmark for ${weatherLocation}`
          })

          return (
            <div className="flex justify-center">
              <CurrentWeatherCard 
                location={weatherLocation}
                image={image.data[0].url}
                celcius={weatherInfo.current.temp_c}
                fahrenheit={weatherInfo.current.temp_f}
                conditions={weatherInfo.current.condition.text}
                feelsLikeCelcius={weatherInfo.current.feelslike_c}
                feelsLikeFahrenheit={weatherInfo.current.feelslike_f}
              />
            </div>
          )
        }
      },
      get_weather_forecast: {
        description: 'Get the weather forecast over a number of days',
        parameters: z.object({
          numberOfDays: z.number().describe('The number of days the user wants the weather for max 3'),
          weatherLocation: z.string().describe('The location that the user wants the weather for')
        }).required(),
        render: async function* ({ numberOfDays, weatherLocation }) {

          yield <div className="flex justify-center">
            <TabCardSkeleton />
          </div>

          const weatherInfo = await getWeatherForecast(numberOfDays, weatherLocation)

          return (
            <div>
              <ForecastWeatherCard 
                forecastday={weatherInfo.forecast.forecastday}
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
 
const initialAIState: AIStateItem[] = [];
const initialUIState: UIStateItem[] = [];
 
export const AI = createAI({
  actions: {
    submitUserMessage
  },
  initialUIState,
  initialAIState
});