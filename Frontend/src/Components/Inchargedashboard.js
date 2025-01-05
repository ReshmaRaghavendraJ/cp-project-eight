import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Inchargedashboard()
 {
    const location=useLocation();

  return (
    <>
    <Nav className="navtabs" variant="tabs">
       <Nav.Item>
       <Nav.Link  as={Link} to="/Inchargedashboard/Addscholarships"  active={location.pathname === "/Addscholarships"}>Add Scholarships</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link     as={Link} to="/Inchargedashboard/Viewapplications"  active={location.pathname === "/Viewapplications"}>View Applications</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  as={Link} to="/Inchargedashboard/Viewelegiblelist"  active={location.pathname === "/Viewelegiblelist"}>View Elegiblelist</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  as={Link} to="/">Logout</Nav.Link>
     </Nav.Item>
   </Nav>

   <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-130px",marginLeft:"730px",color:"white"}}>Incharge Dashboard</h1>
    <br></br><br></br>
    <Outlet/>
   </>
  )
}
