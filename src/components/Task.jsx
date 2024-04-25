//  React-dnd
import { useDrag } from 'react-dnd';

const Task = ({ task, onTaskClick }) => {
  // DRAG - React-dnd
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className='card p-2  bg-gradient  shadow-sm  my-1'
      onClick={() => onTaskClick(task)}
      ref={drag}
      style={{ visibility: isDragging && 'hidden' }}
    >
      <div className='d-flex justify-content-between'>
        <h3 className='h6 text-truncate'>{task.title}</h3>

        {/* <p
          style={{ fontSize: '80%' }}
          className='m-0 flex-shrink-0'
        >
          Do Date: <br />
          {doDate}
        </p> */}
      </div>

      <div className='d-flex justify-content-between'>
        <p className='m-0'>{task.assignedTo}</p>
        <p
          style={{ fontSize: '80%' }}
          className='m-0 text-aurora-subtile lh-1'
        >
          Deadline: <br />
          {task.deadline}
        </p>
      </div>
    </div>
  );
};

export default Task;
