
import  { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import signpic from "../imgs/signup.png"
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
    const [Details,setDetails] =useState({
        name : "",
        email : "",
        phone : "",
        password : "",
        cpassword : "" 
    })
    const handleChange=(event)=>{
        setDetails((pre)=>{
            const {name , value}=event.target
            return {
                ...pre,
                [name] : value
            }
        })
    }
    const handleClick=async (e)=>{
        console.log(Details)
        e.preventDefault()

        const {name,email,phone,password,cpassword}=Details;
       
        const res=await fetch("/register",
        {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "http://localhost:9000"
            },
            body :JSON.stringify({
                // name :name,email: email,phone : phone,password : password,cpassword :cpassword
                name : name,
                email : email,
                phone : phone,
                password : password,
                cpassword : cpassword
            })
        })

    const data=await res.json();
    console.log("error is",data)
    if(res.status===422 || !data){
        window.alert("Invalid registration")
    }
    else{
        window.alert("success ")
        navigate("/dashboard");

        
    }   
    }
    const Style={
        borderRadius: "6px",
        marginBottom : "2px"
    }
  return (
    <>
       <section >
            <div  style={{
                marginLeft : "20%",
                marginTop : "50px",
                width : "50%",
                height : "400px",
                boxShadow : `2px  2px 2px 2px  #9E9E9E`
            }}>
                <div className='container'>
                    <div className='row'>

                        <div className='col-6'>

                        <div  style={{
                            marginTop : "2rem",
                            marginLeft : "4rem"
                        }}>
                            <h2 className='form-title' style={{
                                marginBottom : "3rem"
                            }}>Sign up</h2>
                            <form  method='post'className='registration-form'>
                                <div style={{
                                    marginleft : "1rem"
                                }}>
                                    <label htmlFor='name'>
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>{" "}
                                    <input type="text"  style={Style} onChange={handleChange} 
                                    value={Details.name} name ="name"id = "name" placeholder='Your Name' autoComplete='off' />
                                </div>
                                 <div>
                                    <label htmlFor='email'>
                                    <i class="zmdi zmdi-email"></i>
                                    </label>{""}
                                    <input type="email"  style={Style} onChange={handleChange}
                                     value={Details.email}  name ="email"id = "email" 
                                     placeholder='Your email' autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='phone'>
                                    <i class="zmdi zmdi-phone-in-talk"></i>
                                    </label>{""}
                                    <input type="tel"  style={Style}onChange={handleChange}
                                     name ="phone" value={Details.phone} id = "phone" 
                                     placeholder='Your phone' autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='passowrd'>
                                    <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" style={Style} onChange={handleChange} value={Details.password} name = "password" id = "password" placeholder='Your password' autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='cpassowrd'>
                                    <i class="zmdi zmdi-lock"></i>
                                    
                                    </label>
                                    <input type="password" style={Style} onChange={handleChange} value={Details.cpassword}  name ="cpassword"id = "cpassword" placeholder='Confirm your passowrd' autoComplete='off' />
                                </div>
                                <div >
                                     <button type="button" style={
                                       {
                                        marginTop : "1rem",
                                        marginLeft : "40px",
                                       }
                                     } onClick={handleClick} class="btn btn-primary">register</button>
                                </div>
                            </form>
                            </div>

                        </div>
                        <div className='col-6'>
                               <div style={{
                                marginTop : "5rem"
                               }}>
                                    <figure>
                                        <img src={signpic} alt='register pic' />
                                    </figure>
                                    <Link to="/login" style={{
                                        marginLeft : "60px"
                                    }} className='signup-image-link'>already register</Link>
                                </div>
                        </div>
                    </div>

                </div>
                   
            </div>
       </section>
    </>
  )
}
export default Signup