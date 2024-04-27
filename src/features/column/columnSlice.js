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
  reducers: {
    addColumn: (state) => {
      state.columns.push({
        id: nanoid(),
        title: `Column`,
      });
    },
    removeColumn: (state, action) => {
      const columnToRemove = action.payload;
      // console.log('Remove', columnToRemove);
      state.columns = state.columns.filter(
        (col) => col.id !== columnToRemove.id
      );
    },
    moveColumn: (state, action) => {},
    editColumn: (state, action) => {
      const { currentColumn, newTitle } = action.payload;
      console.log('Change title from: ', currentColumn.title, 'to', newTitle);
      const columnToUpdate = state.columns.find(
        (col) => col.id === currentColumn.id
      );
      if (columnToUpdate) {
        columnToUpdate.title = newTitle;
      }
    },
  },
});

export const { addColumn, removeColumn, editColumn } = columnSlice.actions;

export default columnSlice.reducer;
