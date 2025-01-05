import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import college from '../Components/college.avif';
import Card from 'react-bootstrap/Card';

export default function Addcollege() 
{
    const[collegename,setCollegename]=useState('');
    const[collegelist,setCollegelist]=useState([]); //list of Colleges
    const[hideform,setHideform]=useState(false);

    function addcolleges()  /* Add College details */
    {
        const obj={collegename};
        axios
        .post("http://localhost:8080/addcolleges",obj)
        .then((res)=>{
            toast.success(res.data);
            setHideform(false);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        })
    }

    function   getallcolleges()  /* Display all Colleges */
    {
        axios
        .get("http://localhost:8080/getallcolleges")
        .then((res)=>{
            setCollegelist(res.data);
            setHideform(true);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        })
    }

    function clearAll()
    {
        setCollegename("");
    }

  return (
    <>
    <img src={college} style={{borderRadius:"50%",boxShadow:"initial",marginLeft:"450px",width:"400px"}} alt="img2"/>
   
   <h1 style={{marginTop:'-320px',marginLeft:"20px",color:"maroon"}}>Add College Details:</h1><br></br>
    <Card className="card-hover" style={{width:"400px",marginTop:"-10px",marginLeft:"20px",height:"200px",border:"none"}}>
      <Card.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Enter College Name:</Form.Label>
            <Form.Control type="text" value={collegename} onChange={(e)=>setCollegename(e.target.value)}/>
          </Form.Group>
        </Form>
        <div className='btns'>
        <button className='btn btn-success me-2'  onClick={addcolleges}>Submit</button>
      <button className='btn btn-warning me-2'onClick={getallcolleges}>Display</button>
      <button className='btn btn-secondary me-2'  onClick={clearAll}>Cancel</button>
      </div>
      </Card.Body>
    </Card>

    {hideform && (
      <>
    <h1 style={{color:"maroon",marginLeft:"900px",marginTop:"-270px",textWrap:"nowrap"}}>List of Colleges:</h1><br></br>
    <Card className="card-hover" style={{width:"400px",height:"300px",marginLeft:"870px",padding:"10px",border:"none"}}>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Collegeid</th>
                    <th>College Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    collegelist.map((item,index)=>(
                        <tr key={index}>
                            <td>{item?.collegeid}</td>
                            <td>{item?.collegename}</td>
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
