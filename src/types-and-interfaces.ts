/* REDUX */

// timerSlice
export interface TimerState {
  value: number;
  isRunning: boolean;
}

export interface AppProps {
  title: string;
}

export type NameType = {
  first: string;
  last: string;
};

export type LoginType = {
  uuid: string;
};

export type UserType = {
  login: LoginType;
  name: NameType;
  email: string;
};
