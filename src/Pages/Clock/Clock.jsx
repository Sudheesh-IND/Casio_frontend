import React from 'react'
import Userheader from '../../Components/Userheader'
import Clockcarousel from './Clockcarousel'
import Userheader2 from '../../Components/Userheader2'
import './clock.css'
import Productcard from '../../Components/Productcard'

function Clock() {
  return (
    <div>
      <div>
        <Userheader/>
      </div>
      <div>
        <Clockcarousel/>
      </div>
      <div className='sticky-top'>
         <Userheader2/>  
      </div>
      <div className="clock-products">
        <Productcard/>
      </div>
    </div>
  )
}

export default Clock