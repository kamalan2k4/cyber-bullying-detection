"use client"; // ✅ Required for client-side hooks

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ Use next/navigation

function PredictionPage() {
  const searchParams = useSearchParams(); // ✅ Get query params
  const router = useRouter();
  const category = searchParams.get("category") || "default"; // ✅ Extract category safely

  const [predictionResult, setPredictionResult] = useState<{
    text: string;
    prediction: string;
    confidence: string;
  } | null>(null);

  useEffect(() => {
    // Simulating prediction result from deep learning model
    const mockResult = {
      text: "Sample tweet analyzed",
      prediction: "Offensive",
      confidence: "85%", // ✅ Add the confidence field here
    };

    setTimeout(() => {
      setPredictionResult(mockResult);
    }, 2000);
  }, []);

  const handleProceed = () => {
    router.push(`/performance?category=${category}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Prediction Result</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {predictionResult ? (
          <div>
            <p className="text-lg mb-4">
              <strong>Text:</strong> {predictionResult.text}
            </p>
            <p className="text-lg mb-4">
              <strong>Prediction:</strong>{" "}
              <span className="text-red-400">{predictionResult.prediction}</span>
            </p>
            <p className="text-lg mb-4">
              <strong>Confidence:</strong> {predictionResult.confidence}
            </p>
          </div>
        ) : (
          <p className="text-lg text-yellow-400">Processing...</p>
        )}
      </div>
      {predictionResult && (
        <button
          onClick={handleProceed}
          className="mt-6 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105"
        >
          Proceed to Performance Analysis
        </button>
      )}
    </div>
  );
}

// ✅ Wrap the component in `<Suspense>` to fix hydration issues
export default function PredictionWrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <PredictionPage />
    </Suspense>
  );
}
