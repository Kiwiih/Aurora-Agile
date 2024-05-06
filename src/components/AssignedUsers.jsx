//Denna komponent visar vilka users som är valda till tasken
import { useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import MultiSelectDropDown from './MultiSelectDropDown';

// Bootstrap:
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Modal } from 'react-bootstrap';

import DataContext from '../context/DataContext';

const AssignedUsers = ({ task, show }) => {
  const users = useSelector((state) => state.user.users);
  const [selected_users, set_Selected_users] = useState([]);
  const [selectedUsersId, setSelectedUsersId] = useState([]);

  const { assignedToSave, setAssignedToSave } = useContext(DataContext);

  useEffect(() => {
    setSelectedUsersId(task.assignedTo);
    setAssignedToSave(task.assignedTo);
  }, [task]);

  return (
    <div className='assigned'>
      {/* assigned to är vilka som är assigned på aktuellt task.
  den visar max 3 cirklar. den visar första bokstaven i för- och efternamn.
  vid mer än ett efternamn syns bara första. */}
      {selectedUsersId.map(
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
                  {selectedUsersId.length > 0 && (
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
      {selectedUsersId.length > 3 && (
        <OverlayTrigger
          overlay={
            <Tooltip>
              {selectedUsersId.map((person, i) => (
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
        <MultiSelectDropDown
          task={task}
          users={users}
          selected_users={selected_users}
          set_Selected_users={set_Selected_users}
          selectedUsersId={selectedUsersId}
          setSelectedUsersId={setSelectedUsersId}
        />
      )}
    </div>
  );
};

export default AssignedUsers;
