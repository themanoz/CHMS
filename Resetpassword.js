import { useState } from 'react'

import {Link} from "react-router-dom"


import resetpic from "../imgs/resetpassword.jfif"

import {useNavigate} from "react-router-dom";

function Resetpassword() {
    const navigate=useNavigate();
    const [Password,resetPassword]=useState({
        email : "",
        password : "",
        cpassword : "",
    })
    const handleChange=(event)=>{
        const {name , value}=event.target;
        resetPassword((pre)=>{
            return {
                ...pre,
                [name] : value
            }
        })

    }
    const handleClick=async (event)=>{
        const {email,password,cpassword}=Password

        const res=await fetch("/reset",
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "http://localhost:9000"
            },
            body : JSON.stringify({
                email :email,
                password : password,
                cpassword :cpassword 
            })
        })
       
        if(res.status==422 || !res){
            res.json({
                error : "Invalid reset"
            })
        }
        else{
            res.json({
                message : "Valid reset" })
                navigate("/dashboard")
            
        }

   
    }
    const Style={
        borderRadius: "6px",
        marginBottom : "2px"
    }
  return (
    <div >
    <div  style={{
             marginLeft : "20%",
             marginTop : "50px",
             width : "50%",
             height : "400px",
             boxShadow : "1px 1px 1px 1px "
            
        }}>
            <div className='container' >
                <div className='row' >
                <div className='col-6'>
                        <div style={{
                            marginLeft : "5rem",
                            marginTop : "5rem"
                        }}>
                            <figure>
                                 <img src={resetpic} alt="login pic" />
                            </figure>
                            <Link to="/login"  style={{
                               marginLeft : "7rem"
                            }}> Login </Link>
                        </div>
                    </div>
                    <div className='col-6'>

                        <div style={{ marginTop : "6rem",marginLeft : "40px"}}>
                            <h2  style={{ marginBottom : "3rem"}}>reset password</h2>
                         <div>
             <label htmlFor='email'>
                <i className="zmdi zmdi-email"></i>
            </label>{" "}
            <input type="email" name="email" style={Style} 
            value={Password.email} onChange={handleChange}
            id = "email" placeholder='Your email' autoComplete='off' />
        </div>
        <div>
            <label htmlFor='passowrd'>
                <i className="zmdi zmdi-lock"></i>
            </label>{" "}{" "}
            <input type="password" name="password" style={Style} 
             value={Password.password} onChange={handleChange}
             id = "password" placeholder='New password' autoComplete='off' />
        </div>
        <div>
            <label htmlFor='cpassowrd'>
                <i className="zmdi zmdi-lock"></i>
            </label>{" "}{" "}
            <input type="password" name="cpassword" 
            style={Style} value={Password.cpassword}
            onChange={handleChange} id = "cpassword"
            placeholder='Confirm Your password' autoComplete='off' />
        </div>
        <div>
       
        </div>
        <div >
            <button type="button" style={{textAlign : "center",marginLeft : "3rem",marginTop : "1rem" }}
             class="btn btn-primary"
             onClick={handleClick}>Reset</button>
        </div >
        </div>                
        </div>            
        </div>
        </div>
    </div>
</div>
  )
}

export default Resetpassword