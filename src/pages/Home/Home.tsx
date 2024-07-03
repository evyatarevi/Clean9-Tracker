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
import { updateTasksDay, createStartDate } from "../../api/tasksApi";
import { checkTypeError } from "../../utility/checkTypeError";
import { calculateWhatDayIsIt } from "../../utility/calculateWhatDayIsIt";
import fieldsOfGreen from "../../assets/images/products/fieldsOfGreen.png";

const Home = () => {
  const [error, setError] = useState<string | null>();
  const [isPending, setIsPending] = useState<boolean>();
  const { tasks, setTasks, currentDay, setCurrentDay, userId } =
    useUserContext();

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
    } catch (error: unknown) {
      const errorMessage = checkTypeError(error);
      setError(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  const handleStartPlain = async () => {
    if (userId) {
      try {
        const startDate = await createStartDate(userId);
        setCurrentDay(calculateWhatDayIsIt(startDate));
      } catch (error: unknown) {
        const errorMessage = checkTypeError(error);
        setError(errorMessage);
      }
    }
  };

  if (!currentDay) {
    return <button onClick={handleStartPlain}>start plain</button>;
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <List sx={{ width: "20rem" }}>
          {tasks &&
            currentDay &&
            tasks[currentDay].map((task: Task, index: number) => (
              <ListItem
                key={task.id}
                sx={{
                  padding: "5px 15px",
                  bgcolor: "background.paper",
                  margin: "10px 0",
                  borderRadius: "15px",
                  boxShadow: "5",
                }}
                onClick={() => handleToggleCompletion(index)}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      fontSize="1rem"
                      fontWeight="bold"
                    >
                      {task.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" fontSize="0.7rem">
                      {task.time}
                    </Typography>
                  }
                  style={
                    task.isCompleted ? { textDecoration: "line-through" } : {}
                  }
                />
                {/* <img src={fieldsOfGreen} alt="fieldsOfGreen" /> */}
                <Box
                  component="img"
                  sx={{
                    height: 40,
                    width: 40,
                    // maxHeight: { xs: 200, md: 300 },
                    // maxWidth: { xs: 200, md: 300 },
                  }}
                  alt="fieldsOfGreen"
                  src={fieldsOfGreen}
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
