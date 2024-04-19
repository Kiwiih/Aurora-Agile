import { Dropdown } from 'react-bootstrap';

const Header = ({setUser}) => {

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant='secondary'
        id='dropdown-basic'
      >
        Select User
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setUser('all')}>All users</Dropdown.Item>
        <Dropdown.Item onClick={() => setUser('Moa')}>Moa</Dropdown.Item>
        <Dropdown.Item onClick={() => setUser('Alicia')}>Alicia</Dropdown.Item>
        <Dropdown.Item onClick={() => setUser('Paulina')}>Paulina</Dropdown.Item>
        <Dropdown.Item onClick={() => setUser('Viktor')}>Viktor</Dropdown.Item>
        <Dropdown.Item onClick={() => setUser('Jerry')}>Jerry</Dropdown.Item>
        <Dropdown.Item onClick={() => setUser('Emil')}>Emil</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Header