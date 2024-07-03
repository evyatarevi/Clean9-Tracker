import { getDocument } from "../../api/expApi";
import { useEffect, useState } from "react";
import {
  Typography,
  CircularProgress,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Task } from "../../types";
import { useUserContext } from "../../context/UserContext";
import { TasksDays } from "../../types";

const Home = () => {
  const [error, setError] = useState<string | null>();
  const [isPending, setIsPending] = useState<boolean>();
  const { tasks, setTasks, currentDay } = useUserContext();

  const handleToggleCompletion = (index: number) => {
    if (tasks && currentDay) {
      const updatedTasks = tasks[currentDay] ? [...tasks[currentDay]] : [];
      updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
      // Update task completion in the database here
      setTasks({ ...tasks, [currentDay]: updatedTasks });
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
        </List>
        {isPending && <CircularProgress size={20} />}
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Box>
  );
};

export default Home;
