//Komponent för listvyn
import { useSelector } from "react-redux";
import ModalWindow from "./ModalWindow";
import { columnSlice } from '../features/column/columnSlice';

const List = ({ modalShow, setModalShow, selectedTask, handleTaskClick}) => {
  const tasks = useSelector((state) => state.task.tasks);

  const columns = useSelector((state) => state[columnSlice.name].columns);

  return (
    <main className='listContainer'>
      <ul className='listHolder'>
        {tasks.map((t) => {
          const column = columns.find((col) => col.id === t.columnId);
          const columnName = column ? column.title : 'Column not found';
          return (
            <li
              style={{ backgroundColor: 'white' }}
              className='listItem'
              key={t.id}
              onClick={() => handleTaskClick(t)}
            >
              <div className='titleDesc'>
                <p>
                  <b>{t.title}</b>
                </p>
                <p style={{ fontSize: '.9rem' }}>
                  {t.description.length > 25
                    ? t.description.slice(0, 40) + '...'
                    : t.description}
                </p>
              </div>
              <p className='btn btn-aurora-accent rounded-pill'>{columnName}</p>
            </li>
          );
        })}
      </ul>
      {selectedTask && (
        <ModalWindow
          show={modalShow}
          onHide={() => setModalShow(false)}
          task={selectedTask}
        />
      )}
    </main>
  );
};

export default List