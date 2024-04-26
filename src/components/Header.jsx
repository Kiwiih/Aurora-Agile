import { Dropdown } from 'react-bootstrap';
import auroraAgileLogo from '../assets/logos/LogoSmall/AuroraAgileOriginalLogoColorSmall.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const [activeUser, setActiveUser] = useState(null);
  const location = useLocation();

  //Sets user-filtration
  const handleUser = (userId) => {
    setUser(userId);
    setActiveUser(userId);
  };
  
  const users = useSelector(state => state.user.users);

  const handleHeaderContent = () => {
    if (location.pathname === '/') {
      return (
 <Dropdown>
        <Dropdown.Toggle
          className='btn btn-aurora-primary'
          variant='secondary'
          id='dropdown-basic'
        >
          {users.find((u) => u.id === user).name}
        </Dropdown.Toggle>
        <Dropdown.Menu className='btn btn-aurora-secondary'>

        {users.map(user => (
                    <Dropdown.Item
                    key={user.id}
                    onClick={() => handleUser(user.id)}
                    style={{
                      backgroundColor: activeUser === user.id ? '#ffffff' : 'initial',
                    }}
                  >
                    {user.name}
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
