import { useSelector } from "react-redux";

import { columnSlice } from '../features/column/columnSlice';

const List = () => {

    const tasks = useSelector((state) => state.task.tasks);

    const columns = useSelector((state) => state[columnSlice.name].columns);



  return (
    <main className="listContainer">
      <ul className="listHolder">
        {tasks.map((t) => {
            const column = columns.find((col) => col.id === t.columnId);
            const columnName = column ? column.title : 'Column not found';
        return (
          <li
            style={{ backgroundColor: 'white' }}
            className='listItem'
            key={t.id}
          >
            <div className="titleDesc">
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
    </main>
  );
}

export default List