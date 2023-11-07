import React from 'react'
import Userheader from '../../Components/Userheader'
import Casiocarousel from './Casiocarousel'
import Userheader2 from '../../Components/Userheader2'
import './casio.css'
import Productcard from '../../Components/Productcard'

function Casio() {
  return (
    <div>
      <div>
        <Userheader/>
      </div>
      <div>
        <Casiocarousel/>
      </div>
      <div className='sticky-top'>
         <Userheader2/>
      </div>
      <div className="casio-products">
         <Productcard/>
      </div>
      
    </div>
  )
}

export default Casio