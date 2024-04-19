import Modal from 'react-bootstrap/Modal';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Header from './components/Header'

function App() {
  /************************************** */

  // EXAMPLE CODE w BOOTSTRAP:
  // Allt här är bara copy paste från dokumentationen.

  /************************************** */

  // Modal variables from Bootstrap:
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // pop Over functionality from Bootstrap
  const [showPop, setShowPop] = useState(false);
  const [targetPop, setTargetPop] = useState(null);
  const ref = useRef(null);

  const handleClickPop = (event) => {
    setShowPop(!showPop);
    setTargetPop(event.target);
  };

  return (
    <>
      {/* // EXAMPLE CODE w BOOTSTRAP: */}

      <div className='container'>
        {/* POPOVER */}
        <>
          <br />
          <br />
          <div
            className='text-center'
            ref={ref}
          >
            <Button
              className='btn btn-aurora-accent'
              onClick={handleClickPop}
            >
              POPPA MIG plz
            </Button>

            <Overlay
              show={showPop}
              target={targetPop}
              placement='bottom'
              container={ref}
              containerPadding={20}
            >
              <Popover
                id='popover-contained'
                className='shadow'
              >
                <Popover.Body>
                  <h2 className='h5'>Add task:...</h2>
                  <p>
                    {' '}
                    Vill du lägga till en uppgif? Jatack det vore bra om det
                    fanns en inputruta här å att jag kunde det, vänligen
                  </p>
                  <input
                    type='text'
                    className='w-100'
                  />
                  <div className='text-end mt-3'>
                    <button
                      className='btn btn-aurora-secondary'
                      onClick={() => {
                        setShowPop(false);
                      }}
                    >
                      cancel
                    </button>
                    <button
                      className='btn btn-aurora-primary ps-4 pe-4 ms-2'
                      onClick={() => {
                        setShowPop(false);
                      }}
                    >
                      <strong>Add</strong>
                    </button>
                  </div>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </>
        {/* modal: */}
        <>
          <button
            className='btn btn-aurora-primary'
            onClick={handleShowModal}
          >
            Vill du se en modal?
          </button>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            backdrop='static'
            keyboard={false}
          >
            <Modal.Header
              className='bg-aurora-light'
              closeButton
            >
              <div>
                <Modal.Title>Modal title</Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Do not even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <button
                className='btn btn-aurora-secondary'
                onClick={handleCloseModal}
              >
                Stäng
              </button>
              <button className='btn btn-aurora-primary'>Understood</button>
            </Modal.Footer>
          </Modal>
        </>
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
      </div>
                      <Header/>
    </>
  );
}

export default App;
