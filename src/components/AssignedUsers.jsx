import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../features/task/taskSlice';
import { useState } from 'react';
import { userSlice } from '../features/user/userSlice';

// Bootstrap:
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const AssignedUsers = ({ taskId, user }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks) || [];
  const users = useSelector((state) => state.user.users);
  // console.log(users);
  // console.log(tasks);

  const [showDropdown, setShowDropdown] = useState(false);

  // om user är 1 så vill vi bara ha de tasks där assignedTo innehåller 1. includes()

  let currentTask;

  if (user === null) {
    currentTask = tasks.find((task) => {
      return task.id === taskId;
    });
  }

  if (user !== null) {
    tasks.forEach((t) => {
      if (t.assignedTo.includes(user)) {
        currentTask = t;
      }
    });
    //   currentTask = tasks.find((task) => {
    //   return task.id === taskId;
    // })
  }

  const assignedTo = currentTask.assignedTo;
  // console.log(user)

  const handleAddUser = () => {
    /* dropdown öppnas nu vid klick på plus. users arrayen visas nu som options.
    fixa så att vid klick väljs denna person som assigned till tasket. 
    koden nedan med if (task) kommer ej användas som den ser ut nu.  */
    setShowDropdown(!showDropdown);
    // const task = tasks.find(task => task.id === taskId);
    // if (task) {
    //   const updatedAssignedTo = [...task.assignedTo, userId];
    //   dispatch(editTask({ taskId, assignedTo: updatedAssignedTo }));
    // }
  };

  return (
    <div className='assigned'>
      {/*
    TODO: Plusset ska enbart synas i modalen, ej i card. - eller? fixa senare isf.
    */}

      {/* assigned to är vilka som är assigned på aktuellt task.
  den visar max 3 cirklar. den visar första bokstaven i för- och efternamn.
  vid mer än ett efternamn syns bara första. */}
      {assignedTo.map(
        (person, index) =>
          index < 3 && (
            // this div is a container for everyting that it means to be a circe :)
            <div key={index}>
              {/* Bootstrap tooltip cor the circle: */}
              <OverlayTrigger
                overlay={
                  <Tooltip> {users.find((u) => u.id === person).name}</Tooltip>
                }
              >
                {/* circle */}
                <div
                  className={`me-1 rounded-circle text-bg-aurora-secondary opacity-${100 - index * 25} circle`}
                >
                  {assignedTo.length > 0 && (
                    <span key={index}>
                      {users
                        .find((u) => u.id === person)
                        .name.split(' ')
                        .map((name, i) => i < 2 && name.charAt(0))}
                    </span>
                  )}
                </div>
              </OverlayTrigger>
            </div>
          )
      )}

      {/* om det finns fler än 3 assignade till uppgiften så vissas (...) */}
      {assignedTo.length > 3 && (
        <OverlayTrigger
          overlay={
            <Tooltip>
              {assignedTo.map((person, i) => (
                <span key={i}>
                  {users.find((u) => u.id === person).name}
                  <br />
                </span>
              ))}
            </Tooltip>
          }
        >
          <div className='rounded-circle border bg-light circle'>...</div>
        </OverlayTrigger>
      )}

      <div
        className='rounded-circle circle bg-transparent fs-3'
        onClick={handleAddUser}
      >
        +
      </div>

      {/* implementera senare att bara de som inte redan är assignade till tasket syns som options nedan */}
      {showDropdown && (
        <select
          name='users'
          id='users'
        >
          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default AssignedUsers;
