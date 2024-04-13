import { createAI, getMutableAIState, render } from "ai/rsc";
import { z } from "zod";
import { aiConnection } from "@/utils/openAI";

// Components
import Spinner from "@/components/ui/loading/Spinner";

// Web Development Services
import { 
  services as WebServices,
  process as WebProcess
} from "@/site-copy/webDevPage";

// SEO Serivces
import { 
  services as SeoServices, 
  process as SeoProcess
} from "@/site-copy/seoPage";
import GeneralServices from "@/components/ui/home/GeneralServices";
import { AuroraBackground } from "@/components/ui/background/AuraBackground";

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
    provider: aiConnection,
    messages: [
      { role: 'system', content: `You are a website assistant that is designed to help users learn more about White Walls Media, the services offered by this agency, projects created by Nathan Smith (the founder) and showcase the vercel ai 3.0 sdk which helps with generative ui streaming

      If the user wants general information about services call service_information

      If the user wants more specific information about the web development services firstly here are the web development services offered by White walls media ${WebServices} do not add any other services  then call web_dev_information with this information

      If the user wants more specific information about the process of how White Walls Media conducts their web development services firstly here is the process ${WebProcess} then call web_dev_process with this information

      If the user wants more specific information about the seo services firstly here are the seo services offered by White walls media ${SeoServices} do not add any other services such as link building then call seo_information with this information

      If the user wants more specific information about the process of how White Walls Media conducts their seo services firstly here is the process ${SeoProcess} then call seo_process with this information

      If the user wants to learn more about generative ui call generative_ui

      If the user wants to learn more about Nathan's projects call project_information

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
        <p>{content}</p>
      )
    },
    tools: {
      service_information: {
        description: 'Provide information about web development and seo services',
        parameters: z.object({}).required(),
        render: () => {
          
          return (
            <div>
              <GeneralServices />
            </div>
          );
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