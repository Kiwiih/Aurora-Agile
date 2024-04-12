import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  columns: [
    {
      id: 1,
      title: '',
      // workspaces: [{}], //* Olika vyer
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
