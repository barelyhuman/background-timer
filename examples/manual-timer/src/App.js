import {
  msTimestamp,
  useManualTimer,
} from '@barelyreaper/background-timer/dist/index';
import './App.css';

function App() {
  const { startTimer, stopTimer, timer, stopped } = useManualTimer(1000, {
    onTimerEnd: () => {
      alert('Timer Ended');
    },
  });

  return (
    <div className="App">
      <h1 align="center">Manual Timer</h1>
      <p>{msTimestamp(timer)}</p>
      <button onClick={() => startTimer(2 * 10 * 1000)}>
        {timer > 0 ? 'Reset Timer' : 'Start Timer'}
      </button>
      <button
        style={{ marginLeft: '8px' }}
        disabled={timer < 0 || stopped}
        onClick={() => stopTimer()}
      >
        Stop Timer
      </button>
    </div>
  );
}

export default App;
