import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F5F7FA",
      }}
    >
      <h1>🏦 WealthWise Avatar</h1>

      <p>Your Trusted AI Wealth Companion</p>

      <Link to="/dashboard">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#003366",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Enter Dashboard
        </button>
      </Link>
    </div>
  );
}