import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      title: '',
      description: '',
      deadline: '',
      doDate: '',
      assignedTo: [],
      columnId: '',
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    moveTask: () => {},
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        ...action.payload,
      };
    },
    removeTask: () => {},
    editTask: () => {},
  },
});

export const { moveTask, addTask, removeTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
