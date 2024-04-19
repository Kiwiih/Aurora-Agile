import { useState } from 'react';

const Modal = () => {
  //Local States
  const [title, setTitle] = useState('TASK TITLE');
  const [description, setDescription] = useState(
    'THIS IS A DESCRIPTION OF MY TASK'
  );

  // Function to handle title change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Function to handle description change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className='container'>
        <button
          className='btn btn-aurora-primary'
          data-bs-toggle='modal'
          data-bs-target='#modal'
        >
          Open Modal
        </button>
        <div
          className='modal fade'
          id='modal'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <input
                  type='text'
                  className='task-title form-control border-0 cursor-pointer'
                  value={title}
                  onChange={handleTitleChange}
                />
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <div className='row'>
                  <div className='col text-start'>
                    <div className='doDate'>
                      DO-DATE
                      <br />
                      <input
                        className='cursor-pointer border-0'
                        type='date'
                        name='doDate'
                        id='doDate'
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
                        name='deadLine'
                        id='deadLine'
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <div className='body px-3'>
                  <textarea
                    className='border-0 cursor-pointer'
                    name='description'
                    id='description'
                    value={description}
                    onChange={handleDescriptionChange}
                    rows={10}
                    style={{ width: '100%' }}
                  ></textarea>
                </div>
              </div>
              <div className='modal-footer'>
                <div className='row mx-auto'>
                  <div className='col'>
                    <button
                      type='button'
                      className='btn btn-aurora-accent mx-1'
                      data-bs-dismiss='modal'
                    >
                      Save Task
                    </button>
                    <button
                      type='button'
                      className='btn btn-danger mx-1'
                      data-bs-dismiss='modal'
                    >
                      Delete Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
