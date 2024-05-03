import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
//Bootstrap
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const CreateNewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignedTo, setAssignedTo] = useState([]);
  const [doDate, setDoDate] = useState('');

  //Bootstrap
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const dispatch = useDispatch();
  // const tasks = useSelector((state) => state[taskSlice.name].tasks);
  // console.log(tasks);

  const handleClick = (event) => {
    if (event) {
      setShow(!show);
      setTarget(event.target);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch the form information to the taskslice
    dispatch(
      addTask({
        title,
        description,
        deadline,
        columnId: 1,
        assignedTo,
        doDate,
      })
    );
    //Reset inputfields after submitting form
    setTitle('');
    setDescription('');
    setDeadline('');
    handleClick(e);

    console.log();
  };

  return (
    <div ref={ref}>
      <Button
        onClick={handleClick}
        className='btn btn-aurora-primary rounded-pill'
      >
        Create New Task
      </Button>

      <Overlay
        show={show}
        target={target}
        placement='bottom'
        container={ref}
        containerPadding={20}
      >
        <Popover id='popover-contained'>
          <Popover.Header
            as='h3'
            className='text-bg-aurora-dark'
          >
            Create new task
          </Popover.Header>
          <Popover.Body className='text-bg-aurora-light'>
            <form
              onSubmit={handleSubmit}
              className='addForm'
            >
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                required
                className='input-addForm'
              />
              <textarea
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
                className='input-addForm'
              />
              <input
                type='date'
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className='input-addForm'
              />
              <button
                type='reset'
                className='btn btn-danger rounded-pill'
                onClick={handleClick}
                style={{ marginRight: '0.5em', marginLeft: '1.6em' }}
              >
                CANCEL
              </button>
              <button
                type='submit'
                className='btn btn-aurora-accent rounded-pill'
              >
                ADD TASK
              </button>
            </form>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default CreateNewTask;
