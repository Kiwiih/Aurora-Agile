import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addColumn } from '../features/column/columnSlice';
const AddColumn = () => {
  const dispatch = useDispatch();
  const addColumnHandler = () => {
    dispatch(addColumn());
  };
  return (
    <BsFillPlusSquareFill
      onClick={addColumnHandler}
      className='plus-icon fs-2 rounded-1'
    />
  );
};

export default AddColumn;
