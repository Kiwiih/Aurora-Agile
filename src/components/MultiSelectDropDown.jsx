import { Dropdown } from 'react-bootstrap';

const MultiSelectDropDown = ({ users, selected_users, set_Selected_users, handleAssignedUsers }) => {
  
  const toggleUser = (users) => {
    if (selected_users.includes(users)) {
      set_Selected_users(selected_users.filter((item) => item !== users));
    } else {
      set_Selected_users([...selected_users, users]);
    }
     handleAssignedUsers([...selected_users, users]);
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
              onClick={() => toggleUser(user)}
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
