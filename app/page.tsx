"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Define type explicitly
  const handleSelection = (type: string) => {
    router.push(`/auth?category=${type}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Cyberbullying Detection</h1>
      <p className="mb-4">Choose a category to proceed:</p>
      <div className="space-x-4">
        <button
          className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-500"
          onClick={() => handleSelection("hate_speech")}
        >
          Hate Speech Tweets
        </button>
        <button
          className="bg-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-500"
          onClick={() => handleSelection("personal_attack")}
        >
          Personal Attack
        </button>
      </div>
    </div>
  );
}
