import React from "react";

export default function DribbblePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">
        Follow Us on Dribbble 🎨
      </h1>

      
      <a
        href="https://dribbble.com/yourusername" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-pink-600 transition"
      >
        Visit My Dribbble Profile
      </a>
    </div>
  );
}
