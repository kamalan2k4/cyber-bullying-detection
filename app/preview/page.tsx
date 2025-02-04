"use client"; // ✅ Required in App Router when using hooks

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ Use `next/navigation`

export default function Preview() {
  const searchParams = useSearchParams(); // ✅ Get query params
  const router = useRouter();
  const category = searchParams.get("category") || "default"; // ✅ Extract category safely

  const [data, setData] = useState<{ id: number; text: string; label: string }[]>([]);

  useEffect(() => {
    // Simulating data fetching from previous upload
    const mockData = [
      { id: 1, text: "Sample tweet 1", label: "Unknown" },
      { id: 2, text: "Sample tweet 2", label: "Unknown" },
      { id: 3, text: "Sample tweet 3", label: "Unknown" },
    ];
    setData(mockData);
  }, []);

  const handleProceed = () => {
    router.push(`/prediction?category=${category}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Preview Uploaded Data</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border-b border-gray-600">ID</th>
              <th className="p-2 border-b border-gray-600">Text</th>
              <th className="p-2 border-b border-gray-600">Label</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-600">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.text}</td>
                <td className="p-2 text-yellow-400">{item.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleProceed}
        className="mt-6 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105"
      >
        Proceed to Prediction
      </button>
    </div>
  );
}
