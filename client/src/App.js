import './App.css';
import BarChart from './Bars/BarChart';

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='button_container'>
          <button id='reset_btn' className='btn' onClick={() => { window.location.reload(); }}>Reset Bars</button>
          <button id='bubble_btn' className='btn'>Bubble Sort</button>
          <button id='merge_btn' className='btn'>Merge Sort</button>
        </div>

        <BarChart />
      </div>

    </div>
  );
}

export default App;
