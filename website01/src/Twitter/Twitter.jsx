import React from "react";

export default function Twitter() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-sky-600">
        Follow Us on Twitter (X) 🐦
      </h1>

      <a
        href="https://twitter.com/@BeingSalmanKhan." // 👉 Replace with your actual Twitter profile link
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
      >
        Visit Our Twitter
      </a>
    </div>
  );
}
