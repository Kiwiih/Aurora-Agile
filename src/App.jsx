import Board from './components/Board';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </>
  );
}

export default App;
