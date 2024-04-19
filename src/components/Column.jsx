import React from 'react';
import { useSelector } from 'react-redux';
import { columnSlice } from '../features/column/columnSlice';



const column = ({ columnId, user }) => {

  // getting slice
  const columns = useSelector((state) => state[columnSlice.name].columns);

  // extract information avout the current column
  const currentColumn = columns.find((column) => column.id === columnId);
  const title = currentColumn.title






  return (
    <>
      {/* TILLFÄLLIG CONTAINER */}
      <div
        className='bg-aurora-light p-2'
        style={{ height: '50vh' }}
      >
        {/* ------------------------------------ */}
        {/* ------------------------------------ */}
        {/* ------------------------------------ */}

        <div
          className='h-100 d-flex flex-column'
          style={{
            width: '20rem',
          }}
        >
          <div
            className='h5 container rounded-1 py-1 text-bg-aurora-primary'
            style={{
              marginLeft: '0',
              width: 'fit-content',
            }}
          > {title}
          </div>

          <div className='card container py-2 flex-grow-1'>här är kolumnen


          </div>
        </div>

        {/* ------------------------------------ */}
        {/* ------------------------------------ */}
        {/* ------------------------------------ */}
      </div>
    </>
  );
};

export default column;

// props som skickas till mig
// den kolumn den är
//  columnID = coumnID
// Den användare som ska väljas
//  user = [all]
