# background-timer

Simple react hook to run a timer in the background

## Motivation
Nothing really, pulled it off a project I wrote it for and now it's a package.

## Install

```sh
npm i @barelyreaper/background-timer
```

## Usage

```js
import { useBackgroundTimer, msTimestamp } from 'background-timer';

export default function App() {
  /**
   * @param milliseconds
   * @returns {timer: milliseconds, reset: function} resets the timer
   */

  const { timer, reset } = useBackgroundTimer(2 * 1000 * 60,{
    onTimerEnd:()=>{
      alert("Timer Ended");
    }
  });
  

  return <>
    <p>{msTimestamp(timer)}</p>
    <button disabled={timer>0} onClick={()=>reset()}>Reset Timer</button>
  </>;
}
```
