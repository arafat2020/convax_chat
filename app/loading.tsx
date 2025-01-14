"use client"
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
        <h1 className="mt-6 text-lg font-semibold text-gray-300">
          Verifying User
        </h1>
      </div>
    </div>
  );
}
