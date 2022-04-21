
const CalorieItem = (props) => {
    const { description, cals, time, remove } = props;
    const t = time
    let statement;
    var [h,m] = t.split(":");
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    var strTime = h + ':' + m + ' ' + ampm;

    if (cals <= 0) {
        statement = `You burned ${Math.abs(cals)} calories`;
    } else {
        statement = `This item was ${cals} calories`;
    }
  
    return (
        <a href="#" className="list-group-item list-group-item-action flex-column">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{description}</h5>
            <small>{strTime}</small>
        </div>
        <div className="d-flex w-400 justify-content-between">
            <small>{statement}</small>
                <div>
                <button className="btn btn-sm btn-outline-danger done" type="button" onClick={remove}>Remove</button>
                </div>
        </div>
        </a>
    )
  }
  
  export default CalorieItem;