import { aiConnection } from "@/utils/openAi";

export default async function getDiseaseRiskFactors(disease: string): Promise<string> {
  try {
    const response = await aiConnection.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages: [{ role: "system", content: `Describe the main risk factors of ${disease} in 2 sentences` }]
    });

    const riskFactors = response.choices[0].message.content;
    
    if (riskFactors === null || riskFactors === undefined) {
      
      return "Risk factors not available.";
    }

    return riskFactors;
  } catch (error) {
    console.error("Error fetching disease risk factors:", error);

    return "Error fetching risk factors.";
  }
}
