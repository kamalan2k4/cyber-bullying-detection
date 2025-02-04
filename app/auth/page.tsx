"use client"; // ✅ Required for hooks in Client Components

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // ✅ Use correct hooks

function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams(); // ✅ Get search params inside the component
  const category = searchParams.get("category") || ""; // ✅ Extract category safely
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic here
    router.push(`/upload?category=${category}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Login / Sign Up</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email:</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Password:</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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

// ✅ Wrap `AuthPage` inside `<Suspense>` to fix the Next.js build error
export default function AuthWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPage />
    </Suspense>
  );
}
