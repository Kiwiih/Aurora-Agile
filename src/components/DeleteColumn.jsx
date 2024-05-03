//Komponent för att ta bort kolumn
import { BsTrash } from 'react-icons/bs';

const DeleteColumn = ({ onClick }) => {
  return (
    <div
      className='deleteBtn'
      onClick={onClick}
    >
      <BsTrash />
    </div>
  );
};

export default DeleteColumn;
