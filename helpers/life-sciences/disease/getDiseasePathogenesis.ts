import { aiConnection } from "@/utils/openAI";

export default async function getDiseasePathogenesis(disease: string): Promise<string> {
  try {
    const response = await aiConnection.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages: [{ role: "system", content: `Provide a concise 2 sentence summary of the pathogenesis of ${disease}` }]
    });

    const pathogenesis = response.choices[0].message.content;

    if (pathogenesis === null || pathogenesis === undefined) {
      console.error("Pathogenesis data is null or undefined");
      return "Pathogenesis information not available.";
    }

    return pathogenesis;
  } catch (error) {
    console.error("Error fetching disease pathogenesis:", error);
    return "Error fetching pathogenesis information.";
  }
}
