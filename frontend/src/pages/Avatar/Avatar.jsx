import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import "./Avatar.css";
import {
  Bot,
  Send,
  Mic,
  Home,
  PiggyBank,
  TrendingUp,
  Landmark,
} from "lucide-react";

export default function Avatar() {
  const [response, setResponse] = useState(
    "Loading your financial profile..."
  );

  const [question, setQuestion] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load profile.");
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);

        const hour = new Date().getHours();

        let greeting = "Good Evening";

        if (hour < 12) {
          greeting = "Good Morning";
        } else if (hour < 17) {
          greeting = "Good Afternoon";
        }

        setResponse(
          `${greeting}, ${data.user} 👋\n\nSelect one of the options above or ask your own financial question to receive AI-powered guidance.`
        );
      })
      .catch((err) => {
        console.error("Failed to load dashboard profile:", err);

        setResponse(
          "Unable to load your financial profile. Please refresh the page."
        );
      });
  }, []);

  async function askAvatar(userQuestion) {
    if (!profile) {
      setResponse(
        "Loading your financial profile. Please wait a moment and try again."
      );
      return;
    }

    if (!userQuestion.trim()) return;

    setResponse("Thinking...");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/avatar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userQuestion,
            profile: profile,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      setResponse(data.reply);
    } catch (error) {
      console.error(error);

      setResponse(
        "Unable to contact the AI service. Please try again after a few moments."
      );
    }
  }

  return (
    <Layout>
      <div className="avatar-page">
        <div className="avatar-header">
          <div className="avatar-icon">
            <Bot size={50} />
          </div>

          <div>
            <h1>WealthWise Avatar</h1>
            <p>Your Trusted AI Wealth Advisor</p>
          </div>
        </div>

        <div className="quick-actions">
          <div
            className="action-card"
            onClick={() => askAvatar("Can I buy a house?")}
          >
            <Home size={28} />
            <span>Can I buy a house?</span>
          </div>

          <div
            className="action-card"
            onClick={() =>
              askAvatar("What is the best investment for ₹5000?")
            }
          >
            <TrendingUp size={28} />
            <span>Best investment for ₹5000</span>
          </div>

          <div
            className="action-card"
            onClick={() => askAvatar("How can I improve my savings?")}
          >
            <PiggyBank size={28} />
            <span>Improve my savings</span>
          </div>

          <div
            className="action-card"
            onClick={() => askAvatar("How can I save tax?")}
          >
            <Landmark size={28} />
            <span>Help me save tax</span>
          </div>
        </div>

        <div className="chat-box">
          <div className="message ai">
            <Bot size={24} />

            <div className="bubble">
              <strong>WealthWise Avatar</strong>
              <p style={{ whiteSpace: "pre-line" }}>{response}</p>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask your financial question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (question.trim() !== "") {
                  askAvatar(question);
                  setQuestion("");
                }
              }
            }}
          />

          <button type="button">
            <Mic size={18} />
          </button>

          <button
            type="button"
            onClick={() => {
              if (question.trim() !== "") {
                askAvatar(question);
                setQuestion("");
              }
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </Layout>
  );
}