//Komponenter
import Board from './components/Board';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import MissingPage from './components/MissingPage';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { DataProvider } from './context/DataContext';

function App() {
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  // State For Selecting Task
  const [selectedTask, setSelectedTask] = useState(null);

  // Function To Choose The Selected Task
  const handleTaskClick = (task) => {
    setModalShow(true);
    setSelectedTask(task);
  };

  return (
    <div id='appContainer'>
      <DataProvider>
        <Router>
          <DndProvider backend={HTML5Backend}>
            <Header
              user={user}
              setUser={setUser}
            />
            <Routes>
              <Route
                index
                element={
                  <Board
                    setModalShow={setModalShow}
                    modalShow={modalShow}
                    selectedTask={selectedTask}
                    handleTaskClick={handleTaskClick}
                    user={user}
                  />
                }
              />
              <Route
                path='/list'
                element={
                  <List
                    setModalShow={setModalShow}
                    modalShow={modalShow}
                    selectedTask={selectedTask}
                    handleTaskClick={handleTaskClick}
                  />
                }
              />
              <Route
                path='*'
                element={<MissingPage />}
              />
            </Routes>
            <Footer />
          </DndProvider>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
