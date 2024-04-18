import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { OpenAIStream } from "ai";

export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const consumeStream = async (stream) => {
  const reader = stream.getReader();
  while (true) {
    const { done } = await reader.read();
    if (done) break;
  }
};


export function runOpenAICompletion(openai, params) {
  // Initialize variables to store text, function information, and callback functions
  let text = '';
  let hasFunction = false;
  let onTextContent = () => {};

  // Create an empty object to store custom functions
  const functionsMap = {};
  for (const fn of params.functions) {
    functionsMap[fn.name] = fn;
  }

  // Create an empty object to store callback functions for custom function calls
  let onFunctionCall = {};

  // Destructure the 'functions' array from the 'params' object
  const { functions, ...rest } = params;

  // Start an async function to consume the OpenAI completion stream
  (async () => {
    // Call the consumeStream function with OpenAIStream and the response from the OpenAI completion request
    consumeStream(
      OpenAIStream(
        (await openai.chat.completions.create({
          ...rest,
          stream: true,
          functions: functions.map(fn => ({
            name: fn.name,
            description: fn.description,
            parameters: fn.parameters,
          })),
        })),
        {
          // Handle function call events
          async experimental_onFunctionCall(functionCallPayload) {
            hasFunction = true;

            if (!onFunctionCall[functionCallPayload.name]) {
              return;
            }

            // Get the arguments for the custom function call
            const parsedArgs = functionCallPayload.arguments;

            // Call the function callback with the arguments
            onFunctionCall[functionCallPayload.name]?.(parsedArgs);
          },
          // Handle token generation events
          onToken(token) {
            text += token;
            if (text.startsWith('{')) return;
            onTextContent(text, false);
          },
          // Handle final text generation events
          onFinal() {
            if (hasFunction) return;
            onTextContent(text, true);
            //add database call here?
          },
        },
      ),
    );
  })();

  // Return an object with methods to set callback functions for handling text and function calls
  return {
    onTextContent: (callback) => {
      onTextContent = callback;
    },
    onFunctionCall: (name, callback) => {
      onFunctionCall[name] = callback;
    },
  };
}