import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import b5 from '../Components/b5.webp';

export default function Viewelegiblelist() 
{
  const[elegibelist,setElegiblelist]=useState([]);
  const inchargeid=sessionStorage.getItem('inchargeid');


  useEffect(()=>{
    getEligibleApplications();
  },[])

  function getEligibleApplications()  /* Display only elegible applications */
  {
    axios
    .get(`http://localhost:8080/getEligibleApplications/${inchargeid}`)
    .then((res)=>{
      setElegiblelist(res.data);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    })
  }
  
  function issuescholarship(applicationid)      /* Update Status of Application after issuing scholarships */
  {
    axios
    .put(`http://localhost:8080/issuescholarship/${applicationid}`)
    .then((res)=>{
      toast.success(res.data);
      // Store issued application ID in sessionStorage
      const issuedApplications = JSON.parse(sessionStorage.getItem('issuedApplications')) || [];
      issuedApplications.push(applicationid);
      sessionStorage.setItem('issuedApplications', JSON.stringify(issuedApplications));
      // Optionally, you can refresh the eligible list
      getEligibleApplications();
    })
    .catch((err)=>{
      toast.error(err.response.data);
    })
  }

  const issuedApplications = JSON.parse(sessionStorage.getItem('issuedApplications')) || [];


  return (
    <>

    <img src={b5} alt="b5" style={{width:"1350px", marginTop: "-0.5px" }}/>

    <h1 style={{textAlign:"center",color:"black",marginTop:"-750px"}}>View Elegiblelist:</h1><br></br>
   
    <Card className="card-hover" style={{width:"900px",height:"550px",border:"none",marginLeft:"250px",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px",color:"black"}}>
    <Card.Body>
      {
          elegibelist.map((item,index)=>(
            <div key={index}>
            <h1 style={{color:"red",marginLeft:"100px"}}>{item.scholarship3.scholarshipname}</h1><br></br>
            <Card.Text><h5>Student USN:  {item.student3.studentusn}</h5></Card.Text>
            <Card.Text><h5>Student Name:  {item.student3.studentname}</h5></Card.Text>
            <Card.Text><h5>College Name:  {item.student3.course2.college1.collegename}</h5></Card.Text>
            <Card.Text><h5>Course Name:  {item.student3.course2.coursename}</h5></Card.Text>
            <Card.Text><h5>Percentage:  {item.student3.percentage}</h5></Card.Text>
            <Card.Text><h5>Category Name:  {item.student3.category1.categoryname}</h5></Card.Text>
            <Card.Text><h5>Mobile Number:  {item.student3.mobile}</h5></Card.Text>
            <Card.Text><h5>Mail-id:  {item.student3.mailid}</h5></Card.Text>
            <Card.Text><h5>Income:  {item.student3.income}</h5></Card.Text>
            {item.student3.photo && <img src={item.student3.photo} alt="Student" style={{ width: "200px",marginLeft:"500px",marginTop:"-600px" }} />}
            {!issuedApplications.includes(item.applicationid) && (
            <button className='btn btn-success' style={{marginLeft:"350px"}} onClick={()=>issuescholarship(item.applicationid)}>Issue Scholarship</button>
            )} 
            <br></br>
            </div>
          ))
      }
      </Card.Body><br></br>
  
    </Card><br></br>
   </>
  )
}
