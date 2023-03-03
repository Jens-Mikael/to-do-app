import {
  Box,
  Typography,
  IconButton,
  Checkbox,
  TextField,
  Tooltip,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useState, useEffect } from "react";
import { remove, edit } from "../redux/tasks";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ taskDesc }) => {
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(taskDesc);
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);


  return (
    <Box
      bgcolor="primary.main"
      p="0.5rem"
      m="0.6rem 0"
      borderRadius="0.4rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {isEdit ? (
        <>
          <TextField
            variant="standard"
            color="primary"
            fullWidth
            focused
            autoFocus
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Tooltip title="Save">
            <IconButton onClick={() => setIsEdit((prev) => !prev)}>
              <CheckCircleOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <Box alignItems="center" display="flex">
            <Checkbox
              color="default"
              onChange={() => setIsDone((prev) => !prev)}
            />
            <Typography
              variant="h5"
              sx={{
                textDecoration: `${isDone ? "line-through" : null}`,
                color: `${isDone ? "text.disabled" : null}`,
              }}
            >
              {value}
            </Typography>
          </Box>
          <Box alignItems="center" display="flex">
            <Tooltip title="Edit">
              <IconButton onClick={() => setIsEdit((prev) => !prev)}>
                <EditOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Clear">
              <IconButton onClick={() => dispatch(remove(value))}>
                <HighlightOffOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Task;
