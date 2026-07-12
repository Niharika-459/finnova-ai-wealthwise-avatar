import Layout from "../../components/layout/Layout";
import "./Recommendation.css";

export default function Recommendation() {
  return (
    <Layout>

      <div className="recommendation-page">

        <h1>📈 AI Investment Recommendations</h1>

        <div className="recommendation-card">

          <h2>Recommended Portfolio</h2>

          <div className="portfolio">

            <div className="item">
              <span>Mutual Funds</span>
              <strong>40%</strong>
            </div>

            <div className="item">
              <span>Fixed Deposits</span>
              <strong>30%</strong>
            </div>

            <div className="item">
              <span>Gold ETF</span>
              <strong>20%</strong>
            </div>

            <div className="item">
              <span>Emergency Savings</span>
              <strong>10%</strong>
            </div>

          </div>

          <hr />

          <p><strong>Risk Level:</strong> Moderate</p>

          <p><strong>Expected Annual Return:</strong> 12%</p>

          <p><strong>Confidence Score:</strong> 94%</p>

          <p>
            Based on your income, savings and financial goals,
            WealthWise Avatar recommends a diversified investment
            strategy to maximize long-term growth while maintaining
            moderate risk.
          </p>

        </div>

      </div>

    </Layout>
  );
}