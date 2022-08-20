import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">      
      <li class="nav-item">
        <Link class="nav-link " to="/dashboard">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/contact">Contact</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/log out ">Log out</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/profileupdate">updateProfile</Link>
      </li>
    </ul>
  </div>
</nav>
<h4 style={{
    textAlign : "center"
}}>Compliant Handling Management System for class </h4>
<div style={{
    marginLeft : "35%",
}}>     
        <textarea type="" style={{
            width : "50%",
            textAlign : "center",
            height : "100px"
        }} placeholder='Enter your problem here'/>
       <div>

       <label htmlFor='file' >Any Evidence : </label>{" "}
        <input type="file" name="file" />
       </div>
      <button style={{
        marginTop : "1rem",
      }} className='btn btn-primary' >submit</button>


</div>
<div style={{
    textAlign : "center"
}}>
    <h3>Your Problems </h3>
</div>

    </>
  )
}

export default Dashboard