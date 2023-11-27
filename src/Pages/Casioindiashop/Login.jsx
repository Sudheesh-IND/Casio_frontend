import React, { useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../Services/Api'

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleLogin=async()=>{
    console.log(email,password)
      if(email!=''||password!=''){
        const response=await userLogin(email,password)
        console.log(response)

      if(response.status>=200 && response.status<=399){
        localStorage.setItem('userId',response.data._id)
        localStorage.setItem('name',response.data.name)

        alert('Successfully loggined into account')

        navigate(`/profile/${response.data._id}`)
       
      }else{
        alert('Plase provide valid details')
      }
      }else{
        alert('Please fill all fields')
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
                     <div className="form-part">
                        <h4>Login</h4>
                        <form action="">
                          
                           <label className='text-start' htmlFor="">Email*</label>
                           
                            <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='form-control' type="text" />

                            <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Password*</label>
                           
                            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' className='form-control' type="password" />
                            <div style={{width:'100%',textAlign:'center'}}>
                            <button onClick={()=>{handleLogin()}}  type='button' style={{width:'300px',marginTop:'40px'}} className="buy-btn">Login</button>
                            </div>
                        </form>
                     </div>
                     <div>
                      <Link to={'/userregister'}> 
                      <button  style={{width:'300px',marginTop:'40px'}} className='fav-btn'>New to casio? create an account</button>
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

export default Login