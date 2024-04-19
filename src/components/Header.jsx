import { Dropdown } from 'react-bootstrap';

const Header = ({setUser}) => {

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
          <Dropdown.Item onClick={() => setUser('all')}>
            All users
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setUser('Moa')}>Moa</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser('Alicia')}>
            Alicia
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setUser('Paulina')}>
            Paulina
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setUser('Viktor')}>
            Viktor
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setUser('Jerry')}>Jerry</Dropdown.Item>
          <Dropdown.Item onClick={() => setUser('Emil')}>Emil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <img
        className='auroraAgileLogo'
        src='../src/assets/logos/LogoSmall/AuroraAgileOriginalLogoColorSmall.png'
        alt='Aurora Agile Logo in blue and green colors'
      />
    </header>
  );
}

export default Header