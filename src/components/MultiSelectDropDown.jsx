//Komponent för dropdownen för att ändra assigned users i modalen
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/task/taskSlice';
import { useEffect } from 'react';

//Om personen redan finns där ska personen tas bort.

const MultiSelectDropDown = ({
  task,
  users,
  selected_users,
  set_Selected_users,
  selectedUsersId,
  setSelectedUsersId,
  onSelectedUsersChange,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    set_Selected_users(
      users.filter((user) => task.assignedTo.includes(user.id))
    );
  }, []);

  useEffect(() => {
    editAssignedToHandler();
    onSelectedUsersChange(selectedUsersId);
  }, [selectedUsersId, selected_users]);

  const editAssignedToHandler = () => {
    const editedTask = {
      ...task,
      taskId: task.id,
      assignedTo: selectedUsersId,
      newTitle: task.title,
      newDescription: task.description,
      newDeadline: task.deadline,
      newDoDate: task.doDate,
    };

    dispatch(editTask(editedTask));
  };

  const toggleUser = (user) => {
    if (selected_users.includes(user)) {
      set_Selected_users(selected_users.filter((item) => item !== user));
    } else {
      set_Selected_users([...selected_users, user]);
    }
  };

  const handleSetSelectedUsersId = (userId) => {
    if (selectedUsersId.includes(userId)) {
      setSelectedUsersId(selectedUsersId.filter((item) => item !== userId));
    } else {
      setSelectedUsersId([...selectedUsersId, userId]);
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant='success'
          id='dropdown-basic'
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          {users.map((user, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => {
                toggleUser(user);
                handleSetSelectedUsersId(user.id);
              }}
              active={selected_users.includes(user)}
            >
              {user.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default MultiSelectDropDown;
