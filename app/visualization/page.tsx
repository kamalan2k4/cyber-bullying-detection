"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DataVisualization() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const data = {
    labels: ["Offensive Content", "Non-Offensive Content"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#ff4d4d", "#4caf50"],
        hoverBackgroundColor: ["#e60000", "#388e3c"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Data Visualization</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <Pie data={data} />
      </div>
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105"
      >
        Back to Home
      </button>
    </div>
  );
}
