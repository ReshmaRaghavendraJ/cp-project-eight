import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Register from './Components/Register'
import Admindashboard from './Components/Admindashboard'
import Addcollege from './Components/Addcollege'
import Addcategory from './Components/Addcategory'
import Addincharge from './Components/Addincharge'
import Addcourse from './Components/Addcourse'
import Inchargedashboard from './Components/Inchargedashboard'
import Addscholarships from './Components/Addscholarships'
import Viewapplications from './Components/Viewapplications'
import Viewelegiblelist from './Components/Viewelegiblelist'
import Issuescholarship from './Components/Issuescholarship'
import Studentdashboard from './Components/Studentdashboard'
import Viewscholarships from './Components/Viewscholarships'
import Applyscholarships from './Components/Applyscholarships'
import Viewstatus from './Components/Viewstatus'


export default function App() {
  return (
    <Router>
    <ToastContainer/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Login"  element={<Login/>}/>
    <Route path="/Register"  element={<Register/>}/>

    <Route path="Admindashboard"  element={<Admindashboard/>}>
    <Route path="Addcollege"  element={<Addcollege/>}/>
    <Route path="Addcategory"  element={<Addcategory/>}/>
    <Route path="Addincharge"  element={<Addincharge/>}/>
    <Route path="Addcourse"  element={<Addcourse/>}/>
    </Route>


    <Route path="Inchargedashboard"  element={<Inchargedashboard/>}>
    <Route path="Addscholarships"  element={<Addscholarships/>}/>
    <Route path="Viewapplications"  element={<Viewapplications/>}/>
    <Route path="Viewelegiblelist"  element={<Viewelegiblelist/>}/>
    </Route>

    <Route path="/Issuescholarship"  element={<Issuescholarship/>}/>
    <Route path="/Applyscholarships"  element={<Applyscholarships/>}/>


    <Route path="Studentdashboard"  element={<Studentdashboard/>}>
    <Route path="Viewscholarships"  element={<Viewscholarships/>}/>
    <Route path="Viewstatus"  element={<Viewstatus/>}/>
    </Route>
    </Routes>
    </Router>
  )
}
