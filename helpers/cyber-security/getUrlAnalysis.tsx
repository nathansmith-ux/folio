interface EngineEntry {
  method: string;
  engine_name: string;
  category: string;
  result: string;
}

interface ResultObject {
  [key: string]: EngineEntry;
}

type Category = 'harmless' | 'undetected' | 'suspicious' | 'malicious';

type Status = 'clean' | 'unrated' | 'null'


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

  const results: ResultObject[] = [data.data.attributes.results]
  
  console.log(results)

  const tally: Record<Category, number> = {
    harmless: 0,
    undetected: 0,
    suspicious: 0,
    malicious: 0
  };

  const status: Record<Status, number> = {
    clean: 0,
    unrated: 0,
    null: 0
  };

  results.forEach(resultObject => {
    Object.values(resultObject).forEach(entry => {
        const category = entry.category.toLowerCase();
        const stat = entry.result.toLowerCase();
        
        if (stat in status ) {
          status[stat as Status]++;
        } else {
          console.warn(`Unexpected stat: ${stat}`)
        }

        if (category in tally) {
            
          tally[category as Category]++;
        
          } else {

            console.warn(`Unexpected category: ${category}`);
        }
    });
});

  return [tally, status]; 
}