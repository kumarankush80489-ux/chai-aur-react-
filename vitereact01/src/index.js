// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { randomUUID } from "crypto";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple in-memory conversation store (demo)
const conversations = new Map();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.warn("Warning: OPENAI_API_KEY not set. Create server/.env and add your key.");
}

// Helper: call OpenAI Chat Completions
async function callOpenAI(messages) {
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 512,
    }),
  });

  const text = await resp.text();
  if (!resp.ok) {
    throw new Error(`OpenAI API error ${resp.status}: ${text}`);
  }
  const data = JSON.parse(text);
  return data.choices?.[0]?.message?.content ?? "";
}

// Create a new session
app.post("/api/session", (req, res) => {
  const sessionId = randomUUID();
  conversations.set(sessionId, []);
  res.json({ sessionId });
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message (string) is required" });
    }

    // get or create history
    let history = sessionId && conversations.has(sessionId)
      ? conversations.get(sessionId)
      : [];

    // If session didn't exist, create a new session id
    let usedSessionId = sessionId;
    if (!usedSessionId || !conversations.has(usedSessionId)) {
      usedSessionId = randomUUID();
      conversations.set(usedSessionId, history);
    }

    // append user message
    history.push({ role: "user", content: message });

    // system prompt (customize in .env with SYSTEM_PROMPT)
    const systemPrompt = {
      role: "system",
      content: process.env.SYSTEM_PROMPT || "You are a helpful assistant.",
    };

    const messages = [systemPrompt, ...history];

    const replyText = await callOpenAI(messages);

    // store assistant reply
    history.push({ role: "assistant", content: replyText });
    conversations.set(usedSessionId, history);

    res.json({ sessionId: usedSessionId, reply: replyText });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: err.message ?? "Server error" });
  }
});

// Clear a session (optional)
app.post("/api/session/clear", (req, res) => {
  const { sessionId } = req.body;
  if (sessionId && conversations.has(sessionId)) {
    conversations.set(sessionId, []);
    return res.json({ ok: true });
  }
  res.status(404).json({ error: "session not found" });
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
