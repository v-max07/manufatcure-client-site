import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <Navbar sticky='top' expand="lg" bg='light' className='mb-5 '>

      <Container>
        <Navbar.Brand href="#" className='fst-italic fw-bold'> <span style={{ color: '#f00f0f' }}>MOTO_</span><span>RAID<img src="https://i.ibb.co/ctrCkJV/icons8-dirt-bike-50.png" alt="" /> </span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='link' to='/'>Home</Link>
            {
              user ? <Link className='link' to='/dashboard'>Dashboard</Link> : ''
            }

            {
              user ? <Button onClick={() => signOut(auth)}>SignOut</Button> : <Link className='link' to='/signin'>SignIn</Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  );
};

export default Header;