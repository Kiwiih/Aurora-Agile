// Task

import React from 'react';
import AssignedUsers from './AssignedUsers';

const Task = ({ title, description, doDate, assignedTo, deadline, taskId }) => {
  return (
    <div className='card p-2  bg-gradient  shadow-sm  my-1'>
      <div className='d-flex justify-content-between'>
        <h3 className='h6 text-truncate'>{title}</h3>

        {/* <p
          style={{ fontSize: '80%' }}
          className='m-0 flex-shrink-0'
        >
          Do Date: <br />
          {doDate}
        </p> */}
      </div>

      <div className='d-flex justify-content-between'>
        <p className='m-0'></p>
        <AssignedUsers taskId={taskId} />
        <p
          style={{ fontSize: '80%' }}
          className='m-0 text-aurora-subtile lh-1'
        >
          Deadline: <br />
          {deadline}
        </p>
      </div>
    </div>
  );
};

export default Task;
