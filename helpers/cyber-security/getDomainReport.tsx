function normalizeDomain(url: string) {
  return url.toLowerCase().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
}

export async function getDomainReport(url: string) {

  const domain = normalizeDomain(url)

  const res = await fetch(`https://www.virustotal.com/api/v3/domains/${domain}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-apikey': process.env.VIRUS_TOTAL_API_KEY!,
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
 
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json(); 

  return data; 
}