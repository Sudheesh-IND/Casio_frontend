import React from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import { Link } from 'react-router-dom'

function Register() {
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
                       
                       <input placeholder='Name' className='form-control' type="text" />
                      
                       <label style={{marginTop:'40px'}}  className='text-start' htmlFor="">Email*</label>
                       
                        <input placeholder='Email' className='form-control' type="text" />

                        <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Password*</label>
                       
                        <input placeholder='Password' className='form-control' type="password" />

                        <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Confirm Password*</label>
                       
                       <input placeholder='Confirm Password' className='form-control' type="password" />
                        <div style={{width:'100%',textAlign:'center'}}>
                        <button style={{width:'300px',marginTop:'40px'}} className="buy-btn">Register</button>
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