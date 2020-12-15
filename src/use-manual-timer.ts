import { useEffect, useRef, useState } from 'react';

type Status = 'started' | 'restart' | 'stopped' | 'not-started';

export const useManualTimer = (
  ticker: number,
  options: {
    onTimerEnd?: () => void;
  } = {}
) => {
  const [timer, setTimer] = useState<number | undefined>(0);
  const [endTime, setEndTime] = useState<number | undefined>();
  const [status, setStatus] = useState<Status>('not-started');
  const timerRef = useRef<any>();

  useEffect(() => {
    let clearer;
    switch (status) {
      case 'started': {
        console.log('starting');
        clearer = _startInterval();
        break;
      }
      case 'restart': {
        clearInterval(timerRef.current);
        console.log('re-starting');
        clearer = _startInterval();
        break;
      }
      case 'stopped':
      case 'not-started':
      default: {
        break;
      }
    }

    if (clearer && typeof clearer === 'function') {
      return clearer;
    }
  }, [status]);

  function startTimer(timeInMilliseconds) {
    setEndTime(_getEndTime(timeInMilliseconds));
    setTimer(timeInMilliseconds);
    if (status === 'started') {
      setStatus('restart');
    } else {
      setStatus('started');
    }
  }

  function stopTimer() {
    setStatus('stopped');
    clearInterval(timerRef.current);
  }

  function _getEndTime(timeInMilliseconds) {
    return new Date().setTime(new Date().getTime() + timeInMilliseconds);
  }

  function _startInterval() {
    function tick() {
      const now = new Date().getTime();
      const diff = endTime - now;
      if (diff <= 0) {
        clearInterval(timerRef.current);
        if (options.onTimerEnd) {
          options.onTimerEnd();
        }
        setTimer(0);
      } else {
        setTimer(diff);
      }
    }

    if (timer > 0) {
      timerRef.current = setInterval(tick, ticker);
      return () => clearInterval(timerRef.current);
    }
    return () => {};
  }

  return { startTimer, stopTimer, timer, stopped: status === 'stopped' };
};
