import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Admindashboard()
 {
    const location=useLocation();

  return (
    <>
    <Nav className="navtabs" variant="tabs">
       <Nav.Item>
       <Nav.Link  as={Link} to="/Admindashboard/Addcollege"  active={location.pathname === "/Addcollege"}>Add College</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link     as={Link} to="/Admindashboard/Addcourse"  active={location.pathname === "/Addcourse"}>Add Course</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  as={Link} to="/Admindashboard/Addcategory"  active={location.pathname === "/Addcategory"}>Add Categories</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  as={Link} to="/Admindashboard/Addincharge"  active={location.pathname === "/Addincharge"}>Add Incharges</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  as={Link} to="/">Logout</Nav.Link>
     </Nav.Item>
   </Nav>

   <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Admin Dashboard</h1>
    <br></br><br></br>
    <Outlet/>
   </>
  )
}
