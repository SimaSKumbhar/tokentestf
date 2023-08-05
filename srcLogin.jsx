import React, { useRef } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import './Login.css'



function Login() {
    const data=useRef();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const url = 'https://sima-token.onrender.com'

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url+'/login', {email, password})
        .then(res => {
            console.log(res);
            localStorage.setItem("user",data.current.value)
            if(res.data === "Success") {
                navigate('/home')
            }else{
              alert("incorrect  password or email-id")
            }
        }).catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center  vh-100">
      <div className="login p-3 rounded w-25">
        <img className="image" src='data:image/jpeg;base64,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'/>
        <h2 style={{color:"white", width:"40%", marginLeft:"40%",marginTop:"10px"}}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong style={{color:"whitesmoke"}}>Email</strong>
            </label>
            <input
               
               ref={data}
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong style={{color:"whitesmoke"}}>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="btn btn-success w-100 rounded-0 btn2" style={{color:"white",fontWeight:"bold"}}>
            Login
          </button>
          
          </form>
          <p style={{color:"whitesmoke"}}>Already Have an Account</p>
          <Link to="/" className="btn1">
            Create Account
          </Link>
        
      </div>
    </div>
    )
}

export default Login;
