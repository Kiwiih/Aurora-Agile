import {useSelector, useDispatch} from 'react-redux';
import { editTask } from '../features/task/taskSlice';

const AssignedUsers = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  // console.log(tasks);

  const taskAssigned = tasks.map(task => task.assignedTo);
  console.log(taskAssigned);

  const handleAddUser = (taskId, userId) => {
    /* denna funktion kommer att göras om så att en dropdown öppnas
    vid klick på plus. så att man kan välja VEM som ska läggas till. */
    console.log("användare skall läggas till")
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      const updatedAssignedTo = [...task.assignedTo, userId];
      dispatch(editTask({ taskId, assignedTo: updatedAssignedTo }));
    }
  }

  return (
    <div className="assigned">
    {/* saknas conditional rendering som jag kommer lägga till senare: 
    första cirkeln syns vid 1 assignedUser, andra vid 2, tredje vid 3. 
    fler än 3 kommer ej synas. ev punkter vid fler än 3 users.
    Plusset ska enbart synas i modalen, ej i card.
    */}
    <div className="rounded-circle bg-aurora-secondary opacity-100 circle">AB</div>
    <div className="rounded-circle bg-aurora-secondary opacity-75 circle">CD</div>
    <div className="rounded-circle bg-aurora-secondary opacity-50 circle">EF</div>
    <div className="rounded-circle circle bg-transparent fs-3" onClick={handleAddUser}>+</div>
    </div>
  )
}

export default AssignedUsers;