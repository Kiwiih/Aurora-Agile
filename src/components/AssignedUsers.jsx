import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../features/task/taskSlice';
import { useState } from 'react';
import { userSlice } from '../features/user/userSlice';

const AssignedUsers = ({ taskId }) => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks) || [];
  const users = useSelector(state => state.user.users);
  // console.log(users);
  // console.log(tasks);

  const [showDropdown, setShowDropdown] = useState(false);

  const taskAssigned = tasks.map(task => task.assignedTo);
  // console.log(taskAssigned);

  const currentTask = tasks.find((task) => {
    return task.id === taskId;
  })

  const assignedTo = currentTask.assignedTo;


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
  }

  return (
    <div className="assigned">
    {/* jobbar på conditional rendering med följande logik: 
    första cirkeln syns vid 1 assignedUser, andra vid 2, tredje vid 3. 
    fler än 3 kommer ej synas.
    Plusset ska enbart synas i modalen, ej i card. - eller? fixa senare isf.
    */}

{/* denna är lite knas. den slår ihop flera användare i samma cirkel om det finns flera användare i samma task */}
{/* {taskAssigned.map((assigned, index) => (
  index < 3 && (
    <div key={index} className={`rounded-circle bg-aurora-secondary opacity-${100 - (index * 25)} circle`}>
      {assigned}
    </div>
  )
))} */}

{/* {tasks.map((task, index) => (
  index < 3 && (
    <div key={index} className={`rounded-circle bg-aurora-secondary opacity-${100 - (index * 25)} circle`}>
      {task.assignedTo.length > 0 && 
        task.assignedTo.map((assignedUser, userIndex) => (
          <span key={userIndex}>{assignedUser}</span>
        ))
      }
    </div>
    )
  
))} */}


{assignedTo.map((person, index) => (
  index < 3 && (
    <div key={index} className={`rounded-circle bg-aurora-secondary opacity-${100 - (index * 25)} circle`}>
      {assignedTo.length > 0 && <span key={index}>{person}</span>}
    </div>
    )
  
))}


    {/* {taskAssigned.length >= 1 && <div className="rounded-circle bg-aurora-secondary opacity-100 circle">AB</div>}
    {taskAssigned.length >= 2 && <div className="rounded-circle bg-aurora-secondary opacity-75 circle">CD</div>}
    {taskAssigned.length >= 3 && <div className="rounded-circle bg-aurora-secondary opacity-50 circle">EF</div>} */}

    {/* <div className="rounded-circle bg-aurora-secondary opacity-100 circle">AB</div> */}
    {/* <div className="rounded-circle bg-aurora-secondary opacity-75 circle">CD</div> */}
    {/* <div className="rounded-circle bg-aurora-secondary opacity-50 circle">EF</div> */}
    <div className="rounded-circle circle bg-transparent fs-3" onClick={handleAddUser}>+</div>


    {/* implementera senare att bara de som inte redan är assignade till tasket syns som options nedan */}
    {showDropdown && 
  <select name="users" id="users">
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
  </select>}
    </div>
  )
}

export default AssignedUsers;