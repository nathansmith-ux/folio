export async function scanUrl(providedUrl: string) {
  const res = await fetch('https://www.virustotal.com/api/v3/urls', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-apikey': process.env.VIRUS_TOTAL_API_KEY!,
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({url: providedUrl})
  })
 
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json(); 

  return data; 
}