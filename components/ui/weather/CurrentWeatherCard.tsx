import Image from "next/image"

export default function CurrentWeatherCard({ 
  location,
  image,
  celcius,
  fahrenheit,
  conditions,
  feelsLikeCelcius,
  feelsLikeFahrenheit
} : {
  location: string,
  image: string,
  celcius: number,
  fahrenheit: number,
  conditions: string,
  feelsLikeCelcius: number,
  feelsLikeFahrenheit: number
}) {
  return (
    <div className="px-6 py-4 max-w-60 bg-gray-700 rounded-lg">
      <div className="flex flex-col items-center mb-2">
        <div>
          <p className="text-3xl bold">{location}</p>
          <p>{conditions}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="flex items-center gap-2">
          <Image
            alt="Weather icon"
            className="rounded-full overflow-hidden"
            height="100"
            src={image}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="text-4xl font-semibold">{celcius}°C</div>
        </div>
      </div>
      <div className="mt-4">
        <p className="flex justify-center">Feels Like</p>
        <div className="flex justify-around mt-2">
          <p className="text-lg">
            {feelsLikeCelcius}°C
          </p>
          <p className="text-lg">
            {feelsLikeFahrenheit}°F
          </p>
        </div>
      </div>
    </div>
  )
}