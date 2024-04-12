import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Emil' },
    { id: 2, name: 'Jerry' },
    { id: 3, name: 'Moa' },
    { id: 4, name: 'Alicia' },
    { id: 5, name: 'Paulina' },
    { id: 6, name: 'Viktor' },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
