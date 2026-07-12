import "./FinancialHealthCard.css";

export default function FinancialHealthCard({ score }) {

    return(

        <div className="health-card">

            <h2>Financial Health Score</h2>

            <div className="score">

                {score}/100

            </div>

        </div>

    )

}