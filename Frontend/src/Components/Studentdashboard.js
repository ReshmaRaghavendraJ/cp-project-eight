import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Studentdashboard()
 {
  const location=useLocation();

  return (
    <>
    <Nav className="navtabs" variant="tabs">
       <Nav.Item>
       <Nav.Link  as={Link} to="/Studentdashboard/Viewscholarships"  active={location.pathname === "/Viewscholarships"}>View Scholarships</Nav.Link>
     </Nav.Item>
     {/* <Nav.Item>
       <Nav.Link     as={Link} to="/Studentdashboard/Applyscholarships"  active={location.pathname === "/Applyscholarships"}>Apply Scholarships </Nav.Link>
     </Nav.Item> */}
     <Nav.Item>
       <Nav.Link  as={Link} to="/Studentdashboard/Viewstatus"  active={location.pathname === "/Viewstatus"}>View Status</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  as={Link} to="/">Logout</Nav.Link>
     </Nav.Item>
   </Nav>

   <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Student Dashboard</h1>
    <br></br><br></br>
    <Outlet/>
   </>
  )
}
