export default async function getCurrentWeather(location: string) {
  
  const apiKey = process.env.WEATHER_API_KEY;
  const encodedLocation = encodeURIComponent(location);

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodedLocation}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return { error: "The network request was not successful" };
    }

    const weatherData = await res.json();

    return weatherData;

  } catch (err) {
    console.log("There was an error getting the weather", err);

    return { error: "There was an error getting the weather data" };
  }
}
