import { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Privacy.css";

export default function Privacy() {

  const [salary, setSalary] = useState(true);
  const [investment, setInvestment] = useState(true);
  const [upi, setUpi] = useState(false);

  return (

    <Layout>

      <div className="privacy-page">

        <h1>🔒 Privacy & Consent</h1>

        <div className="privacy-card">

          <h2>Choose Data to Share with AI</h2>

          <label>
            <input
              type="checkbox"
              checked={salary}
              onChange={() => setSalary(!salary)}
            />
            Salary Account
          </label>

          <label>
            <input
              type="checkbox"
              checked={investment}
              onChange={() => setInvestment(!investment)}
            />
            Investments
          </label>

          <label>
            <input
              type="checkbox"
              checked={upi}
              onChange={() => setUpi(!upi)}
            />
            UPI Transactions
          </label>

          <button>
            Save Preferences
          </button>

        </div>

      </div>

    </Layout>

  );

}