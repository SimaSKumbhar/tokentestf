import React, { useRef } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


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
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
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
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          
          </form>
          <p>Already Have an Account</p>
          <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Sign Up
          </Link>
        
      </div>
    </div>
    )
}

export default Login;