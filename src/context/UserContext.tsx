//properties: userId, tasks, day
import { createContext, useContext, useEffect, useState } from "react";
import { type PropsWithChildren } from "react";
import { type TasksDays, type UserContextType } from "../types";
import { getUserData } from "../api/tasksApi";
import { calculateWhatDayIsIt } from "../utility/calculateWhatDayIsIt";

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [userId, setUserId] = useState<string>();
  const [tasks, setTasks] = useState<TasksDays>();
  const [currentDay, setCurrentDay] = useState<string | undefined>();
  const [displayName, setDisplayName] = useState<string | undefined>();

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const res = await getUserData(userId);
        if (res) {
          setTasks(res.tasks);
          if (res.startDate) {
            setCurrentDay(calculateWhatDayIsIt(res.startDate));
          }
        }
      };
      fetchUserData();
    }
  }, [userId, currentDay]);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        tasks,
        setTasks,
        currentDay,
        setCurrentDay,
        displayName,
        setDisplayName,
      }}
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
