import './App.css';
import BarChart from './Bars/BarChart';


function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='button_container'>
          <button id='reset_btn' className='btn'>Reset Bars</button>
          <button id='bubble_btn' className='btn'>Bubble Sort</button>
        </div>

        {/* <div className='bar_container'> */}
        <BarChart />
        {/* </div> */}

      </div>

    </div>
  );
}

export default App;
