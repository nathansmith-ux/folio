import { aiConnection } from "@/utils/openAi";

export default async function getDiseaseSymptoms(disease: string): Promise<string> {
  try {
    const response = await aiConnection.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages: [{ role: "system", content: `Provide a 2 sentence description of the symptoms of ${disease}` }]
    });

    const symptoms = response.choices[0].message.content;

    if (symptoms === null || symptoms === undefined) {
      console.error("Symptoms data is null or undefined");
      return "Symptoms information not available.";
    }

    return symptoms;
  } catch (error) {
    console.error("Error fetching disease symptoms:", error);
    return "Error fetching symptoms information.";
  }
}
