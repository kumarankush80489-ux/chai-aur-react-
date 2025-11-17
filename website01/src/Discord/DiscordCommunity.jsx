import React from "react";

export default function DiscordCommunity() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">
        Join Our Discord Community 🎮
      </h1>

      <a
        href="https://discord.gg/YOUR_INVITE_CODE" // 👉 replace with your actual invite link
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
      >
        Join Now
      </a>
    </div>
  );
}
