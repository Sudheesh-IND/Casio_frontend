import React, { useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../../Services/Api'

function Register() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [pass1,setPass1]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const registerUser=async()=>{
    
    if(pass1==password){
      const response=await userRegister(name,email,password)
  
      if(response.status>=200 && response.status<=399){
      
        localStorage.setItem('userId',response.data._id)
        navigate(`/userlogin`)
        alert('Account registered successfully')
      }else{
        alert('User already registered')
      }
    }else{
      alert('Passwords does not match')
    }
  }


  return (
    <div>
    <div>
        <Casioshopheader/>
    </div>
    <div className="login-part">
       <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                 <div className="form-part mt-5">
                    <h4>Please enter following details</h4>
                    <form action="">
                    <label className='text-start' htmlFor="">Name*</label>
                       
                       <input onChange={(e)=>{setName(e.target.value)}} placeholder='Name' className='form-control' type="text" />
                      
                       <label style={{marginTop:'40px'}}  className='text-start' htmlFor="">Email*</label>
                       
                        <input onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email' className='form-control' type="text" />

                        <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Password*</label>
                       
                        <input onChange={(e)=>{setPass1(e.target.value)}}  placeholder='Password' className='form-control' type="password" />

                        <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Confirm Password*</label>
                       
                       <input onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Confirm Password' className='form-control' type="password" />
                        <div style={{width:'100%',textAlign:'center'}}>
                        <button onClick={()=>{registerUser()}} style={{width:'300px',marginTop:'40px'}} type='button' className="buy-btn">Register</button>
                        </div>
                    </form>
                 </div>
                 <div>
                      <Link to={'/userlogin'}> 
                      <button style={{width:'300px',marginTop:'40px'}} className='fav-btn'>Already an user? Login</button>
                      </Link>
                  </div> 
                 
            </div>
            <div className="col-md-3"></div>
        </div>
       </div>
    </div>
</div>
  )
}

export default Register