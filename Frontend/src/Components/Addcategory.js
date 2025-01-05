import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import category from '../Components/category.avif';
import Card from 'react-bootstrap/Card';

export default function Addcategory()
 {
  const[categoryname,setCategoryname]=useState('');
    const[hideform,setHideform]=useState(false);
  const[categorylist,setCategorylist]=useState([]);

  function addcategory()  /* Add Category details */
  {
    const obj={categoryname};
    axios
    .post("http://localhost:8080/addcategory",obj)
    .then((res)=>{
        toast.success(res.data);
        setHideform(false);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function getallcategory()   /* Display all category list */
  {
    axios
    .get("http://localhost:8080/getallcategory")
    .then((res)=>{
       setCategorylist(res.data);
       setHideform(true);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
  }

  function clearAll()
  {
    setCategoryname("");
  }

  return (
    <>
  
    <img src={category} style={{marginTop:"-10px",width:"1350px"}} alt="img4"/>

    <h1 style={{marginTop:'-950px',marginLeft:"100px",color:"white"}}>Add College Details:</h1><br></br>
    <Card className="Card-hover" style={{width:"500px",marginTop:"-10px",marginLeft:"30px",border:"none",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px"}}>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Category Name:</h5></Form.Label>
        <Form.Control type="text" value={categoryname} onChange={(e)=>setCategoryname(e.target.value)}/>
        </Form.Group>
        </Form>
        <div className='btns'>
      <button className='btn btn-success me-2'  onClick={addcategory}>Submit</button>
      <button className='btn btn-warning me-2'  onClick={getallcategory}>Display</button>
      <button className='btn btn-secondary me-2'  onClick={clearAll}>Cancel</button>
      </div>
      </Card>



      {hideform && (
      <>
      <h1 style={{marginTop:'-230px',marginLeft:"800px",color:"white"}}>List of Courses:</h1><br></br>
      <Card className="Card-hover" style={{width:"500px",marginTop:"-20px",marginLeft:"700px",border:"none",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px"}}>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Category id</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {
            categorylist.map((item,index)=>(
              <tr key={index}>
                <td>{item?.categoryid}</td>
                <td>{item?.categoryname}</td>
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
