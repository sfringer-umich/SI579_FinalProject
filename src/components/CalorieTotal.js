import {React, useState} from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CalorieTotal.css'


function CalorieTotal (props) {
    const { cals } = props; 
    const [userCals, setUserCals] = useState("");
    const total_cals = []
    let statement;
    let cal_sum = 0;
    let percentage;
    let bar_label;

    for (const i in cals) {
        total_cals.push(parseInt(cals[i].cals))
    }

    for (var i = 0; i < total_cals.length; i++) {
        cal_sum += total_cals[i];
    }

    if (cal_sum) {
        statement=`Calories Consumed: ${cal_sum}`
    } else if (cal_sum === 0) {
        statement=`Calories Consumed: 0`
    } else {
        statement= '';
    }


    if (userCals) {
        percentage = Math.round((cal_sum/userCals)*100);
        bar_label=`${percentage}% completed`
    } else {
        percentage = "";
    }

    if (percentage > 100) {
        bar_label=`You are ${Math.abs(userCals-cal_sum)} calories over your intended goal!`
    }


    return (
        <div>
            <h4 className='cal_goal_h4'>{statement}</h4>
            <div className='class_goal_div'>
                <label className="cal_goal">Calorie Goal:</label>
                <span className='cal_goal_span'>
                    <input
                        value={userCals}
                        onChange={(e) => setUserCals(e.target.value)}
                        min="0"
                        className="form-control"
                        type="number"
                        placeholder="Calories"
                    />
                </span>
            </div>
            <div className="progressBar">
                <ProgressBar now={percentage} label={bar_label} />
            </div>
        </div>    
    )
}

export default CalorieTotal;