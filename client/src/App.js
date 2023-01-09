import './App.css';
import BarChart from './Bars/BarChart';
import { useDispatch, useSelector } from 'react-redux';
import { bubbleSort } from './store/randomArraySlice';

function App() {

  const dispatch = useDispatch();
  const randomArray = useSelector((state) => state.randomArray);

  const sortedArray = bubbleSort(randomArray);

  const bubbleSortHandler = () => {
    dispatch(bubbleSort(randomArray));
  };

  return (
    <div className="App">

      <div className='container'>

        <div className='button_container'>
          <button id='reset_btn' className='btn' onClick={() => { window.location.reload(); }}>Reset Bars</button>
          <button id='bubble_btn' className='btn' onClick={bubbleSortHandler}>Bubble Sort</button>
          <button id='merge_btn' className='btn'>Merge Sort</button>
        </div>

        <BarChart />
      </div>

    </div>
  );
}

export default App;
