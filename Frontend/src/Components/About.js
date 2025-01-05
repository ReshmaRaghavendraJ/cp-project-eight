import React from 'react'
import { Card } from 'react-bootstrap';
import gg from '../Components/gg.jpg';
import blk from '../Components/blk.jpg';
import Navbar from '../Components/Navbar';

export default function About()
 {
  return (
    <>
     <Navbar/>

    <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Scholarship Management</h1>
    <br></br><br></br>
     
    <img src={blk} alt="blk" style={{width:"1350px",marginTop:"-10px"}}/>

    <Card className="card-hover" style={{ width: "600px",height:"600px",marginTop:"-820px",marginLeft:"10px",backgroundColor:"black"}}>
      <Card.Img variant="top" src={gg} alt="gg" style={{backgroundColor: 'rgba(14, 30, 200, -0.1)',height:"600px"}}/>
    </Card>

    
    <div style={{marginLeft:"620px",marginTop:"-600px"}}>
    <h2 style={{color:"white"}}>Scholarships for Students</h2><br></br>
      <h6 style={{textWrap:"wrap",textAlign:"justify",letterSpacing:"2.5px",color:"white"}}>The cost of pursuing an engineering course from a recognised college/university generally ranges from ₹8 Lakh to ₹20 Lakh. In government or private colleges, a majority of students find it difficult to meet the costly expenses of the course. <br></br><br></br>This creates a need for financial assistance for students wherein scholarships for engineering students play a crucial role in funding their overall education expenses. To support aspiring engineers to pursue their dream education, central and state government, numerous universities, private organizations, and corporates are offering a plethora of scholarships and fellowships.</h6>
    </div>
    <br></br>
    </>
  )
}
