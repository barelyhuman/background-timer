import {
  msTimestamp,
  useBackgroundTimer,
} from '@barelyreaper/background-timer';
import './App.css';

function App() {
  const { timer, reset } = useBackgroundTimer(2 * 1000, {
    onTimerEnd: () => {
      alert('Timer Ended');
    },
  });

  return (
    <div className="App">
      <h1 align="center">On Render Timer</h1>
      <p>{msTimestamp(timer)}</p>
      <button disabled={timer > 0} onClick={() => reset()}>
        Reset Timer
      </button>
    </div>
  );
}

export default App;
