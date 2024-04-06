import OpenAI from "openai";

export const aiConnection = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});