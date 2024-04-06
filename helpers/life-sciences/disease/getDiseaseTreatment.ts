import { aiConnection } from "@/utils/openAI";

export default async function getDiseaseTreatment(disease: string): Promise<string> {
  try {
    const response = await aiConnection.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages: [{ role: "system", content: `Provide a 1 sentence concise treatment of ${disease}` }]
    });

    const treatment = response.choices[0].message.content;

    if (treatment === null || treatment === undefined) {
      console.error("Treatment data is null or undefined");
      return "Treatment information not available.";
    }

    return treatment;
  } catch (error) {
    console.error("Error fetching disease treatment:", error);
    return "Error fetching treatment information.";
  }
}
