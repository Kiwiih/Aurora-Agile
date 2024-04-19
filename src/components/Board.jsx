import { useState } from 'react';
import { useSelector } from 'react-redux';
import { columnSlice } from '../features/column/columnSlice';

//Components
import Header from './Header';
import Column from './Column';
import CreateNewTask from './CreateNewTask';

const Board = () => {
  const [user, setUser] = useState([
    'all',
    'Moa',
    'Alicia',
    'Emil',
    'Paulina',
    'Viktor',
    'Jerry',
  ]);

  const columns = useSelector((state) => state[columnSlice.name].columns);
  console.log(columns);
  return (
    <>
      <Header
        setUser={setUser}
      />
      <CreateNewTask />
      {columns.map((column) => (
        <Column
          key={column.id}
          columnId={column.id}
          user={user}
        />
      ))}
    </>
  );
};

export default Board;
