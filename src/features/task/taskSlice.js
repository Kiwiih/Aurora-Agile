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
    //! Behöver vi funktionerna här ? ?
    // moveTask: () => {},
    // addTask: () => {},
    // removeTask: () => {},
  },
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
