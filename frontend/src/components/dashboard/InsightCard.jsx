import { useNavigate } from "react-router-dom";
import "./InsightCard.css";

export default function InsightCard({ insight }) {
  const navigate = useNavigate();

  return (
    <div className="insight-card">
      <h2>AI Insight</h2>

      <p>{insight}</p>

      <button onClick={() => navigate("/avatar")}>
        Chat with WealthWise →
      </button>
    </div>
  );
}