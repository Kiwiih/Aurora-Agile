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
      addTask: () => {},
      removeTask: () => {},
      editTask: (state, action) => {
        const { taskId, assignedTo } = action.payload;
        const taskToUpdate = state.tasks.find(task => task.id === taskId);
        if (taskToUpdate) {
          taskToUpdate.assignedTo = assignedTo;
        }
      },
    },
  });

export const { editTask } = taskSlice.actions;

export default taskSlice.reducer;
