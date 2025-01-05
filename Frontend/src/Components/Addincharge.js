import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Addincharge()
 {
  const[inchargename,setInchargename]=useState('');
  const[societyname,setSocietyname]=useState('');
  const[mobile,setMobile]=useState('');
  const[mailid,setMailid]=useState('');
  const[password,setPassword]=useState('');
  const[inchargelist,setInchargeList]=useState([]);
  const[hideform,setHideform]=useState(false);
  
  function addinchargedetails()   /* Add Incharge Details */
  {
    const obj={inchargename,societyname,mobile,mailid,password};
      axios
      .post("http://localhost:8080/addinchargedetails",obj)
      .then((res)=>{
        toast.success(res.data);
        setHideform(false);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      })
  }

  function clearAll()
  {
      setInchargename("");
      setMailid("");
      setMobile("");
      setPassword("");
      setSocietyname("");
  }

  function getallincharges()  /* display all incharge details */
  {
    axios
    .get("http://localhost:8080/getallincharges")
    .then((res)=>{
     setInchargeList(res.data);
     setHideform(true);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    })
  }

  return (
    <>
  
    <h1 style={{marginLeft:"400px",color:"Maroon"}}>Add Incharge Details:</h1><br></br>
    <Card className="card-hover" style={{width:"800px",height:"630px",marginTop:"-10px",marginLeft:"230px",border:"none",backgroundColor: 'rgba(255, 255, 255, 0.4)',padding:"20px"}}>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{color:"black"}}><h5>Enter Incharge Name:</h5></Form.Label>
        <Form.Control type="text" value={inchargename} onChange={(e)=>setInchargename(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label  style={{color:"black"}}><h5>Enter Society Name:</h5></Form.Label>
        <Form.Control type="text" value={societyname} onChange={(e)=>setSocietyname(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label  style={{color:"black"}}><h5>Enter Mobile No:</h5></Form.Label>
        <Form.Control type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label  style={{color:"black"}}><h5>Enter Mail-id:</h5></Form.Label>
        <Form.Control type="text" value={mailid} onChange={(e)=>setMailid(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label  style={{color:"black"}}><h5>Enter Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
      </Form><br></br>
      <div className='btndiv'>
      <button className='btn btn-success me-2'  onClick={addinchargedetails}>Submit</button>
      <button className='btn btn-warning me-2'  onClick={getallincharges}>Display</button>
      <button className='btn btn-secondary me-2'  onClick={clearAll}>Cancel</button>
      </div>
    </Card><br></br>


    {hideform && (
      <>
    <h1 style={{color:"maroon",marginLeft:"500px"}}>Incharge list:</h1><br></br>
    <Card className="card-hover" style={{width:"800px",height:"300px",border:"none",marginLeft:"230px",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px",color:"black"}}>
    <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Incharge Name</th>
                    <th>Society Name</th>
                    <th>Mobile No</th>
                    <th>Mailid</th>
                </tr>
            </thead>
            <tbody>
                {
                    inchargelist.map((item,index)=>(
                        <tr key={index}>
                            <td>{item?.inchargename}</td>
                            <td>{item?.societyname}</td>
                            <td>{item?.mobile}</td>
                            <td>{item.mailid}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </Card><br></br>
    </>
    )}
    </>
  )
}
