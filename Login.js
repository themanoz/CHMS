import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import loginpic from "../imgs/login.jfif"



import { useNavigate } from 'react-router-dom'

const Login = () => {
   const navigate=useNavigate();
    const [user ,setUser]=useState({
        email : "",
        password : ""
    })
    const handleChange=(event)=>{
        const {name ,value}=event.target;
        setUser((pre)=>{
            return {
                ...pre,
                [name ] : value
            }
        })
    }
    const handleClick=async (e)=>{
        e.preventDefault()
        const {email,password}=user;
        const res=await fetch('/signin',
        {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "http://localhost:9000"
            },
            body :JSON.stringify({
                // name :name,email: email,phone : phone,password : password,cpassword :cpassword
                email : email,
                password : password,
                
            })
        })


        const data=await res.json();

        if(res.status ===400 || !data){
            window.alert("Invalid Credentials");

        }else{
            window.alert("valid Credentials");
            navigate("/dashboard");
        }
    }
    const Style={
        borderRadius: "6px",
        marginBottom : "1rem"
    }
  return (
    <div >
        <div  style={{
                 marginLeft : "20%",
                 marginTop : "50px",
                 width : "50%",
                 height : "400px",
                 boxShadow : `3px  3px 3px 3px  #9E9E9E`
            }}>
                <div className='container' >
                    <div className='row' >
                    <div className='col-6'>
                            <div style={{
                                marginLeft : "5rem",
                                marginTop : "5rem"
                            }}>
                                <figure>
                                     <img src={loginpic} alt="login pic" style={{
                                       
                                     }}/>
                                </figure>
                                <Link to="/signup"  style={{
                                   marginLeft : "3rem"
                                }}className='signin-image-link'> create an account</Link>
                            </div>
                        </div>
                        <div className='col-6'>


                            <div style={{
                                marginTop : "6rem",
                                marginLeft : "40px"
                            }}>
                            <h2 className='form-title' style={{
                                marginBottom : "3rem"
                            }}>Sign in</h2>
            <div>
                 <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                </label>{" "}
                <input type="email" name="email" style={Style} onChange={handleChange} value={user.email}id = "email" placeholder='Your email' autoComplete='off' />
            </div>
            <div>
                <label htmlFor='passowrd'>
                    <i className="zmdi zmdi-lock"></i>
                </label>{" "}{" "}
                <input type="password" name="password" style={Style} onChange={handleChange} value={user.password} id = "password" placeholder='Your password' autoComplete='off' />
            </div>
            <div>
            <Link to="/resetpassword" style={{
                marginLeft : "1rem"
            }}>forget password</Link>
            </div>
            <div >
                <button type="button" style={{
                    textAlign : "center",
                    marginLeft : "3rem",
                    marginTop : "1rem"
                }} onClick={handleClick} class="btn btn-primary">Log in</button>
            </div >
            </div>                
            </div>            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login