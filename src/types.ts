export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export type TaskArray = Task[];

export interface TasksDays {
  [key: string]: TaskArray;
}
