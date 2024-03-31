export default function CurrentWeatherCardSkeleton() {
  return (
    <div className="px-6 py-4 max-w-60 bg-gray-700 rounded-lg animate-pulse">
      <div className="flex flex-col items-center mb-2">
        <div className="h-8 w-3/4 bg-gray-600 rounded animate-pulse"></div> {/* Location Placeholder */}
        <div className="h-4 w-1/2 bg-gray-600 rounded mt-2 animate-pulse"></div> {/* Conditions Placeholder */}
      </div>
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="flex items-center gap-2">
          <div className="h-24 w-24 bg-gray-600 rounded-full animate-pulse"></div> {/* Image Placeholder */}
          <div className="h-10 w-16 bg-gray-600 rounded animate-pulse"></div> {/* Temperature Placeholder */}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
        <div className="h-4 w-1/4 bg-gray-600 rounded animate-pulse"></div> {/* 'Feels Like' Placeholder */}
        </div>
        <div className="flex justify-around mt-2">
          <div className="h-6 w-12 bg-gray-600 rounded animate-pulse"></div> {/* Feels Like Temp Placeholder */}
          <div className="h-6 w-12 bg-gray-600 rounded animate-pulse"></div> {/* Feels Like Temp Placeholder */}
        </div>
      </div>
    </div>
  )
}
