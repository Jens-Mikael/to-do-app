import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: ["Walk the dog", "Cook", "Program", "Poop"],
  },
  reducers: {
    clear: (state) => {
      state.tasks = [];
    },
    remove: (state, action) => {
      const newArr = state.tasks.filter(task => task !== action.payload)
      state.tasks = newArr;
    },
    edit: (state, action) => {
      const [oldTask, newTask] = action.payload;
      const i = state.tasks.indexOf(oldTask);
      state.tasks[i] = newTask;
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { clear, remove, addTask, edit } = tasksSlice.actions;

export default tasksSlice.reducer;
