import { type Dispatch, SetStateAction } from "react";

export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
  time: string;
  image: string;
}

export type TaskArray = Task[];

export interface TasksDays {
  [key: string]: TaskArray;
}

export interface UserContextType {
  userId: string | undefined;
  setUserId: Dispatch<SetStateAction<string | undefined>>;
  tasks: TasksDays | undefined;
  setTasks: Dispatch<SetStateAction<TasksDays | undefined>>;
  currentDay: string | undefined;
  setCurrentDay: Dispatch<SetStateAction<string | undefined>>;
}

export interface NavLinkWithIconProps {
  to: string;
  icon: React.ReactElement;
  label: string;
}

export type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
