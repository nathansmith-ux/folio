export default function TabCardSkeleton() {
  return (
    <div className="w-full px-2 py-4 rounded-lg">
      <div className="flex border-b border-gray-700 mb-4">
        <div className="rounded bg-gray-300 h-6 w-14 ml-2 mb-4 mr-10 animate-pulse"></div>
        <div className="rounded bg-gray-300 h-6 w-14 mb-4 mr-10 animate-pulse"></div>
        <div className="rounded bg-gray-300 h-6 w-14 animate-pulse"></div>
      </div>
      <div className="rounded bg-gray-300 h-6 w-1/2 mb-4 animate-pulse"></div>
      <div className="rounded bg-gray-300 h-6 w-5/6 animate-pulse"></div>
    </div>
  );
}

