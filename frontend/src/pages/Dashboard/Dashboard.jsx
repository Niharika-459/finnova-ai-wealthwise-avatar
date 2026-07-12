import { useEffect, useState } from "react";

import Layout from "../../components/layout/Layout";
import FinancialHealthCard from "../../components/dashboard/FinancialHealthCard";
import StatCard from "../../components/dashboard/StatCard";
import GoalProgress from "../../components/dashboard/GoalProgress";
import InsightCard from "../../components/dashboard/InsightCard";

import "./Dashboard.css";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = {
          user: data.user,
          healthScore: data.healthScore,

          stats: [
            {
              title: "Savings",
              value: `₹${data.savings.toLocaleString()}`
            },
            {
              title: "Investments",
              value: `₹${data.investments.toLocaleString()}`
            },
            {
              title: "Monthly Income",
              value: `₹${data.monthlyIncome.toLocaleString()}`
            },
            {
              title: "Monthly Spending",
              value: `₹${data.monthlySpending.toLocaleString()}`
            }
          ],

          goals: data.goals.map((goal) => ({
            title: goal.goal,
            progress: goal.progress
          })),

          insight: data.recentInsight
        };

        setDashboardData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dashboard:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout>
        <h2 style={{ padding: "30px" }}>
          Loading Dashboard...
        </h2>
      </Layout>
    );
  }

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <Layout>
      <div className="dashboard">
        <h1 className="greeting">
          {greeting}, {dashboardData.user} 👋
        </h1>

        <FinancialHealthCard score={dashboardData.healthScore} />

        <div className="stats-grid">
          {dashboardData.stats.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        <div className="dashboard-bottom">
          <div className="goals-section">
            <h2>Goal Progress</h2>

            {dashboardData.goals.map((goal, index) => (
              <GoalProgress
                key={index}
                title={goal.title}
                progress={goal.progress}
              />
            ))}
          </div>

          <InsightCard insight={dashboardData.insight} />
        </div>
      </div>
    </Layout>
  );
}