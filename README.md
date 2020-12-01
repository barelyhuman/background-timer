# background-timer

Simple react hook to run a timer in the background

## Usage

```js
import { useBackgroundTimer, msTimestamp } from 'background-timer';

export default function App() {
  /**
   * @param milliseconds
   * @returns {timer: milliseconds, reset: function} resets the timer
   */

  const { timer, reset } = useBackgroundTimer(2 * 1000 * 60);

  return <>{msTimestamp(timer)}</>;
}
```
