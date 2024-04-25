import { Dropdown } from 'react-bootstrap';
import auroraAgileLogo from '../assets/logos/LogoSmall/AuroraAgileOriginalLogoColorSmall.png';
import { useState } from 'react';

const Header = ({ setUser }) => {
  const [activeUser, setActiveUser] = useState(null);

  const handleUser = (userId) => {
    setUser(userId)
    setActiveUser(userId)     
  }

  console.log(setUser, activeUser)


  return (
    <header className='text-bg-aurora-dark'>
      <Dropdown>
        <Dropdown.Toggle
          className='btn btn-aurora-primary'
          variant='secondary'
          id='dropdown-basic'
        >
          Select User
        </Dropdown.Toggle>
        <Dropdown.Menu className='btn btn-aurora-secondary'>
          <Dropdown.Item
            onClick={() => handleUser(null)}
            style={{
              backgroundColor: activeUser === null ? '#ffffff' : 'initial',
            }}
          >
            All users
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleUser(1)}
            style={{
              backgroundColor: activeUser === 1 ? '#ffffff' : 'initial',
            }}
          >
            Moa
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleUser(2)}
            style={{
              backgroundColor: activeUser === 2 ? '#ffffff' : 'initial',
            }}
          >
            Alicia
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleUser(3)}
            style={{
              backgroundColor: activeUser === 3 ? '#ffffff' : 'initial',
            }}
          >
            Paulina
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleUser(4)}
            style={{
              backgroundColor: activeUser === 4 ? '#ffffff' : 'initial',
            }}
          >
            Viktor
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleUser(5)}
            style={{
              backgroundColor: activeUser === 5 ? '#ffffff' : 'initial',
            }}
          >
            Jerry
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleUser(6)}
            style={{
              backgroundColor: activeUser === 6 ? '#ffffff' : 'initial',
            }}
          >
            Emil
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <img
        className='auroraAgileLogo'
        src={auroraAgileLogo}
        alt='Aurora Agile Logo in blue and green colors'
      />
    </header>
  );
};

export default Header;
