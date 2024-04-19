import {useSelector, useDispatch} from 'react-redux';
import { taskSlice } from '../features/task/taskSlice';

const AssignedUsers = () => {

// const dispatch = useDispatch();

// const assignedTo = useSelector(state => state.task.tasks[0].assignedTo);

// const handleAddUser = () => {
//     const taskId = 1;
//     const newUser = "XX";
    
//     const updatedTask = {
//       id: taskId,
//       assignedTo: [...assignedTo, newUser]
//     };

//     dispatch(editTask(updatedTask));
//   };

  return (
    <div className="assigned">
    <div className="rounded-circle bg-aurora-secondary opacity-100 circle">AB</div>
    <div className="rounded-circle bg-aurora-secondary opacity-75 circle">CD</div>
    <div className="rounded-circle bg-aurora-secondary opacity-50 circle">EF</div>
    <div className="rounded-circle circle bg-transparent fs-3">+</div>
    {/* plusset ska ha onClick={handleAddUser} typ */}
    </div>
  )
}

export default AssignedUsers;