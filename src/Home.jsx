import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'




function Home() {
    const url = 'https://sima-token.onrender.com'
    const[users,setUsers]=useState([])
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get(url+'/home')
        .then(result =>{console.log(result)
            if(result.data!=="Success") {
                 navigate('/login')
            }
        
        })
        .catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        axios.get(url)
        .then(users=>setUsers(users.data))
        .catch(err=>console.log(err))
    },[])
    return ( 
       <div className="w-100 vh-100 d-flex justify-content-center  ">
       <div className="w-100 ">
        <table className="table ">
            <thead>
                <tr>
                    <th className="bg-danger-subtle">
                        First_Name
                    </th>
                    <th className="bg-danger-subtle">
                        Last_Name
                    </th>
                    <th className="bg-danger-subtle">
                       Designation 
                    </th>
                    <th className="bg-danger-subtle">
                      Date Of Birth 
                    </th>
                    <th className="bg-danger-subtle">
                      Email-id
                    </th>
                    <th className="bg-danger-subtle">
                       Mobile no. 
                    </th>
                    <th className="bg-danger-subtle">
                      Date of Joining
                    </th>
                </tr>
            </thead>
            <tbody>
                
                    
                        <tr>
                            <td>Rashad</td>
                            <td>Mitchell</td>
                            <td>Manager</td>
                            <td>09/08/1985</td>
                            <td>Rashad@gmail.com</td>
                            <td>8719403256</td>
                            <td>09/08/2004</td>
                        </tr>
                        <tr>
                            <td>Hedy</td>
                            <td>Stanley</td>
                            <td>Supervisor</td>
                            <td>10/10/1987</td>
                            <td>hedy@gmail.com</td>
                            <td>7819405456</td>
                            <td>26/08/2007</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>CEO</td>
                            <td>05/05/1995</td>
                            <td>John@gmail.com</td>
                            <td>7517532565</td>
                            <td>01/05/2012</td>
                        </tr>
                        <tr>
                            <td>Jason</td>
                            <td>Roy</td>
                            <td>Assistant Manager</td>
                            <td>19/09/1998</td>
                            <td>Jason@gmail.com</td>
                            <td>8800503256</td>
                            <td>09/08/2011</td>
                        </tr>
                        <tr>
                            <td>Sam</td>
                            <td>Curran</td>
                            <td>Accountant</td>
                            <td>10/12/1985</td>
                            <td>Sam@gmail.com</td>
                            <td>8541403256</td>
                            <td>03/09/2012</td>
                        </tr>
                        <tr>
                            <td>Paul</td>
                            <td>Heman</td>
                            <td>Manager</td>
                            <td>04/05/1989</td>
                            <td>Paul@gmail.com</td>
                            <td>8685403256</td>
                            <td>01/05/2018</td>
                        </tr>
                        <tr>
                            <td>David</td>
                            <td>Bristol</td>
                            <td>Software Developer</td>
                            <td>10/09/1987</td>
                            <td>david@gmail.com</td>
                            <td>8544447256</td>
                            <td>02/04/2006</td>
                        </tr>
                        <tr>
                            <td>Harry</td>
                            <td>Brook</td>
                            <td>Software testing</td>
                            <td>07/05/1995</td>
                            <td>Harry@gmail.com</td>
                            <td>7545103256</td>
                            <td>03/02/2009</td>
                        </tr>
                        <tr>
                            <td>James</td>
                            <td>Anderson</td>
                            <td>Project Manager</td>
                            <td>04/04/1992</td>
                            <td>jamesd@gmail.com</td>
                            <td>9821403256</td>
                            <td>01/07/2005</td>
                        </tr>
                        <tr>
                            <td>Chris</td>
                            <td>Woakes</td>
                            <td>React developer</td>
                            <td>09/08/1985</td>
                            <td>chris@gmail.com</td>
                            <td>7512403256</td>
                            <td>25/08/2015</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Wood</td>
                            <td>Node developer</td>
                            <td>09/08/1985</td>
                            <td>Rashad@gmail.com</td>
                            <td>7584403256</td>
                            <td>20/05/2017</td>
                        </tr>
                        <tr>
                            <td>Ben</td>
                            <td>Stokes</td>
                            <td>Front end developer</td>
                            <td>25/05/1990</td>
                            <td>ben@gmail.com</td>
                            <td>7878403256</td>
                            <td>30/08/2011</td>
                        </tr>
                        <tr>
                            <td>Josh</td>
                            <td>Tongoe</td>
                            <td>Software developer</td>
                            <td>07/10/1994</td>
                            <td>josh25@gmail.com</td>
                            <td>9565403256</td>
                            <td>14/12/2012</td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Doe</td>
                            <td>Supervisor</td>
                            <td>17/011/1996</td>
                            <td>michels23@gmail.com</td>
                            <td>8719403256</td>
                            <td>12/12/2012</td>
                            
                        </tr>
                        <tr>
                            <td>Neil</td>
                            <td>Killen</td>
                            <td>Software tester</td>
                            <td>15/05/1984</td>
                            <td>killen45@gmail.com</td>
                            <td>8719403256</td>
                            <td>16/09/2008</td>
                        </tr>
                        <tr>
                            <td>Rashad</td>
                            <td>Woakes</td>
                            <td>Asp dot net developer</td>
                            <td>09/08/1985</td>
                            <td>wokes675@gmail.com</td>
                            <td>9845203256</td>
                            <td>24/12/2015</td>
                        </tr>
                        
                
            </tbody>
        </table>
        <Link to="/login">
            Back to login page
        </Link>
        </div>
       </div>
     );
}

export default Home;