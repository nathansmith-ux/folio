import { createAI, createStreamableUI, getMutableAIState } from 'ai/rsc';
import OpenAI from 'openai';
import { runOpenAICompletion } from '@/utils/index';

// Components
import Spinner from "@/components/ui/loading/Spinner"
import CardGrid from "@/components/ui/card/CardGrid";
import CardIconGrid from "@/components/ui/card/CardIconGrid";
import ImageCardGrid from "@/components/ui/card/ImageCardGrid";
import CtaText from "@/components/ui/cta/CtaText";


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

const generativeUi = [
  {
    header: "Cyber Security Gen UI",
    description: "Get realtime answers to cyber security questions and analyze urls",
    image: "/cyber-security/cyber-ai.webp",
    link: "/generative-ui/cyber-security"
  },
  {
    header: "Life Science Gen UI",
    description: "Find scientific journals and learn more about different diseases",
    image: "/life-science/life-science-ai.webp",
    link: "/generative-ui/life-sciences"
  }
]

const projects = [
  {
    header: "TaiL",
    description: "An AI platform built using Nextjs 14 to create immersive choose your own adventure games",
    image: "/tail-assets/what-is-tail.webp",
    link: "/projects/tail"
  },
  {
    header: "Schema Forge",
    description: "An SEO platform built designed to make the generation of schema markup more efficent",
    image: "/schema-forge-assets/coloredLogo.png",
    link: "/projects/schema-forge"
  }
]


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function submitUserMessage(userInput) {
  'use server';
 
  const aiState = getMutableAIState();
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
      ...aiState.get().map((info) => ({
        role: info.role,
        content: info.content,
        name: info.name,
      })),
    ],
    functions: [
      {
          name: 'service_information',
          description: 'Provide information about web development and seo services',
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'web_dev_information',
          description: 'Provide information about web development services',
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'seo_information',
          description: 'Provide information about SEO services',
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'seo_process',
          description: 'Provide information about our SEO process',
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'web_dev_process',
          description: 'Provide information about our web development process',
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'generative_ui',
          description: 'Provide information about what generative ui is',
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'project_information',
          description: `Provide information about Nathan's projects including TaiL and Schema Forge`,
          parameters: {
              type: "object",
              properties: {}
          }
      },
      {
          name: 'contact_us',
          description: 'Provide contact information and ways to contact White Walls Media',
          parameters: {
              type: "object",
              properties: {}
          }
      }
    ]  
  });

  completion.onTextContent((content, isFinal) => {
    reply.update(content);
    if (isFinal) {
      reply.done();
      aiState.done([...aiState.get(), { role: 'assistant', content }]);
    }
  });

    completion.onFunctionCall('service_information', async () => {

      reply.update(
        <div className='flex justify-center'>
          <Spinner />
        </div>
      )

      reply.done(
        <div>
          <CtaText 
            header="We Offer Both Web Development & SEO Services"
            description="Explore our different offerings by simplying asking what are your seo (or web development) services"
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'service_information',
          content: `Explore our different offerings by simplying asking what are your seo (or web development) services`,
        }
      ])
    })

    completion.onFunctionCall('web_dev_information', async () => {
      reply.done(
        <div>
          <CardGrid 
            header="We Provide The Following Web Development Services"
            services={webServices}
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'web_dev_information',
          content: `${webServices}`,
        }
      ])
    })

    completion.onFunctionCall('seo_information', async () => {
      reply.done(
        <div>
          <CardGrid 
            header="We Provide The Following SEO Services"
            services={seoServices}
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'seo_information',
          content: `${seoServices}`,
        }
      ])
    })

    completion.onFunctionCall('seo_process', async () => {
      reply.done(
        <div>
          <CardIconGrid 
            header="We Have A Four Step SEO process"
            process={seoProcess}  
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'seo_process',
          content: `${seoProcess}`,
        }
      ])
    })

    completion.onFunctionCall('web_dev_process', async () => {
      reply.done(
        <div>
          <CardIconGrid 
            header="We Have A Four Step Web Development Process"
            process={webProcess}  
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'web_dev_process',
          content: `${webProcess}`,
        }
      ])
    })

    completion.onFunctionCall('generative_ui', async () => {
      reply.done(
        <div>
          <ImageCardGrid 
            header="Our Different Gen UI Experiences"
            cardContent={generativeUi}
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'generative_ui',
          content: `${generativeUi}`,
        }
      ])
    })

    completion.onFunctionCall('project_information', async () => {
      reply.done(
        <div>
          <ImageCardGrid 
            header="My Different Projects"
            cardContent={projects}
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'project_information',
          content: `${projects}`,
        }
      ])
    })

    completion.onFunctionCall('contact_us', async () => {
      reply.done(
        <div>
          <CtaText 
            header="Are You Ready To Take Your Business To The Digital World?"
            description="Let's carve out a piece of the internet for your business"
          />
        </div>
      )

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'contact_us',
          content: `Are You Ready To Take Your Business To The Digital World? Let's carve out a piece of the internet for your business`,
        }
      ])
    })

  return {
    id: Date.now(),
    display: reply.value
  };
}
 
const initialAIState = [];

const initialUIState = [];
 
export const AI = createAI({
  actions: {
    submitUserMessage
  },
  initialUIState,
  initialAIState
});