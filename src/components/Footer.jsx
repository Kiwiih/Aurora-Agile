import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Footer = () => {
    const location = useLocation();

    const handleFooterContent = () =>{
        if(location.pathname === "/"){
            return (
              <Link
                className='btn btn-aurora-accent rounded-pill'
                style={{ color: 'white', textDecoration: 'none' }}
                to='/list'
              >
                Task list over here   <FaBars />
              </Link>
            );
        } else {
            return (
              <Link
                className='btn btn-aurora-accent rounded-pill'
                style={{ color: 'white', textDecoration: 'none' }}
                to='/'
              >
                Home page over here <FaBars />
              </Link>
            );
        }
    }

  return (
    <footer className='text-bg-aurora-dark'>
      <p>&copy; Aurora Agile 2024</p>
      <p>{handleFooterContent()}</p>
      
    </footer>
  );
}

export default Footer