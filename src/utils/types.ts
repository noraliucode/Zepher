import { User } from "@react-native-google-signin/google-signin";

export type IOnLogin = (user: User | undefined) => void;

export type Goal = {
  name: string;
  description: string;
  createdTime: number;
  progress: DayProgress[];
  id: number;
};

export type DayProgress = {
  timestamp: number;
  link: string | null;
  isAccomplished: boolean;
  day: number;
};

export type GoalId = string;
