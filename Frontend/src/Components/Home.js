import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './styles.css';
import purple from '../Components/purple.jpg';
import { Card } from 'react-bootstrap';
import g1 from '../Components/g1.avif';
import g2 from '../Components/g2.jpg';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';


export default function Home()
 {
  
    const navigate=useNavigate('');


    function gotoregister()
    {
      navigate("/Register");
    }

  return(
    <>
    <Navbar/>

 
    <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Scholarship Management</h1>
    <br></br><br></br>

    <img src={purple} alt="purple" style={{width:"1350px",marginTop:"-10px"}}/>

    <Card className="card-hover" style={{ width: "700px",height:"468px",marginTop:"-800px",marginLeft:"30px"}}>
      <Card.Img variant="top" src={g1} alt="g1" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',height:"500px"}}/>
      <Card.Body  style={{color:"black"}}>
        <Card.Title style={{color:"black",marginTop:"-80px",marginLeft:"250px",fontFamily:"fantasy"}}><h1>GET Your Scholarships ...</h1></Card.Title>
      </Card.Body>
    </Card>

    <Card className="card-hover" style={{ width: "500px",height:"500px",marginTop:"-600px",marginLeft:"650px",backgroundColor:"black"}}>
      <Card.Img variant="top" src={g2} alt="g2" style={{backgroundColor: 'rgba(255, 255, 255, -0.1)',height:"308px"}}/>
    <Card.Text><h1 style={{margin:"10px",color:"white",fontFamily:"fantasy"}}>Earn your Degree Faster, and for Less !!</h1></Card.Text>
    <Button variant="outline-warning" style={{width:"200px",marginLeft:"150px",fontWeight:"bold",fontFamily:"cursive",fontSize:"20px"}} onClick={gotoregister}>Register</Button>
    </Card>
    </>
  );
}
