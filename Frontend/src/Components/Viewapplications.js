import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { toast } from 'react-toastify';
import b2 from '../Components/b2.jpg';

export default function Viewapplications() {
  const [applicationlist, setApplicationlist] = useState([]); // Initialized as an empty array
  const inchargeid = sessionStorage.getItem('inchargeid');

  useEffect(() => {
    if (inchargeid) {
      getallapplications();
    }
  }, [inchargeid]);

  function getallapplications() {
    axios
      .get(`http://localhost:8080/getallapplications/${inchargeid}`)
      .then((res) => {
        // Ensure the response is an array
        if (Array.isArray(res.data)) {
          setApplicationlist(res.data);
        } else {
          toast.info("No applications found.");
          setApplicationlist([]); // Set to empty array if response is not an array
        }
      })
      .catch((err) => {
        toast.error(err.response?.data || "An error occurred.");
        setApplicationlist([]); // Ensure the list is reset on error
      });
  }

  return (
    <>
      <img src={b2} alt="b2" style={{ width: "1350px", marginTop: "-0.5px" }} />

      <h1 style={{ marginTop: '-850px', textAlign:"center", color: "maroon" }}>View Applications:</h1><br />
      <Card className="card-hover" style={{ width: "1200px", height: "300px", border: "none", marginLeft: "50px", backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: "20px", color: "black" }}>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Student USN</th>
              <th>Student Name</th>
              <th>Category</th>
              <th>College Name</th>
              <th>Course</th>
              <th>Scholarship Name</th>
              <th>Application Date</th>
            </tr>
          </thead>
          <tbody>
            {applicationlist.length > 0 ? (
              applicationlist.map((item, index) => (
                <tr key={index}>
                  <td>{item.applicationid}</td>
                  <td>{item.student3?.studentusn}</td>
                  <td>{item.student3?.studentname}</td>
                  <td>{item.scholarship3?.category2?.categoryname}</td>
                  <td>{item.student3?.course2?.college1?.collegename}</td>
                  <td>{item.student3?.course2?.coursename}</td>
                  <td>{item.scholarship3?.scholarshipname}</td>
                  <td>{item.applicationdate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center' }}>No applications found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
}
