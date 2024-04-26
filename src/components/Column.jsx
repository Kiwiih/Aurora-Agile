import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Slices

import { moveTask } from '../features/task/taskSlice';
import { removeColumn, editColumn } from '../features/column/columnSlice';
//Components
import Task from './Task';
import DeleteColumn from './DeleteColumn';
//  React-dnd
import { useDrop } from 'react-dnd';

const column = ({ currentColumn, columnId, user, handleTaskClick }) => {
  const [columnTitle, setColumnTitle] = useState(currentColumn.title);

  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  // DROP - React-dnd
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (task) => moveTaskHandler(task.id, columnId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveTaskHandler = (taskId, newColumnId) => {
    const newData = {
      taskId: taskId,
      newColumnId: newColumnId,
    };

    dispatch(moveTask(newData));
  };

  const removeColumnHandler = () => {
    dispatch(removeColumn(currentColumn));
  };

  const editColumnHandler = () => {
    const editedColumn = {
      currentColumn: currentColumn,
      newTitle: columnTitle,
      // newColor: color, //! If we want to change color
    };
    dispatch(editColumn(editedColumn));
  };

  return (
    <>
      {/* CONTAINER */}
      <div
        className='d-flex flex-column my-3 mx-1'
        style={{
          width: '19rem',
        }}
        ref={drop}
      >
        {/* COLUMN HEADER */}
        <div
          className='columnHeader h5 container d-flex justify-content-around rounded-1 py-1 text-bg-aurora-primary '
          style={{
            marginLeft: '0',
          }}
        >
          <input
            className='input-reset'
            spellCheck='false'
            type='text'
            value={columnTitle}
            onChange={(e) => setColumnTitle(e.target.value)}
            onBlur={() => editColumnHandler()}
          ></input>

          <DeleteColumn onClick={() => removeColumnHandler()} />
        </div>

        {/* TASKS HOLDER */}
        <div
          className={
            'card border-0 container py-2 flex-grow-1 ' +
            (isOver ? 'shadow-lg' : 'shadow-sm')
          }
        >
          {/* if user is unset then map all of the tasks */}
          {user == null
            ? tasks.map((t) => {
                /* WE R MAPPING THE TASK ONLY BELONGING TO THIS CURRNT COLUMN. */
                if (t.columnId == currentColumn.id) {
                  return (
                    <Task
                      key={t.id}
                      title={t.title}
                      doDate={t.doDate}
                      assignedTo={t.assignedTo}
                      deadline={t.deadline}
                      task={t}
                      onTaskClick={handleTaskClick}
                    />
                  );
                }
              })
            : // else user want to filter by person we search trough the tasks and show them only if the user is assigned to the task
              tasks.map((t) => {
                if (t.assignedTo.includes(user)) {
                  /* WE R MAPPING THE TASK ONLY BELONGING TO THIS CURRNT COLUMN. */
                  if (t.columnId == currentColumn.id) {
                    return (
                      <Task
                        key={t.id}
                        task={t}
                        title={t.title}
                        doDate={t.doDate}
                        assignedTo={t.assignedTo}
                        deadline={t.deadline}
                        onTaskClick={handleTaskClick}
                      />
                    );
                  }
                }
              })}
        </div>
      </div>
    </>
  );
};

export default column;
