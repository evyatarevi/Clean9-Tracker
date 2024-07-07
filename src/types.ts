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
export type ChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface recipeProps {
  title: string;
  description: string;
  imgUrl: string;
}

export interface recipeData {
  title: string;
  description: string;
  imgUrl: string;
}

export type recipesData = recipeData[];
