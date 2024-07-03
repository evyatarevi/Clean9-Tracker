import { useState } from "react";
import {
  Typography,
  CircularProgress,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Task } from "../../types";
import { useUserContext } from "../../context/UserContext";
import { updateTasksDay } from "../../api/tasksApi";

const Home = () => {
  const [error, setError] = useState<string | null>();
  const [isPending, setIsPending] = useState<boolean>();
  const { tasks, setTasks, currentDay, userId } = useUserContext();

  const handleToggleCompletion = async (index: number) => {
    try {
      setIsPending(true);
      setError("");
      if (tasks && currentDay && userId) {
        const updatedTasks = tasks[currentDay] ? [...tasks[currentDay]] : [];
        updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
        await updateTasksDay(userId, currentDay, updatedTasks);
        setTasks({ ...tasks, [currentDay]: updatedTasks });
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <List>
          {tasks &&
            currentDay &&
            tasks[currentDay].map((task: Task, index: number) => (
              <ListItem
                key={task.id}
                sx={{ padding: "0px 8px" }}
                onClick={() => handleToggleCompletion(index)}
              >
                <ListItemText
                  primary={task.name}
                  style={
                    task.isCompleted ? { textDecoration: "line-through" } : {}
                  }
                />
              </ListItem>
            ))}
          {isPending && <CircularProgress size={20} />}
          {error && <Typography color="error">{error}</Typography>}
        </List>
      </Box>
    </Box>
  );
};

export default Home;
