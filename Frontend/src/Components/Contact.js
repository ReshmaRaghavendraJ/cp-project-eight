import React from 'react'
import cont from '../Components/cont.jpg';
import { Card } from 'react-bootstrap';
import Address from '../Components/address.png';
import ph from '../Components/ph.jpg';
import eml from '../Components/email.jfif';
import Navbar from '../Components/Navbar';

export default function Contact() 
{

  return (
    <>
    <Navbar/>

    <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Scholarship Management</h1>
    <br></br><br></br>

    <img src={cont} alt="cont" style={{width:"1350px",marginTop:"-10px"}}/><br></br>

    <h1 style={{marginLeft:"500px",color:"lightgray",marginTop:"-850px"}}>GET IN TOUCH</h1>

    <img src={Address} alt={Address} width="80px" style={{marginLeft:"100px"}}/>
    <h3 style={{color:"white",marginLeft:"100px"}}>Address</h3>

    <img src={ph} alt={ph} width="60px" style={{marginLeft:"570px",marginTop:"-170px"}}/>
    <h3 style={{color:"white",marginLeft:"570px",marginTop:"-70px"}}>Phone Number</h3>

    <img src={eml} alt={eml} width="50px" style={{marginLeft:"1050px",marginTop:"-170px"}}/>
    <h3 style={{color:"white",marginLeft:"1050px",marginTop:"-70px"}}>Email-id</h3><br></br><br></br><br></br>

    <Card className="card-hover" style={{width:"300px",height:"200px",marginLeft:"30px",marginTop:"-70px",backgroundColor: 'rgba(255, 255, 255, -0.1)',color:"white",textAlign:"center",padding:"10px"}}>
      <Card.Text>Door no. 65 ,4th cross,</Card.Text>
      <Card.Text>Jayalakshmi puram,</Card.Text>
      <Card.Text>Mysore</Card.Text>
    </Card>

   
    <Card className="card-hover" style={{width:"300px",height:"200px",marginLeft:"500px",marginTop:"-200px",backgroundColor: 'rgba(255, 255, 255, -0.1)',color:"white",textAlign:"center",padding:"10px"}}>
      <Card.Text>0821-35345346</Card.Text>
      <Card.Text>+91 435465474575</Card.Text>
    </Card>

    <Card className="card-hover" style={{width:"300px",height:"200px",marginLeft:"1000px",marginTop:"-200px",backgroundColor: 'rgba(255, 255, 255, -0.1)',color:"white",textAlign:"center",padding:"10px"}}>
      <Card.Text>scholarship@gmail.com</Card.Text>
      <Card.Text>www.scholarship.com</Card.Text>
    </Card>
    </>
  )
}
