import React, { useState } from 'react'
import Adminheader from './Admincomponents/Adminheader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { base_Url } from '../../Services/Api'


function Adminlogin() {

  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const adminLogin=async()=>{
   const body={
    email,password
   }
    const response=await axios.post(`${base_Url}/adminlogin`,body)
    console.log(response)
    if(response.status>=200 && response.status<=399){
      navigate('/viewuser')
    }else{
      alert('Please enter valid credentials')
       navigate('/admin')
    }
  }
  return (
    <div>
        <div>
            <Adminheader/>
        </div>
        <div>
        <div className="login-part">
           <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                     <div className="form-part">
                        <h4>Admin Login</h4>
                        <form action="">
                          
                           <label className='text-start' htmlFor="">Email*</label>
                           
                            <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='form-control' type="text" />

                            <label onChange={(e)=>{setPassword(e.target.value)}} style={{marginTop:'40px'}} className='text-start' htmlFor="">Password*</label>
                           
                            <input placeholder='Password' className='form-control' type="password" />
                            <div style={{width:'100%',textAlign:'center'}}>
                            <button onClick={adminLogin} type='button'  style={{width:'300px',marginTop:'40px'}} className="buy-btn">Login</button>
                            </div>
                        </form>
                     </div>
                     <div>
                    
                     </div>
                </div>
                <div className="col-md-3"></div>
            </div>
           </div>
        </div>

        </div>
    </div>
  )
}

export default Adminlogin