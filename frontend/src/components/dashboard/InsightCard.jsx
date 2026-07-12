import "./InsightCard.css";

export default function InsightCard({ insight }) {

    return(

        <div className="insight-card">

            <h2>AI Insight</h2>

            <p>{insight}</p>

            <button>

                Chat with WealthWise

            </button>

        </div>

    )

}