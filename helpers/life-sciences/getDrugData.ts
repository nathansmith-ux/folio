export default async function getDrugData(drugName:string, matchingMeasurement: string) {

  const encodedDrugName = encodeURIComponent(drugName);
  const url = `https://api.fda.gov/drug/label.json?search=${encodedDrugName}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const drugInformation = data.results[0][matchingMeasurement]

    return drugInformation

  } catch (error: any) {

    console.error('Error fetching medicine data:', error.message);
  }
}
