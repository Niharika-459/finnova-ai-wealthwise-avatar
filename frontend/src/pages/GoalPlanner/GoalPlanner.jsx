import { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./GoalPlanner.css";

export default function GoalPlanner() {

  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = () => {

    if (!goal || !amount) {
      alert("Please select a goal and enter the target amount.");
      return;
    }

    const monthlyInvestment = Math.round(Number(amount) / 120);

    setPlan({
      monthly: monthlyInvestment,
      return: "12%",
      risk: "Moderate",
      completion: "2036",
    });

  };

  return (
    <Layout>

      <div className="goal-page">

        <h1>🎯 Goal Planner</h1>

        <div className="goal-card">

          <label>Select Financial Goal</label>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">Choose Goal</option>
            <option>Buy a House</option>
            <option>Buy a Car</option>
            <option>Child Education</option>
            <option>Retirement</option>
            <option>Vacation</option>
          </select>

          <label>Target Amount (₹)</label>

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button onClick={generatePlan}>
            Generate AI Plan
          </button>

        </div>

        {plan && (

          <div className="result-card">

            <h2>📊 AI Recommendation</h2>

            <p><strong>Goal:</strong> {goal}</p>

            <p><strong>Monthly Investment:</strong> ₹{plan.monthly}</p>

            <p><strong>Expected Return:</strong> {plan.return}</p>

            <p><strong>Risk Profile:</strong> {plan.risk}</p>

            <p><strong>Estimated Completion:</strong> {plan.completion}</p>

          </div>

        )}

      </div>

    </Layout>
  );

}