import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../features/task/taskSlice';

export const store = configureStore({
  reducer: taskSlice,
});
