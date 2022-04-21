import {useState} from "react";
import './CalorieTracker.css';

function CalorieTracker (props) {
    const { setCalItems } = props;
    const [itemDescription, setItemDescription] = useState('');
    const [numCals, setNumCals] = useState('');
    const [itemTime, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const addItems = () => {
       if (!itemDescription || !numCals || !itemTime) {
            setMessage('Try Again! No Empty Values Allowed');
            setStatus('error')
        }
        else {
            setCalItems((currentCalItems) => {
                return [
                    ...currentCalItems,
                    {
                        description: itemDescription,
                        created: Date.now(),
                        cals: numCals,
                        time: itemTime,
                    }, 
                ];
            });
            setItemDescription('');
            setNumCals('');
            setTime('');
            setMessage('');
            setStatus('success')
    }
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            addItems()
        }
    }

    return (
        <>
        <hr></hr>
        <h4>Now that you know how many calories you can burn in a single day, use the Calorie Tracker below to keep track of what you eat, drink, or burn!  </h4>
        <h6>(If you have exercised today, make sure to track those calories too! But, remember to subtract (i.e -200 calories))  </h6>
        <br/>
        <br/>
        <div className="container">
            <div className="row">
            <div className={'message ' + status}>{message}</div>
                <div className="col-sm-4 col-sm-offset-10"></div>
                    <div className="input-group">
                    <input
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        className="form-control w-25"
                        type="text"
                        placeholder="Food/Drink Item or Exercise"
                        aria-label="Item"
                        onKeyDown={keyDownHandler}
                    />
                    <input
                        value={numCals}
                        onChange={(e) => setNumCals(e.target.value)}
                        className="form-control"
                        type="number"
                        placeholder="# Calories Consumed/Burned"
                        aria-label="Due Date"
                        onKeyDown={keyDownHandler}
                    />
                    <input
                        value={itemTime}
                        onChange={(e) => setTime(e.target.value)}
                        className="form-control"
                        type="time"
                        aria-label="Due Time"
                        onKeyDown={keyDownHandler}
                    />
                    <button
                        onClick={addItems}
                        className="btn btn-primary"
                        aria-label="Add">
                        Add
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CalorieTracker;


