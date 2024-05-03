import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/task/taskSlice';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

// när jag klickar på en person. ska personens id läggas till i arrayen som heter assignedTo i den aktuella tasken.

//Om personen redan finns där ska personen tas bort.

const MultiSelectDropDown = ({
  task,
  users,
  selected_users,
  set_Selected_users,
  handleAssignedUsers,
}) => {
  const { setUserId } = useContext(DataContext);

  const dispatch = useDispatch();

  const toggleUser = (user) => {
    if (selected_users.includes(user)) {
      set_Selected_users(selected_users.filter((item) => item !== user));
    } else {
      set_Selected_users([...selected_users, user]);
    }
  };

  const handleAddUser = (userId) => {
    setUserId(userId);
    console.log('UserID: ', userId);
    console.log('TaskID: ', task.id);

    const editedTask = {
      ...task,
      taskId: task.id,
      assignedTo: [...task.assignedTo, userId],
      newTitle: task.title,
      newDescription: task.description,
      newDeadline: task.deadline,
      newDoDate: task.doDate,
    };

    dispatch(editTask(editedTask));
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant='success'
          id='dropdown-basic'
        >
          Assign User
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {users.map((user, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => {
                toggleUser(user);
                handleAddUser(user.id);
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
