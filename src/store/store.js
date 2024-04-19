import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../features/task/taskSlice';
import columnSlice from '../features/column/columnSlice';
import userSlice from '../features/column/columnSlice';

export const store = configureStore({
  reducer: {
    task: taskSlice,
    column: columnSlice,
    user: userSlice,
  },
});
