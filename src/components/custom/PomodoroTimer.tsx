import { useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  decrement,
  setTime,
  setIsRunning,
  selectMinutes,
  selectSeconds,
} from "@/app/features/timerSlice";

const PomodoroTimer = () => {
  const dispatch = useAppDispatch();

  const time = useAppSelector((state) => state.timer.value);
  const isRunning = useAppSelector((state) => state.timer.isRunning);
  const minutes = useAppSelector(selectMinutes);
  const seconds = useAppSelector(selectSeconds);

  const startTimer = useCallback(() => {
    dispatch(setIsRunning(true));
  }, [dispatch]);

  const stopTimer = useCallback(() => {
    dispatch(setIsRunning(false));
    dispatch(setTime(1500));
  }, [dispatch]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    const tick = () => {
      if (time === 0) {
        clearInterval(timer);
        stopTimer();
      } else {
        dispatch(decrement());
      }
    };

    if (isRunning) {
      timer = setInterval(tick, 1);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, dispatch, stopTimer]);

  const startClass = isRunning ? `default` : `secondary`;
  const stopClass = isRunning ? `secondary` : `default`;

  return (
    <div className='border border-solid border-slate-950 rounded p-4 flex flex-col text-center'>
      <h3 className='scroll-m-20 text-2xl font-thin mb-3'>Pomodoro Timer</h3>
      <p className='scroll-m-20 text-lg font-bold'>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <div>
        <Button variant={startClass} className='px-6 m-3' onClick={startTimer}>
          Start
        </Button>
        <Button variant={stopClass} className='px-6 m-3' onClick={stopTimer}>
          Stop
        </Button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
