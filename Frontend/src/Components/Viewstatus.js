import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import tick from '../Components/tick.webp';
import axios from 'axios';
import { toast } from 'react-toastify';
import y3 from '../Components/y3.jpg';

export default function Viewstatus()
 {
    const[applicationlist,setApplicationlist]=useState([]);
    const studentid=sessionStorage.getItem('studentid');

    useEffect(()=>{
      viewstatus();
    })

    function viewstatus()  /* View Status of Applied Scholarships */
    {
      axios
    .get(`http://localhost:8080/viewstatus/${studentid}`)
    .then((res)=>{
      setApplicationlist(res.data);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    })
    }

  return (
    <>

    <img src={y3} alt="y3" style={{width:"1350px",marginTop:"-9px"}}/>

    <h1 style={{textAlign:"center",color:"white",marginTop:"-850px"}}>View Status</h1><br></br>
   
   <Card className="card-hover" style={{width:"750px",height:"400px",border:"none",marginLeft:"300px",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px",color:"black"}}>
   <Card.Body>
     {
          applicationlist.map((item,index)=>(
            <div key={index} style={{marginLeft:"100px"}}>
            <h1 style={{color:"green",textWrap:"nowrap",marginLeft:"-100px"}}>{item.scholarship3.scholarshipname}</h1><br></br>
            <Card.Text><h5>Application id:  {item.applicationid}</h5></Card.Text>
            <Card.Text><h2>Status:   {item.status}</h2><img src={tick} alt="imgs" style={{width:"150px",marginLeft:"50px"}}/></Card.Text>
            </div>
          ))
      }<br></br><br></br><br></br>
    </Card.Body>
    </Card><br></br>

   </>
  )
}
