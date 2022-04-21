import BootstrapModal from './components/BootstrapModal';
import CalorieTracker from './components/CalorieTracker';
import Popovers from './components/Popovers';
import CalorieItem from './components/CalorieItem';
import CalorieTotal from './components/CalorieTotal';
import {useState} from "react";
import './App.css';


function App() {
  const [calItems, setCalItems] = useState([]);


  const removeCalItem = (created) => {
      setCalItems((previousCalItems) => {
          const withItemRemoved = previousCalItems.filter((item) => {
              return item.created !== created
          });
          return withItemRemoved;
      });
  }
    
    
  return (
    <main className="i-am-main">
      <Popovers/>
      <hr></hr>
      <br/>
      <br/>
      <h1 className='app_title'>Sarah's Calorie Tracking App</h1>
      <h2>To get started, click the button below to find out how many calories you can burn each day. </h2>
      <BootstrapModal/>
      <section>
        <CalorieTracker setCalItems={setCalItems}/>
      </section>
      <ul className="list-group">
            {calItems.map((item) =>
                <CalorieItem
                    description={item.description}
                    time={item.time}
                    cals={item.cals}
                    created={item.created}
                    key={item.created}
                    remove={() => removeCalItem(item.created)}
                />
            )}
        </ul>
        <CalorieTotal cals={calItems}/>
        <br/>
        <br/>
    </main>
  );
}

export default App;
