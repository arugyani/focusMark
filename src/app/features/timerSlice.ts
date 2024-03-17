import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { TimerState } from "@/types-and-interfaces";

const initialState: TimerState = {
  value: 1500,
  isRunning: false,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setIsRunning: (state, action: PayloadAction<boolean>) => {
      state.isRunning = action.payload;
    },
  },
});

export const { decrement, decrementByAmount, setTime, setIsRunning } =
  timerSlice.actions;

export const selectMinutes = (state: RootState) =>
  Math.floor(state.timer.value / 60);
export const selectSeconds = (state: RootState) => state.timer.value % 60;

export default timerSlice.reducer;
