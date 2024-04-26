import Board from './components/Board';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List'
import {useState} from 'react'
import MissingPage from './components/MissingPage';

function App() {
  const [user, setUser] = useState(null);
  

  return (
    <>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <Header
            user={user}
            setUser={setUser}
          />
          <Routes>
            <Route
              index
              element={<Board user={user} />}
            />
            <Route
              path='/list'
              element={<List />}
            />
            <Route
              path='*'
              element={<MissingPage/>}
            />
          </Routes>
          <Footer />
        </DndProvider>
      </Router>
    </>
  );
}

export default App;
