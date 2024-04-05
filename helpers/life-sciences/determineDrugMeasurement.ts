import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export default async function determineDrugMeasurement(measurement: string) {

  const response = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [{ role: "system", content: `Determine what measurement the user is looking. 
    
    Here is their measurement ${measurement} 
    
    The options include: description, clinical_pharamacology, pharmacokinetics, microbiology, clinical_studies, indications_and_usage, contraindications, warnings, precautions, information_for_patients, drug_interactions, carcinogenesis_and_mutagenesis_and_impairment_of_fertility, pregancy, nonteratogenic_effects, nursing_mothers, pediatric_use, geriatric_use, adverse_reactions, or dose_and_administration information.
    
    Only return the name of the option that best fits their measurement. If you don't know what to return based on the input return the description` }]
  });

  const measurementResult = response.choices[0].message.content;

  return measurementResult
}
