//Komponenten som håller allt
import { useSelector } from 'react-redux';
import { columnSlice } from '../features/column/columnSlice';
//Components
import Column from './Column';
import CreateNewTask from './CreateNewTask';
import ModalWindow from './ModalWindow';
import AddColumn from './AddColumn';

const Board = ({modalShow, setModalShow, selectedTask, handleTaskClick, user}) => {

  const columns = useSelector((state) => state[columnSlice.name].columns);

  return (
    <>
        <main>
          <div className='createNewTask_section'>
            <CreateNewTask />
          </div>
          <div className='column_section'>
            {columns.map((column) => (
              <Column
                key={column.id}
                currentColumn={column}
                columnId={column.id}
                user={user}
                handleTaskClick={handleTaskClick}
              />
            ))}
            <div className='createNewColumn_section'>
              <AddColumn />
            </div>
          </div>
        </main>
        {selectedTask && (
          <ModalWindow
            show={modalShow}
            onHide={() => setModalShow(false)}
            task={selectedTask}
          />
        )}
    </>
  );
};

export default Board;
