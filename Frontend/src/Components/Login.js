import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import scholarship from '../Components/scholarship.webp';
import './styles.css'
import axios from 'axios'; // Import axios correctly
import { toast } from 'react-toastify'; // Import toast correctly
import Navbar from './Navbar';


export default function Login() 
{
    const[password,setPassword]=useState('');
    const users=["Admin","Incharge","Student"];
    const[usertype,setUsertype]=useState('');
    const navigate=useNavigate();
    const[emailid,setEmailid]=useState('');
    const[login,setLogin]=useState({});

    function handlelogincheck()
    {
      if(usertype==="Admin" || usertype==="admin")
      {
        axios
        .get(`http://localhost:8080/adminlogincheck/${emailid}/${password}`)
        .then((res)=>{
          setLogin(res.data);
          navigate("/Admindashboard");
        })
        .catch((err)=>{
          toast.error(err.response.data);
        });
      }
      if(usertype==="Incharge" || usertype==="incharge")
      {
          axios
          .get(`http://localhost:8080/inchargelogincheck/${emailid}/${password}`)
          .then((res)=>{
            setLogin(res.data);
            const userid=res.data.inchargeid;
            sessionStorage.setItem('inchargeid',userid);
            navigate("/Inchargedashboard");
          })
          .catch((err)=>{
            toast.error(err.response.data);
          })
      }
      if(usertype==="Student" || usertype==="student")
      {
          axios
          .get(`http://localhost:8080/studentlogincheck/${emailid}/${password}`)
          .then((res)=>{
            setLogin(res.data);
            const userid=res.data.studentid;
            sessionStorage.setItem('studentid',userid);
            navigate('/Studentdashboard');
          })
          .catch((err)=>{
            toast.error(err.response.data);
          })
      }
    }

  return (
    <>
  <Navbar/>

    <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Scholarship Management</h1>
    <br></br><br></br>

    

    <img src={scholarship} style={{width:"600px",marginLeft:"20px",marginTop:"80px"}} alt="img1"/>
    
    <div className='loginpage'> 
    <h1 style={{color:"green"}}>Login</h1>
        <Form>
          <label className='form-label' style={{marginLeft:"-250px"}}>Select Usertype:</label>
          <select className='form-select' value={usertype} onChange={(e)=>setUsertype(e.target.value)}><br></br>
            <option value={0}>--Select Options--</option>
            {
              users.map((item,index)=>(
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select><br></br><br></br>
        <Form.Group className="mb-3">
        <Form.Label style={{marginLeft:"-300px"}}>Emailid:</Form.Label>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/018/931/665/small/black-user-icon-png.png" style={{width:"20px"}} alt="img2"/>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder='@gmailid'/>
      </Form.Group><br></br><br></br>

      <Form.Group className="mb-3">
        <Form.Label style={{marginLeft:"-300px"}}>Password:</Form.Label><img src="https://icons.veryicon.com/png/o/miscellaneous/good-driver-background-management/password-159.png" style={{width:"20px"}} alt="img3"/>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='******'/>
      </Form.Group>
      </Form><br></br>

      <div className='butns'>
      <button className='btn btn-success me-2' style={{width:"300px",borderRadius:"50px",marginLeft:"-20px"}} onClick={handlelogincheck}>Submit</button>
      </div>
      </div>
    </>
  )
}
