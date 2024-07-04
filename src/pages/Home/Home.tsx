import { useState } from "react";
import {
  Typography,
  CircularProgress,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Task, ClickHandler } from "../../types";
import { useUserContext } from "../../context/UserContext";
import { updateTasksDay, createUserDoc } from "../../api/tasksApi";
import { checkTypeError } from "../../utility/checkTypeError";
import { calculateWhatDayIsIt } from "../../utility/calculateWhatDayIsIt";
import images from "../../images/productsImages";
import Header from "../../components/Header/Header";
import StartPlaning from "../../components/StartPlaning/StartPlaning";
import bgImages from "../../images/bgImages";

const Home = () => {
  const [error, setError] = useState<string | null>();
  const [isPending, setIsPending] = useState<boolean>();
  const { tasks, setTasks, currentDay, setCurrentDay, userId } =
    useUserContext();

  console.log("currentDay:", currentDay);
  console.log("tasks:", tasks);

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

  const handleStartPlain: ClickHandler = async () => {
    if (userId) {
      try {
        const startDate = await createUserDoc(userId);
        setCurrentDay(calculateWhatDayIsIt(startDate));
      } catch (error: unknown) {
        const errorMessage = checkTypeError(error);
        setError(errorMessage);
      }
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ bgcolor: "#eeeeee" }}
      >
        {!currentDay ? (
          <StartPlaning handleStartPlain={handleStartPlain} />
        ) : (
          <>
            <Header imageUrl={bgImages.headerImg} />
            <Box display="flex" flexDirection="column" alignItems="center">
              <List sx={{ width: "20rem" }}>
                {tasks &&
                  currentDay &&
                  tasks[currentDay].map((task: Task, index: number) => (
                    <ListItem
                      key={task.id}
                      sx={{
                        padding: "5px 15px",
                        // bgcolor: task.isCompleted ? "#bdbdbd" : "background.paper",
                        bgcolor: "background.paper",
                        opacity: task.isCompleted ? "0.3" : "1",
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
                          <Typography
                            variant="body1"
                            fontSize="0.7rem"
                            sx={{
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                              textAlign: "center",
                              width: "65px",
                              borderRadius: "5px",
                              padding: "2px",
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor:
                                task.time === "בוקר"
                                  ? "#d8b8d8"
                                  : task.time === "צהריים"
                                  ? "#afc2ae"
                                  : task.time === "ערב"
                                  ? "#f3d1a3 "
                                  : task.time === "לפני השינה"
                                  ? "#aad4f4"
                                  : "#e1888b",
                            }}
                          >
                            {task.time}
                          </Typography>
                        }
                        style={
                          task.isCompleted
                            ? {
                                textDecoration: "line-through",
                              }
                            : {}
                        }
                      />
                      <Box
                        component="img"
                        sx={{
                          height: 40,
                          width: 40,
                        }}
                        alt="fieldsOfGreen"
                        src={images[task.image]}
                      />
                    </ListItem>
                  ))}
                {isPending && <CircularProgress size={20} />}
                {error && <Typography color="error">{error}</Typography>}
              </List>
            </Box>
          </>
        )}
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Home;
