"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function PerformanceAnalysis() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const performanceData = {
    accuracy: "96%",
    precision: "94%",
    recall: "95%",
    f1Score: "94.5%",
  };

  const handleProceed = () => {
    router.push(`/visualization?category=${category}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Performance Analysis</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <p className="text-lg mb-4">
          <strong>Accuracy:</strong> {performanceData.accuracy}
        </p>
        <p className="text-lg mb-4">
          <strong>Precision:</strong> {performanceData.precision}
        </p>
        <p className="text-lg mb-4">
          <strong>Recall:</strong> {performanceData.recall}
        </p>
        <p className="text-lg mb-4">
          <strong>F1 Score:</strong> {performanceData.f1Score}
        </p>
      </div>
      <button
        onClick={handleProceed}
        className="mt-6 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105"
      >
        Proceed to Data Visualization
      </button>
    </div>
  );
}
