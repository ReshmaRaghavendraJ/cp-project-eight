import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import globe from '../Components/globe.webp';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import axios from 'axios';
import Navbar from '../Components/Navbar';

export default function Register() 
{
    const [photo, setPhoto] = useState(''); 
    const[studentname,setStudentname]=useState('');
    const[studentusn,setStudentusn]=useState('');
    const[mobile,setMobile]=useState('');
    const[password,setPassword]=useState('');
    const[income,setIncome]=useState('');
    const[mailid,setMailid]=useState('');
    const[percentage,setPercentage]=useState('');
    const[selectedcourse,setSelectedcourse]=useState('');
    const[selectedcategory,setSelectedcategory]=useState('');
    const[courselist,setCourselist]=useState([]);   //Dropdown list of Courselist
    const[categorylist,setCategorylist]=useState([]);   //Dropdown list of Categorylist

    useEffect(()=>{
      getallcourses();
      getallcategory();
    },[])

    function getallcourses()  /* Dropdown list of Course */
    {
      axios
      .get("http://localhost:8080/getallcourses")
      .then((res)=>{
          setCourselist(res.data);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      })
    }

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
    
    function studentregister()  /* Register Students */
   {
    if(selectedcourse==="")
      {
        toast.error("Please select the course");
        return;
      }
      if(selectedcategory==="")
        {
          toast.error("Please select Category");
          return;
        }
        if(studentname==="")
          {
            toast.error("Please enter studentname");
            return;
          }
          if(studentusn==="")
            {
              toast.error("Please enter studentusn");
              return;
            }
            if(percentage==="")
              {
                toast.error("Please enter percentage");
                return;
              } 
              if(mobile==="")
                {
                  toast.error("Please enter mobile");
                  return;
                }
                if (!/^\+91\d{10}$/.test(mobile)) {
                  toast.error("mobile number should start with +91 and be followed by 10 digits");
                  return;
                }
                if(mailid==="")
                  {
                    toast.error("Please enter mailid");
                    return;
                  }
                  if(income==="")
                  {
                    toast.error("Please enter income");
                    return;
                  }
                  if(password==="")
                    {
                      toast.error("Please enter password");
                      return;
                    }
                    if (password.length > 0 && password.length < 5) 
                      {
                        toast.error("Password should be minimum of 5 Characters");
                        return;
                      }
                      if (password.length > 0 && (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password))) 
                        {
                        toast.warning("Password should contain both letters and numbers");
                      }
                      if (!/^[A-Z]/.test(password)) {
                        toast.error("Password should start with an uppercase letter");
                        return;
                      }
                    if(photo==="")
                      {
                        toast.error("Please upload photo");
                        return;
                      }
    const obj={selectedcourse,selectedcategory,studentname,studentusn,percentage,mobile,mailid,income,password,photo};
    axios
    .post(`http://localhost:8080/studentregister/${selectedcourse}/${selectedcategory}`,obj)
    .then((res)=>{
        toast.success(res.data);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    })
   }


   const Image = (e) => {
    const file = e.target.files[0];
    setPhoto(file); // Keep the file object for upload
    const reader=new FileReader();
  reader.readAsDataURL(file);
  reader.onload=()=>{
    setPhoto(reader.result);
  };
};


   function clearAll()
   {
      setIncome("");
      setMailid("");
      setMobile("");
      setPassword("");
      setPercentage("");
      setSelectedcategory("");
      setSelectedcourse("");
      setStudentname("");
      setStudentusn("");
      setPhoto(null);
   }

    return (
    <>
   <Navbar/>

    <img src="https://png.pngtree.com/png-vector/20230612/ourmid/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_7126880.png" alt="logo" style={{marginLeft:"1200px",marginTop:"-150px",width:"150px"}}/>
    <h1 style={{marginTop:"-120px",marginLeft:"600px",color:"white"}}>Scholarship Management</h1>
    <br></br><br></br>

    <img src={globe} style={{width:"1350px",marginTop:"-10px",height:"1300px"}} alt="back1"/>

    <Card style={{ 
    width: "1050px", 
    height: "1200px", 
    marginLeft: "100px", 
    marginTop: "-1230px", 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the color and alpha for transparency
    border: 'none' // Remove the border if you want a cleaner look
  }}>
      <Card.Body>
        <Card.Title><h1 style={{color:'maroon',textAlign:"center"}}>Student Registeration</h1></Card.Title>
        <label className='form-label' style={{color:"white"}}><h5>Select Course:</h5></label>
        <select className='form-select' value={selectedcourse} onChange={(e)=>setSelectedcourse(e.target.value)}>
          <option value={0}>--Choose Options--</option>
          {
            courselist.map((item,index)=>(
              <option key={index} value={item.courseid}>{item.courseid}-{item.coursename}</option>
            ))
          }
        </select><br></br>

        <label className='form-label' style={{color:"white"}}><h5>Select Category:</h5></label>
        <select className='form-select' value={selectedcategory} onChange={(e)=>setSelectedcategory(e.target.value)}>
          <option key={0}>--Choose Options--</option>
          {
            categorylist.map((item,index)=>(
              <option key={index} value={item.categoryid}>{item.categoryid}-{item.categoryname}</option>
            ))
          }
        </select><br></br>

        <Form>
          <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Student Name:</h5></Form.Label>
        <Form.Control type="text" value={studentname} onChange={(e)=>setStudentname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Student Usn:</h5></Form.Label>
        <Form.Control type="text" value={studentusn} onChange={(e)=>setStudentusn(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Student Percentage:</h5></Form.Label>
        <Form.Control type="text" value={percentage} onChange={(e)=>setPercentage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Mobile no:</h5></Form.Label>
        <Form.Control type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='+91'/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Mailid:</h5></Form.Label>
        <Form.Control type="text" value={mailid} onChange={(e)=>setMailid(e.target.value)}/>
          <p style={{color:"white"}}>example@gmail.com</p>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Income:</h5></Form.Label>
        <Form.Control type="text" value={income} onChange={(e)=>setIncome(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{color:"white"}}><h5>Enter Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='******'/>
      </Form.Group>

      <label className='form-label' style={{color:"white"}}><h5>Upload an image:</h5></label>
        <input 
          type="file" 
          className='form-control' 
          accept="image/*" 
          onChange={Image}
        />
      </Form><br></br>

      <div className='butns'>
      <button className='btn btn-success me-2' style={{borderRadius:"50px",marginLeft:"300px"}} onClick={studentregister}>Submit</button>
      <button className='btn btn-warning me-3' style={{borderRadius:"50px",marginLeft:"20px"}} onClick={clearAll}>Cancel</button>
      </div>
      </Card.Body>
    </Card>
      </>
  )
}
