import { useEffect, useState } from "react";

export default function App() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5173/api/session", { method: "POST" })
      .then(r => r.json())
      .then(d => setSessionId(d.sessionId));
  }, []);

  async function send() {
    if (!input.trim()) return;
    const text = input;
    setMessages(m => [...m, { sender: "user", text }]);
    setInput("");
    setLoading(true);

    const res = await fetch("http://localhost:5173/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, message: text }),
    });
    const data = await res.json();

    setMessages(m => [...m, { sender: "assistant", text: data.reply }]);
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "Arial" }}>
      <h1>AI Chatbot</h1>
      <div style={{ border: "1px solid #ddd", padding: 10, minHeight: 300 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "5px 0" }}>
            <b>{m.sender}:</b> {m.text}
          </div>
        ))}
        {loading && <div>Assistant is typing...</div>}
      </div>
      <div style={{ marginTop: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          style={{ width: "80%", padding: 5 }}
        />
        <button onClick={send} style={{ padding: 5 }}>Send</button>
      </div>
    </div>
  );
}
