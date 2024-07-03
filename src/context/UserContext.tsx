//properties: userId, tasks, day
import { createContext, useContext, useEffect, useState } from "react";
import { type PropsWithChildren, Dispatch, SetStateAction } from "react";
import { type TasksDays } from "../types";
import { getUserData } from "../api/tasksApi";

// type TasksDaysKeys = keyof TasksDays;

interface UserContextType {
  userId: string | undefined;
  setUserId: Dispatch<SetStateAction<string | undefined>>;
  tasks: TasksDays | undefined;
  setTasks: Dispatch<SetStateAction<TasksDays | undefined>>;
  currentDay: string | undefined;
  setCurrentDay: Dispatch<SetStateAction<string | undefined>>;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [userId, setUserId] = useState<string>();
  const [tasks, setTasks] = useState<TasksDays>();
  const [currentDay, setCurrentDay] = useState<string | undefined>("day1");

  console.log("tasks: ", tasks);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const res = await getUserData(userId);
        if (res) {
          setTasks(res.tasks);
        }
      };
      fetchUserData();
    }
  }, [userId]);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, tasks, setTasks, currentDay, setCurrentDay }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export { UserContextProvider, useUserContext };
