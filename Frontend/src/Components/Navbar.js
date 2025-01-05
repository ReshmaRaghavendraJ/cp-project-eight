import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() 
{
      const location=useLocation();

  return (
    <>
    <div>
    <Nav className="navtabs" variant="tabs">
        <Nav.Item>
        <Nav.Link as={Link} to="/"  active={location.pathname === "/"}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link    as={Link} to="/About"  active={location.pathname === "/About"}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  as={Link} to="/Login"  active={location.pathname === "/Login"}>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  as={Link} to="/Register"  active={location.pathname === "/Register"}>Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  as={Link} to="/Contact"  active={location.pathname === "/Contact"}>Contact</Nav.Link>
      </Nav.Item>
    </Nav>

    </div>
    </>
  )
}
