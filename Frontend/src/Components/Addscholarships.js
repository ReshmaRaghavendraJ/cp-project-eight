import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import blue from '../Components/blue.jpg';
import "react-datepicker/dist/react-datepicker.css";
import { format  } from 'date-fns';

export default function Addscholarships() 
{
  const[categorylist,setCategorylist]=useState([]); //Dropdown lis of category
  const[selectedcategory,setSelectedcategory]=useState('');
  const[scholarshipname,setScholarshipname]=useState('');
  const[amount,setAmount]=useState('');
  const[minipercentage,setMinipercentage]=useState('');
  const[startdate,setStartdate]=useState('');
  const[enddate,setEnddate]=useState('');
  const[income,setIncome]=useState('');
  const inchargeid=sessionStorage.getItem('inchargeid'); // Session Storage for incharge id



  useEffect(()=>{
    getallcategory();
  },[])

  function getallcategory()  /* Dropdown list of Category list */
  {
    axios
    .get("http://localhost:8080/getallcategory")
    .then((res)=>{
       setCategorylist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function addscholarship()  /* Add Scholarships */
  {
    const obj={selectedcategory,inchargeid,scholarshipname,income,minipercentage,startdate,enddate,amount};
    axios
    .post(`http://localhost:8080/addscholarship/${selectedcategory}/${inchargeid}`,obj)
    .then((res)=>{
        toast.success(res.data);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function clearAll()
  {
    setSelectedcategory("");
    setAmount("");
    setEnddate("");
    setIncome("");
    setMinipercentage("");
    setScholarshipname("");
    setStartdate("");
  }

  
  const handleDateChange = (setter) => (date) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss");
    setter(formattedDate);
  };

  return (
    <>
  <img src={blue} alt="back2"/>

    <h1 style={{marginTop:'-1150px',textAlign:"center",color:"maroon"}}>Add Scholarship Details:</h1><br></br>
   
    <Card className="Card-hover" style={{width:"1000px",marginTop:"-20px",marginLeft:"200px",border:"none",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px"}}>
      <label className='form-label' style={{color:"maroon"}}><h5>Select Category:</h5></label>
    <select className='form-select' value={selectedcategory} onChange={(e)=>setSelectedcategory(e.target.value)}>
        <option value={0}>--Select Options--</option>
        {
          categorylist.map((item,index)=>(
            <option key={index} value={item.categoryid}>{item.categoryid}-{item.categoryname}</option>
          ))
        }
      </select><br></br>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{color:"maroon"}}><h5>Enter Scholarship Name:</h5></Form.Label>
        <Form.Control type="text" value={scholarshipname} onChange={(e)=>setScholarshipname(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{color:"maroon"}}><h5>Enter Income:</h5></Form.Label>
        <Form.Control type="text" value={income} onChange={(e)=>setIncome(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{color:"maroon"}}><h5>Enter Mini-Percentage:</h5></Form.Label>
        <Form.Control type="text" value={minipercentage} onChange={(e)=>setMinipercentage(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{color:"maroon"}}><h5>Enter Start Date:</h5></Form.Label>
        <Form.Control  type="datetime-local" value={startdate}  onChange={(e) => handleDateChange(setStartdate)(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{color:"maroon"}}><h5>Enter End Date:</h5></Form.Label>
        <Form.Control  type="datetime-local" value={enddate} onChange={(e) => handleDateChange(setEnddate)(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{color:"maroon"}}><h5>Enter Amount:</h5></Form.Label>
        <Form.Control type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </Form.Group>
        </Form>
        <div className='btns'>
      <button className='btn btn-success me-2'  onClick={addscholarship}>Submit</button>
      <button className='btn btn-secondary me-2'  onClick={clearAll}>Cancel</button>
      </div>
      </Card>
   </>
  )
}
