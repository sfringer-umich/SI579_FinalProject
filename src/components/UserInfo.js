import './UserInfo.css';

function UserInfo (props) {
    const {user_data} = props;
    let data_list = []
    let cals;
    let activity_factor;
    let statement;

    for (let i in user_data) {
        data_list.push(user_data[i])
    }

    let age = parseInt(data_list[0])
    let weight = parseInt(data_list[1])/2.2
    let sex = data_list[2]
    let height = (parseInt(data_list[3]*12) + parseInt(data_list[4]))*2.54
    let physical_activity = data_list[5]

    if (physical_activity === 'Little/No Exercise') {
        activity_factor = 1.2;
    } else if (physical_activity === 'Lightly Active (1-2 days/week)') {
        activity_factor = 1.375;
    } else if (physical_activity === 'Moderately Active (3-5 days/week)') {
        activity_factor = 1.55;
    } else if (physical_activity === 'Very Active (6-7 days/week)') {
        activity_factor = 1.725;
    } else {
        activity_factor = 1.9;
    }

    if (sex==='Male') {
        cals = Math.round(((10*weight) + (6.25*height) - (5*age) + 5) * activity_factor);
    } else {
        cals = Math.round(((10*weight) + (6.25*height) - (5*age) - 161) * activity_factor);
    }

    if (cals) {
        statement = `Based on the information you entered, you can burn approximately ${cals} calories each day.`;
    } else {
        statement = ``;
    }


    return(
        <div>
            <br/>
            <br/>
            <h4 className='user_info_statement'>{statement}</h4>
        </div>
    )
}

export default UserInfo;