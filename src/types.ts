export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export type TaskArray = Task[];

export interface TasksDays {
  [key: string]: TaskArray;
  // day2: TaskArray;
  // day3: TaskArray;
  // day4: TaskArray;
  // day5: TaskArray;
  // day6: TaskArray;
  // day7: TaskArray;
  // day8: TaskArray;
  // day9: TaskArray;
}
