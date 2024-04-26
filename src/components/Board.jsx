import { useState } from 'react';
import { useSelector } from 'react-redux';
import { columnSlice } from '../features/column/columnSlice';
//Components
import Column from './Column';
import CreateNewTask from './CreateNewTask';
import ModalWindow from './ModalWindow';

const Board = ({user}) => {

  const [modalShow, setModalShow] = useState(false);

  // State For Selecting Task
  const [selectedTask, setSelectedTask] = useState(null);

  // Function To Choose The Selected Task
  const handleTaskClick = (task) => {
    console.log('Klickat på task: ', task);
    setModalShow(true);
    setSelectedTask(task);
  };

  const columns = useSelector((state) => state[columnSlice.name].columns);
  // console.log(columns);
  return (
    <>
      <div className='bodyContainer'>
        <main>
          <div className='createNewTask_section'>
            <CreateNewTask />
          </div>
          <div className='column_section'>
            {columns.map((column) => (
              <Column
                key={column.id}
                columnId={column.id}
                user={user}
                handleTaskClick={handleTaskClick}
              />
            ))}
          </div>
        </main>
        {selectedTask && (
          <ModalWindow
            show={modalShow}
            onHide={() => setModalShow(false)}
            task={selectedTask}
          />
        )}
      </div>
    </>
  );
};

export default Board;
