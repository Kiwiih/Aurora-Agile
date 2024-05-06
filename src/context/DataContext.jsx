// DataContext.jsx

import { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [assignedToSave, setAssignedToSave] = useState([]);

  return (
    <DataContext.Provider
      value={{
        assignedToSave,
        setAssignedToSave,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
