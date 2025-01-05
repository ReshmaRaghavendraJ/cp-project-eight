import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { toast } from 'react-toastify';
import b6 from '../Components/b6.webp';

export default function Viewscholarships() 
{
    const[scholarshiplist,setScholarshiplist]=useState([]);
    const studentid=sessionStorage.getItem('studentid');  //Session Storage for Student
    const [selectedscholarship, setSelectedscholarship] = useState([]);


    useEffect(()=>{
      getscholarships();
        const appliedScholarships = JSON.parse(sessionStorage.getItem('appliedScholarships')) || [];
        setSelectedscholarship(appliedScholarships);
    },[])

    function getscholarships()  /* Display all Scholarships details */
    {
        axios
        .get("http://localhost:8080/getscholarships")
        .then((res)=>{
         setScholarshiplist(res.data);
        })
        .catch((err)=>{
          toast.error(err.response.data);
        })
    }

    function applyscholarship(scholarshipid,inchargeid)   /* Apply Scholarship */
    {
        const obj={scholarshipid,studentid,inchargeid};   
        axios
        .post(`http://localhost:8080/applyscholarship/${scholarshipid}/${studentid}/${inchargeid}`,obj)
        .then((res)=>{
         toast.success(res.data);
         const updatedSelected = [...selectedscholarship,scholarshipid];
         setSelectedscholarship(updatedSelected);   
         sessionStorage.setItem('appliedScholarships', JSON.stringify(updatedSelected));
        })
        .catch((err)=>{
          toast.error(err.response.data);
        })
    }

  return (
    <>
    <img src={b6} alt="b6" style={{width:"1350px",marginTop:"-8px"}}/>

    <h1 style={{color:"maroon",marginLeft:"500px",marginTop:"-850px"}}>View Scholarships:</h1><br></br>
    <Card className="card-hover" style={{width:"1300px",height:"300px",border:"none",marginLeft:"30px",backgroundColor: 'rgba(255, 255, 255, 0.2)',padding:"20px",color:"black"}}>
    <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Scholarship Id</th>
                    <th>Scholarship Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Min Percentage</th>
                    <th>Income</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {scholarshiplist.length > 0 ? (
                    scholarshiplist.map((item,index)=>(
                        <tr key={index}>
                            <td>{item?.scholarshipid}</td>
                            <td>{item?.scholarshipname}</td>
                            <td>{item?.startdate}</td>
                            <td>{item?.enddate}</td>
                            <td>{item?.minipercentage}</td>
                            <td>{item?.income}</td>
                            <td>{item?.category2?.categoryname}</td>
                            <td>{item?.amount}</td>
                            <td>
                                {!selectedscholarship.includes(item.scholarshipid) && (
                                        <button className='btn btn-success' onClick={()=>applyscholarship(item.scholarshipid,item.incharge1?.inchargeid)}>Apply Scholarship</button>
                                )}
                            </td>
                        </tr>
                    ))
                  ):(
                    <tr>
                      <td>No Scholarships Available</td>
                    </tr>
                  )
                }
            </tbody>
        </table><br></br>
    </Card><br></br>
   </>
  )
}
