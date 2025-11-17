import React from "react";

export default function DiscordButton() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <a
        href="https://discord.gg/YOUR_INVITE_CODE" // 👈 Replace with your actual Discord invite link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
      >
        Join Our Discord
      </a>
    </div>
  );
}
