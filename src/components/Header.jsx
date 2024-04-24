import { Dropdown } from 'react-bootstrap';

const Header = ({ setUser }) => {
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
          <Dropdown.Item onClick={() => setUser(null)}>All users</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser(1)}>Moa</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser(2)}>Alicia</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser(3)}>Paulina</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser(4)}>Viktor</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser(5)}>Jerry</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser(6)}>Emil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <img
        className='auroraAgileLogo'
        src='../src/assets/logos/LogoSmall/AuroraAgileOriginalLogoColorSmall.png'
        alt='Aurora Agile Logo in blue and green colors'
      />
    </header>
  );
};

export default Header;
