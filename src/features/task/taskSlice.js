// taskSlice

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Implementera användarautentisering',
      description:
        'Implementera användarautentisering med hjälp av JWT och Express-session.',
      deadline: '2024-05-10',
      doDate: '2024-04-20',
      assignedTo: [1],
      columnId: 1,
    },
    {
      id: '2',
      title: 'Designa användargränssnitt',
      description:
        'Skapa användargränssnitt för webbapplikationen med hjälp av React och Material-UI.',
      deadline: '2024-05-15',
      doDate: '2024-04-22',
      assignedTo: [2, 3],
      columnId: 2,
    },
    {
      id: '3',
      title: 'Optimera databasförfrågningar',
      description:
        'Optimera databasförfrågningar för att förbättra prestandan hos webbapplikationen.',
      deadline: '2024-05-20',
      doDate: '2024-04-25',
      assignedTo: [4],
      columnId: 3,
    },
    {
      id: '4',
      title: 'Uppdatera dokumentation',
      description:
        'Uppdatera dokumentation för att återspegla de senaste ändringarna i koden.',
      deadline: '2024-05-12',
      doDate: '2024-04-28',
      assignedTo: [5],
      columnId: 1,
    },
    {
      id: '5',
      title: 'Testa gränssnittsfunktionalitet',
      description:
        'Utför enhetstester och integrationstester för att säkerställa gränssnittsfunktionalitetens korrekthet.',
      deadline: '2024-05-18',
      doDate: '2024-04-30',
      assignedTo: [6, 5],
      columnId: 1,
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload,
      };
    },
    removeTask: (state, action) => {},
    moveTask: (state, action) => {},
    editTask: (state, action) => {
      const { taskId, assignedTo } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.assignedTo = assignedTo;
      }
    },
  },
});

export const { addTask, removeTask, moveTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
