import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './Signup.css'

function Signup() {
    const [name, setName] = useState()
    const [dob,setDob]=useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const url = 'https://sima-token.onrender.com'
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url+'/register', {name, dob, email, password})
        .then(res => {
            navigate('/login')
        }).catch(err => console.log(err))
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="sign-up p-3 rounded w-25">
        <h2 style={{color:"white"}}>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name">
              <strong style={{color:"white"}}>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date-of-birth">
              <strong style={{color:"white"}}>Date Of Birth</strong>
            </label>
            <input
              type="date"
              placeholder="Enter Birth Date"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong style={{color:"white"}}>Email</strong>
            </label>
            <input
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
              <strong style={{color:"white"}}>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger w-100 rounded-0">
            Register
          </button>
          </form>
          <p  style={{color:"white"}}> Already Have an Account</p>
          <Link to="/login">
           <button type="submit" className="btn btn-danger w-100 rounded-0">Login</button>
          </Link>
        
      </div>
    </div>
  );
}

export default Signup;
