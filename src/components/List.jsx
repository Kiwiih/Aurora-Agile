import { useSelector } from "react-redux";
import Header from "./Header";
import { columnSlice } from '../features/column/columnSlice';

const List = () => {

    const tasks = useSelector((state) => state.task.tasks);

    const columns = useSelector((state) => state[columnSlice.name].columns);

  return (
    <>
      <Header />
      <ul className="listHolder">
        {tasks.map((t) => {
            const column = columns.find((col) => col.id === t.columnId);
            const columnName = column ? column.title : 'Column not found';
        return (
          <li
            className='listItem'
            key={t.id}
          >
            <p>{t.title}</p>{' '}
            <p className='btn btn-aurora-accent rounded-pill'>{columnName}</p>
          </li>
        );
})}
      </ul>
    </>
  );
}

export default List