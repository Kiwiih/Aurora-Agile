// DataContext.jsx

import { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userId, setUserId] = useState([]);
  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
