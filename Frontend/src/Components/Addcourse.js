import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import course from '../Components/course.jpg';
import Card from 'react-bootstrap/Card';

export default function Addcourse()
 {
  const[collegelist,setCollegelist]=useState([]); //Dropdown list of College list
  const[selectedcollege,setSelectedcollege]=useState('');
  const[courselist,setCourselist]=useState([]);  //Display list of courses
  const[coursename,setCoursename]=useState('');
  const[hideform,setHideform]=useState(false);

  useEffect(()=>{
    getallcolleges();
  })

  function getallcolleges()  /* Dropdown list of all Colleges */
  {
    axios
    .get("http://localhost:8080/getallcolleges")
    .then((res)=>{
        setCollegelist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function addcourse()   /* Add Courses based on Collegeid */
  {
    const obj={selectedcollege,coursename};
    axios
    .post(`http://localhost:8080/addcourse/${selectedcollege}`,obj)
    .then((res)=>{
        toast.success(res.data);
        setHideform(false);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function getallcourses()   /* Display list of courses */
  {
    axios
    .get("http://localhost:8080/getallcourses")
    .then((res)=>{
        setCourselist(res.data);
        setHideform(true);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function clearAll()
  {
        setCoursename("");
        setSelectedcollege("");
  }

  return (
    <>
    
    <img src={course} alt="img3" style={{marginTop:"-10px",width:"1350px"}}/>

    <h1 style={{marginTop:'-650px',marginLeft:"100px",color:"maroon"}}>Add College Details:</h1><br></br>
   <Card className="Card-hover" style={{width:"500px",marginTop:"-10px",marginLeft:"30px",border:"none",backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
    <Card.Body>
        <Form>
            <label className='form-label'>Select College Name:</label>
            <select className='form-select' value={selectedcollege} onChange={(e)=>setSelectedcollege(e.target.value)}> 
                <option value={0}>--Select Options--</option>
                {
                    collegelist.map((item,index)=>(
                        <option key={index} value={item.collegeid}>{item.collegeid}-{item.collegename}</option>
                    ))
                }
            </select>

        <Form.Group className="mb-3">
        <Form.Label style={{marginLeft:"-300px"}}>Enter Course Name:</Form.Label>
        <Form.Control type="text" value={coursename} onChange={(e)=>setCoursename(e.target.value)}/>
        </Form.Group>
        </Form>
        <div className='btns'>
      <button className='btn btn-success me-2'  onClick={addcourse}>Submit</button>
      <button className='btn btn-warning me-2'  onClick={getallcourses}>Display</button>
      <button className='btn btn-secondary me-2'  onClick={clearAll}>Cancel</button>
      </div>
      </Card.Body>
    </Card>


      {hideform && (
        <>
      <h1 style={{marginTop:'-280px',marginLeft:"700px",color:"maroon"}}>List of Courses:</h1><br></br>
      <Card className="Card-hover" style={{width:"500px",marginTop:"-20px",marginLeft:"600px",border:"none",backgroundColor: 'rgba(255, 255, 255, 0.4)',padding:"20px"}}>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Courseid</th>
                    <th>Coursename</th>
                    <th>Collegename</th>
                </tr>
            </thead>
            <tbody>
                {
                    courselist.map((item,index)=>(
                        <tr key={index}>
                            <td>{item?.coursename}</td>
                            <td>{item?.coursename}</td>
                            <td>{item?.college1?.collegename}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </Card>
        </>
        )}
    </>
  )
}
