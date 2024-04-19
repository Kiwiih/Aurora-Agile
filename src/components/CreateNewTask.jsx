import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
import taskSlice from '../features/task/taskSlice';

const CreateNewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  // const tasks = useSelector((state) => state[taskSlice.name].tasks);
  // console.log(tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    //displatch the form information to the taskslice
    dispatch(
      addTask({
        title,
        description,
        deadline,
        columnId: 1,
      })
    );
    //Reset inputfields after submitting form
    setTitle('');
    setDescription('');
    setDeadline(null);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          />
          <input
            type='date'
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button type='submit'>ADD TASK</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>CREATE NEW TASK</button>
      )}
    </div>
  );
};

export default CreateNewTask;
