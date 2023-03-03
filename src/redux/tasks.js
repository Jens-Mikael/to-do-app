import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: ["Walk the dog", "Cook", "Program", "nänä"],
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

    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { clear, remove, addTask, edit } = tasksSlice.actions;

export default tasksSlice.reducer;
