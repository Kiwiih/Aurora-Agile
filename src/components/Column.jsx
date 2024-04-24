import { useState } from 'react';
import { useSelector } from 'react-redux';
import { columnSlice } from '../features/column/columnSlice';
//Components
import Task from './Task';

const column = ({ columnId, user, handleTaskClick }) => {
  // getting slice
  const columns = useSelector((state) => state.column.columns);

  // extract information avout the current column
  const currentColumn = columns.find((column) => column.id === columnId);
  const title = currentColumn.title;

  const tasks = useSelector((state) => state.task.tasks);

  return (
    <>
      <div
        className='d-flex flex-column my-3 mx-1'
        style={{
          width: '19rem',
        }}
      >
        <div
          className='h5 container rounded-1 py-1 text-bg-aurora-primary '
          style={{
            marginLeft: '0',
            width: 'fit-content',
          }}
        >
          {' '}
          {title}
        </div>
        <div className='card border-0 container py-2 flex-grow-1  shadow-sm'>
          {tasks.map((t) => {
            // console.log(t.columnId);
            // console.log(currentColumn);

            if (t.columnId == currentColumn.id) {
              return (
                <Task
                  key={t.id}
                  task={t}
                  onTaskClick={handleTaskClick}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default column;

// props som skickas till mig
// den kolumn den är
//  columnID = coumnID
// Den användare som ska väljas
//  user = [all]
