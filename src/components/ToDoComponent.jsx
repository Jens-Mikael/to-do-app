import {
  Box,
  TextField,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, clear, addTask } from "../redux/tasks";
import Task from "./Task";

const ToDoComponent = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setNewTask("");
  };
  return (
    <Box
      width="500px"
      maxWidth="500px"
      bgcolor="background.paper"
      borderRadius="1.5rem"
      p="1rem"
    >
      <Box display="flex" justifyContent="center" p="1rem 0 2rem 0">
        <Typography fontWeight="bold" variant="h4">Jens ToDoApp</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <TextField
          focused
          fullWidth
          placeholder="Add Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Tooltip title="Add new task">
          <IconButton
            onClick={handleAddTask}
            sx={{
              marginLeft: "0.4rem",
            }}
          >
            <AddCircleOutlineOutlinedIcon color="primary" fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      {tasks[0] === undefined ? (
        <>
        <Box display="flex" justifyContent="center" p="3rem 0 2rem 0">
          <Typography variant="subtitle1" fontWeight="light">You have no current tasks.</Typography>
        </Box>
        </>
      ) : (
        <>
          <Box mt="2rem">
            {tasks.map((task) => {
              console.log(task)
              return <Task key={task} taskDesc={task} />;
            })}
          </Box>
          <Box display="flex" justifyContent="center" m="1.5rem 0 1rem 0">
            <Button
              onClick={() => dispatch(clear())}
              variant="outlined"
              size="large"
              startIcon={<DeleteIcon />}
            >
              clear all tasks
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
//When theres no tasks what should be rendered
export default ToDoComponent;
