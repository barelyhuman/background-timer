import {
  msTimestamp,
  useBackgroundTimer,
} from '@barelyreaper/background-timer';
import './App.css';

function App() {
  const { timer, reset } = useBackgroundTimer(2 * 1000 * 60);

  console.log(timer);

  return (
    <div className="App">
      <p>{msTimestamp(timer)}</p>
      <button disabled={timer > 0} onClick={() => reset()}>
        Reset Timer
      </button>
    </div>
  );
}

export default App;
