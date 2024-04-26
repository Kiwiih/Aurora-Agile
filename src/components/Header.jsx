import { Dropdown } from 'react-bootstrap';
import auroraAgileLogo from '../assets/logos/LogoSmall/AuroraAgileOriginalLogoColorSmall.png';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const [activeUser, setActiveUser] = useState(null);
  const location = useLocation();

  //Sets user-filtration
  const handleUser = (userId) => {
    setUser(userId);
    setActiveUser(userId);
  };

  //Shows the active user
  const users = {
    null: 'All users',
    1: 'Moa',
    2: 'Alicia',
    3: 'Paulina',
    4: 'Viktor',
    5: 'Jerry',
    6: 'Emil',
  };

  const handleHeaderContent = () => {
    if (location.pathname === '/') {
      return (
        <Dropdown>
          <Dropdown.Toggle
            className='btn btn-aurora-primary'
            variant='secondary'
            id='dropdown-basic'
          >
            {users[user]}
          </Dropdown.Toggle>
          <Dropdown.Menu className='btn btn-aurora-secondary'>
            {Object.entries(users).map(([userId, userName]) => (
              <Dropdown.Item
                key={userId}
                onClick={() =>
                  handleUser(userId === 'null' ? null : parseInt(userId))
                }
                style={{
                  backgroundColor:
                    activeUser === parseInt(userId) ? '#ffffff' : 'initial',
                }}
              >
                {userName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  };

  return (
    <>
      <header className='text-bg-aurora-dark'>
        <div>{handleHeaderContent()}</div>
        <img
          className='auroraAgileLogo'
          src={auroraAgileLogo}
          alt='Aurora Agile Logo in blue and green colors'
        />
      </header>
    </>
  );
};

export default Header;
