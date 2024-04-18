import { aiConnection } from "@/utils/openAi";

export default async function getDiseaseSummary(disease: string): Promise<string> {
  try {
    const response = await aiConnection.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages: [{ role: "system", content: `Provide a 1 sentence concise summary of ${disease}` }]
    });

    const summary = response.choices[0].message.content;
    if (summary === null || summary === undefined) {

      return "No summary available.";
    }

    return summary;
  } catch (error) {
    console.error("Error fetching disease summary:", error);

    return "Error fetching summary.";
  }
}
