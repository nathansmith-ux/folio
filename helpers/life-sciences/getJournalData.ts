export default async function getJournalData(topicOne: string, topicTwo: string, topicThree: string, publication: string) {
  const apiKey = process.env.SCIENCEJOURNAL_API_KEY;
  let queryParts = [];

  // Function to create query parts for both title and abstract
  const addQueryPart = (topic: string) => {
    if (topic) {
      queryParts.push(`(title:("${topic}") OR abstract:("${topic}"))`);
    }
  };

  // Add query parts for each topic
  addQueryPart(topicOne);
  // addQueryPart(topicTwo);
  // addQueryPart(topicThree);

  // Query part for publication
  if (publication) {
    queryParts.push(`journal:("${publication}")`);
  }

  // Join the query parts with 'AND'
  const query = queryParts.join(' AND ');

  // Construct the API URL
  const url = `https://api.springernature.com/meta/v2/json?q=${query}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error('Error fetching journal data:', error instanceof Error ? error.message : error);
  }
}
