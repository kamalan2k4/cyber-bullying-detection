"use client"; // Important for hooks in App Router

import React, { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation"; // ✅ Use this instead of useRouter

function UploadQueryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || ""; // ✅ Extract 'category' from URL

  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Upload handling logic here
    router.push(`/preview?category=${category}`); // ✅ Navigate correctly
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Upload Query</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Enter Text:</label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            rows={4}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Upload CSV File:</label>
          <input
            type="file"
            accept=".csv"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            onChange={handleFileUpload}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

// ✅ Wrap the component in `<Suspense>` to fix hydration issues
export default function UploadQueryWrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <UploadQueryPage />
    </Suspense>
  );
}
