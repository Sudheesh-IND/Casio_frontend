import React from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { Link } from 'react-router-dom'

function Login() {
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
                           
                            <input placeholder='Email' className='form-control' type="text" />

                            <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Password*</label>
                           
                            <input placeholder='Password' className='form-control' type="text" />
                            <div style={{width:'100%',textAlign:'center'}}>
                            <button style={{width:'300px',marginTop:'40px'}} className="buy-btn">Login</button>
                            </div>
                        </form>
                     </div>
                     <div>
                      <Link to={'/userregister'}> 
                      <button style={{width:'300px',marginTop:'40px'}} className='fav-btn'>New to casio? create an account</button>
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