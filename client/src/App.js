import BarChart from './Components/BarChart';
import SortButtons from './Components/SortButtons';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SortButtons />
        <BarChart />
      </div>
    </div>
  );
}

export default App;