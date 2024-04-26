import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

const DeleteColumn = ({ onClick }) => {
  return (
    <div
      className='deleteBtn'
      onClick={onClick}
    >
      <BsTrash />
    </div>
  );
};

export default DeleteColumn;
