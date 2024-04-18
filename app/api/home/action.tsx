import 'server-only'

import { createAI, createStreamableUI, getMutableAIState } from 'ai/rsc';
import OpenAI from 'openai';
import { runOpenAICompletion } from '@/utils';
import { z } from 'zod'

// Components
import Spinner from "@/components/ui/loading/Spinner"
import CardGrid from "@/components/ui/card/CardGrid";
import CardIconGrid from "@/components/ui/card/CardIconGrid";
import ImageCardGrid from "@/components/ui/card/ImageCardGrid";
import CtaText from "@/components/ui/cta/CtaText";
import AICard from '@/components/ui/card/AICard';


// Web Development Services
import { 
  services as webServices,
  process as webProcess
} from "@/site-copy/webDevPage";

// SEO Serivces
import { 
  services as seoServices, 
  process as seoProcess
} from "@/site-copy/seoPage";


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
  // Update the AI state with the new user message.
  aiState.update([
    ...aiState.get(),
    {
      role: 'user',
      content: userInput,
    },
  ]);

  const reply = createStreamableUI(
    <div className='flex justify-center'>
      <Spinner />
    </div>
  );
 
  // The `render()` creates a generated, streamable UI.
  const completion = runOpenAICompletion(openai, {
    model: 'gpt-4-0125-preview',
    stream: true,
    messages: [
      { role: 'system', content: `You are a website assistant that is designed to help users learn more about White Walls Media, the services offered by this agency, projects created by Nathan Smith (the founder) and showcase the vercel ai 3.0 sdk which helps with generative ui streaming

      If the user wants general information about services call service_information

      If the user wants more specific information about the web development services firstly here are the web development services offered by White walls media ${webServices} do not add any other services  then call web_dev_information with this information

      If the user wants more specific information about the process of how White Walls Media conducts their web development services firstly here is the process ${webProcess} then call web_dev_process with this information

      If the user wants more specific information about the seo services firstly here are the seo services offered by White walls media ${seoServices} do not add any other services such as link building then call seo_information with this information

      If the user wants more specific information about the process of how White Walls Media conducts their seo services firstly here is the process ${seoProcess} then call seo_process with this information

      If the user wants to learn more about generative ui call generative_ui

      If the user wants to learn more about Nathan's projects call project_information

      If the user wants to contact White walls media call contact_us

      Otherwise return text responses for all other inquiries

      ` },
      ...aiState.get()
    ],
    functions: [
      {
        name: 'service_information',
        description: 'Provide information about web development and seo services',
        parameters: z.object({}).required(),
      }
    ]
  });

    completion.onFunctionCall('service_information', async () => {
      reply.update(
        <div>Loading...</div>
      )

      reply.done(
        <div>
          <CtaText 
            header="We Offer Both Web Development & SEO Services"
            description="Explore our different offerings by simplying asking what are your seo (or web development) services"
          />
        </div>
      )
    })
//     functions: {
//       service_information: {
//         description: 'Provide information about web development and seo services',
//         parameters: z.object({}).required(),
//         render: async function*() {
          
//           yield <Spinner />

//           return (
//             <div>
//               <CtaText 
//               header="We Offer Both Web Development & SEO Services"
//               description="Explore our different offerings by simplying asking what are your seo (or web development) services"
//               />
//             </div>
//           );
//         }
//       },
//       web_dev_information: {
//         description: 'Provide information about web development services',
//         parameters: z.object({}).required(),
//         render: async function*() {
          
//           yield <Spinner />

//           return (
//             <div>
//               <CardGrid 
//                 header="We Provide The Following Web Development Services"
//                 services={webServices}
//               />
//             </div>
//           );
//         }
//       },
//       seo_information: {
//         description: 'Provide information about SEO services',
//         parameters: z.object({}).required(),
//         render: async function*() {
          
//           yield <Spinner />

//           return (
//             <div>
//               <CardGrid 
//                 header="We Provide The Following SEO Services"
//                 services={seoServices}
//               />
//             </div>
//           );
//         }
//       },
//       seo_process: {
//         description: 'Provide information about our SEO process',
//         parameters: z.object({}).required(),
//         render: async function*() {
          
//           yield <Spinner />

//           return (
//             <div>
//               <CardIconGrid 
//                 header="We Have A Four Step SEO process"
//                 process={seoProcess}  
//               />
//             </div>
//           );
//         }
//       },
//       web_dev_process: {
//         description: 'Provide information about our web development process',
//         parameters: z.object({}).required(),
//         render: async function*() {
          
//           yield <Spinner />

//           return (
//             <div>
//               <CardIconGrid 
//                 header="We Have A Four Step Web Development process"
//                 process={webProcess}
//               />
//             </div>
//           );
//         }
//       },
//       generative_ui : {
//         description: 'Provide information about what generative ui is',
//         parameters: z.object({}).required(),
//         render: async function*() {

//           yield <Spinner />

//           const generativeUi = [
//             {
//               header: "Cyber Security Gen UI",
//               description: "Get realtime answers to cyber security questions and analyze urls",
//               image: "/cyber-security/cyber-ai.webp",
//               link: "/generative-ui/cyber-security"
//             },
//             {
//               header: "Life Science Gen UI",
//               description: "Find scientific journals and learn more about different diseases",
//               image: "/life-science/life-science-ai.webp",
//               link: "/generative-ui/life-sciences"
//             }
//           ]

//           return (
//             <div>
//               <ImageCardGrid 
//                 header="Our Different Gen UI Experiences"
//                 cardContent={generativeUi}
//               />
//             </div>
//           )

//         }
//       },
//       project_information: {
//         description: `Provide information about Nathan's projects including TaiL and Schema Forge`,
//         parameters: z.object({}).required(),
//         render: async function*() {

//           yield <Spinner />

//           const projects = [
//             {
//               header: "TaiL",
//               description: "An AI platform built using Nextjs 14 to create immersive choose your own adventure games",
//               image: "/tail-assets/what-is-tail.webp",
//               link: "/projects/tail"
//             },
//             {
//               header: "Schema Forge",
//               description: "An SEO platform built designed to make the generation of schema markup more efficent",
//               image: "/schema-forge-assets/coloredLogo.png",
//               link: "/projects/schema-forge"
//             }
//           ]

//           return (
//             <div>
//               <ImageCardGrid 
//                 header="My Different Projects"
//                 cardContent={projects}
//               />
//             </div>
//           )

//         }
//       },
//       contact_us: {
//         description: `Provide contact information and ways to contact White Walls Media`,
//         parameters: z.object({}).required(),
//         render: async function*() {

//           yield <Spinner />

//           return (
//             <div>
//               <CtaText 
//                 header="Are You Ready To Take Your Business To The Digital World?"
//                 description="Let's carve out a piece of the internet for your business"
//               />
//             </div>
//           )

//         }
//       }
//     }
//   })

  return {
    id: Date.now(),
    display: reply.value
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