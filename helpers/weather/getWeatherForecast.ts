export default async function getWeatherForecast(numberOfDays: number, weatherLocation: string) {

  const apiKey = process.env.WEATHER_API_KEY;
  const encodedLocation = encodeURIComponent(weatherLocation);
  const encodedDays = encodeURIComponent(numberOfDays)

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodedLocation}&days=${encodedDays}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return { error: "The network request was not successful" };
    }

    const weatherData = await res.json();

    console.log(weatherData);

    return weatherData;

  } catch (err) {
    console.log("There was an error getting the weather", err);

    return { error: "There was an error getting the weather data" };
  }
}