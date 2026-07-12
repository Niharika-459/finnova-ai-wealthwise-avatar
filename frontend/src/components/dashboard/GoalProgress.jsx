import "./GoalProgress.css";

export default function GoalProgress({ title, progress }) {

    return(

        <div className="goal">

            <div className="goal-header">

                <span>{title}</span>

                <span>{progress}%</span>

            </div>

            <div className="progress">

                <div

                    className="progress-fill"

                    style={{width:`${progress}%`}}


                ></div>

            </div>

        </div>

    )

}