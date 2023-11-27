import React, { useEffect, useState } from 'react'
import Profilesidebar from './Shopcomponents/Profilesidebar'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { base_Url } from '../../Services/Api'

function Userprofile() {

    const {userId}=useParams()
    const  [user,setUser]=useState({})
    const [profileLetter,setProfileLetter]=useState('')
    const navigate=useNavigate()

    const handleUser=async()=>{
      const response=await axios.get(`${base_Url}/getuser/${userId}`)
      setUser(response.data)
      setProfileLetter(response.data.name.slice(0,1))
      console.log(response)
    }

    const handleLogout=()=>{
        localStorage.clear()
        navigate('/')
    }

    useEffect(()=>{
        handleUser()
    })
  return (
    <div>
        <div>
          <Casioshopheader/> 
        </div>
        <div className="container"  style={{padding:'100px'}}>
            <div className="row">
                <div className="col-md-3">
                    <Profilesidebar/>
                </div>
                <div className="col-md-9">
                    <div className='profile p-3 border'>
                       <div >
                        <h2>My Account</h2>
                       </div>
                       <hr />
                       <div className='pro-name'>
                        
                            <div className='pro-pic'>
                               <h1>{profileLetter}</h1>
                            </div>
                            <div className='pro-nme' style={{height:'100px'}} >
                               
                                <h3>{user.name}</h3>
                                <h6 >{user.email}</h6>
                                {/* <h6>5446465</h6> */}
                                
                            </div>
                            
                        
                        <div>
                          

                        </div>
                       </div>
                       <div style={{padding:'8px'}}>
                                <p>Welcome {user.name}, this is your account summary.
You can access & manage your personal information</p>
                            </div>

                            <hr />
                             <div style={{width:'100%',textAlign:'end'}}>
                            <button onClick={handleLogout} style={{width:'150px'}} className="buy-btn ">Log out</button>
                             </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userprofile