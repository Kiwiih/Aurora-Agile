// Task

import React from 'react';

const task = ({ title, description, doDate, assignedTo, deadline }) => {
  return (
    <div
      className='card p-2  bg-gradient shadow border-0  '
      style={{ width: '300px' }}
    >
      <div className='d-flex justify-content-between'>
        <h3 className='h6 text-truncate'>{title}</h3>

        <p
          style={{ fontSize: '80%' }}
          className='m-0 flex-shrink-0'
        >
          Do Date: <br />
          {doDate}
        </p>
      </div>

      <div className='d-flex justify-content-between'>
        <p className='m-0'>{assignedTo}</p>
        <p
          style={{ fontSize: '80%' }}
          className='m-0'
        >
          Deadline: <br />
          {deadline}
        </p>
      </div>
    </div>
  );
};

export default task;
