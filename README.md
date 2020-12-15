# background-timer

Simple react hook to run a timer in the background

## Motivation

Nothing really, pulled it off a project I wrote it for and now it's a package.

## Install

```sh
npm i @barelyreaper/background-timer
```

## Usage

### On Render Timer

Used when the timer is **not** dependant on some other property and can be run as soon as the page/component is rendered (example OTP validation screens)

```js
import { useBackgroundTimer, msTimestamp } from 'background-timer';

export default function App() {
  /**
   * @param milliseconds
   * @returns {timer: milliseconds, reset: function} resets the timer
   */

  const { timer, reset } = useBackgroundTimer(2 * 1000 * 60, {
    onTimerEnd: () => {
      alert('Timer Ended');
    },
  });

  return (
    <>
      <p>{msTimestamp(timer)}</p>
      <button disabled={timer > 0} onClick={() => reset()}>
        Reset Timer
      </button>
    </>
  );
}
```

### Manually Control timer trigger

Used when the timer is dependant on some other property that might not be available during app render (example: Booking lock-in dependency)

```js
import { msTimestamp, useManualTimer } from '@barelyreaper/background-timer';
import './App.css';

function App() {
  /**
   * @param ticker delay provided to the internal interval, 1000 means timer executes every 1 second
   * @param options={onTimerEnd?:function} optional options object that allows adding a callback on timer end
   * @returns {timer: milliseconds, startTimer: function(millisecondsToExecFor){},stopTimer:function,stopped:Boolean}
   */

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
```
