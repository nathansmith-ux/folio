export async function getUrlAnalysis(analysisUrl: string) {
  const res = await fetch(analysisUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-apikey': process.env.VIRUS_TOTAL_API_KEY!,
    },
  })
 
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json(); 

  console.log("GET DATA", data.data.attributes.results)

  return data; 
}