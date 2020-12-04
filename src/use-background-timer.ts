import { useEffect, useRef, useState } from 'react';

export const useBackgroundTimer = (
  timeInMilliseconds: number,
  options: {
    onTimerEnd: () => void;
  }
) => {
  const [timer, setTimer] = useState<number | undefined>();
  const [endTime, setEndTime] = useState<number | undefined>();
  const timerRef = useRef<any>();

  useEffect(() => {
    if (!endTime && timeInMilliseconds > 0) {
      setEndTime(_getEndTime());
      setTimer(timeInMilliseconds);
    }
  }, [timeInMilliseconds]);

  useEffect(() => {
    function tick() {
      const now = new Date().getTime();
      const diff = endTime - now;
      if (diff <= 0) {
        setTimer(0);
        options.onTimerEnd && options.onTimerEnd();
        clearInterval(timerRef.current);
      }
      setTimer(diff);
    }
    if (timer > 0) {
      timerRef.current = setInterval(tick, 1000);
      return () => clearInterval(timerRef.current);
    }
    return () => {};
  }, [timer]);

  function reset() {
    clearInterval(timerRef.current);
    setEndTime(_getEndTime());
    setTimer(timeInMilliseconds);
  }

  function _getEndTime() {
    return new Date().setTime(new Date().getTime() + timeInMilliseconds);
  }

  return { timer, reset };
};
