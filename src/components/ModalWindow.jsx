import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// Components
import Modal from 'react-bootstrap/Modal';
// import AssignedUsers from './AssignedUsers';
// Slices
import { removeTask, editTask } from '../features/task/taskSlice';

function ModalWindow(props) {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [doDateInput, setDoDateInput] = useState('');
  const [deadlineInput, setDeadLineInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setTitleInput(props.task.title);
    setDescriptionInput(props.task.description);
    setDoDateInput(props.task.doDate);
    setDeadLineInput(props.task.deadline);
  }, [props.task]);

  const removeTaskHandler = () => {
    dispatch(removeTask(props.task.id));
    props.onHide();
  };

  const editTaskHandler = () => {
    const editedTask = {
      taskId: props.task.id,
      assignedTo: props.task.assignedTo,
      newTitle: titleInput,
      newDescription: descriptionInput,
      newDeadline: deadlineInput,
      newDoDate: doDateInput,
    };

    dispatch(editTask(editedTask));
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <input
            className='task-title border-0 cursor-pointer modal-title'
            type='text'
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col text-start'>
            <div className='doDate'>
              DO-DATE
              <br />
              <input
                className='cursor-pointer border-0'
                type='date'
                value={doDateInput}
                onChange={(e) => setDoDateInput(e.target.value)}
              />
            </div>
          </div>
          <div className='col text-end'>
            <div className='deadLine'>
              DEADLINE
              <br />
              <input
                className='cursor-pointer border-0'
                type='date'
                value={deadlineInput}
                onChange={(e) => setDeadLineInput(e.target.value)}
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className='body px-3'>
          <textarea
            className='border-0 cursor-pointer'
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            rows={10}
            style={{ width: '100%' }}
          ></textarea>
        </div>
        <div>{/* <AssignedUsers /> */}</div>
      </Modal.Body>
      <Modal.Footer>
        <div className='row mx-auto'>
          <div className='col'>
            <button
              type='button'
              className='btn btn-aurora-accent mx-1'
              onClick={() => editTaskHandler()}
            >
              Save Task
            </button>
            <button
              type='button'
              className='btn btn-danger mx-1'
              onClick={() => removeTaskHandler()}
            >
              Delete Task
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;
