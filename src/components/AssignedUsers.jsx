//Denna komponent visar vilka users som är valda till tasken
import { useSelector } from 'react-redux';
import { useState } from 'react';
import MultiSelectDropDown from './MultiSelectDropDown';

// Bootstrap:
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const AssignedUsers = ({ task, show }) => {
  const users = useSelector((state) => state.user.users);
  const [selected_users, set_Selected_users] = useState([]);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleAddUser = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='assigned'>
      {/* assigned to är vilka som är assigned på aktuellt task.
  den visar max 3 cirklar. den visar första bokstaven i för- och efternamn.
  vid mer än ett efternamn syns bara första. */}
      {task.assignedTo.map(
        (person, index) =>
          index < 3 && (
            <div key={index}>
              <OverlayTrigger
                overlay={
                  <Tooltip> {users.find((u) => u.id === person).name}</Tooltip>
                }
              >
                <div
                  className={`me-1 rounded-circle text-bg-aurora-secondary opacity-${100 - index * 25} circle`}
                >
                  {task.assignedTo.length > 0 && (
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

      {/* om det finns fler än 3 assignade till uppgiften så visas (...) */}
      {task.assignedTo.length > 3 && (
        <OverlayTrigger
          overlay={
            <Tooltip>
              {task.assignedTo.map((person, i) => (
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

      {show && (
        <div
          className='rounded-circle circle bg-transparent fs-3'
          onClick={handleAddUser}
        >
          +
        </div>
      )}

      {showDropdown && (
        <>
          <MultiSelectDropDown
            task={task}
            users={users}
            selected_users={selected_users}
            set_Selected_users={set_Selected_users}
          />
        </>
      )}
    </div>
  );
};

export default AssignedUsers;
