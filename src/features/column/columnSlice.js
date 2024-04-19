import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  columns: [
    {
      id: 1,
      title: 'Todo',
      // workspaces: [{}], //* Olika vyer
    },
    {
      id: 2,
      title: 'Doing',
    },
    {
      id: 3,
      title: 'Done',
    },
  ],
};

export const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {},
});

export const {} = columnSlice.actions;

export default columnSlice.reducer;
