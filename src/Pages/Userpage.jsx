import React from 'react'
import Userheader from '../Components/Userheader'
import Usercarousel1 from '../Components/Usercarousel1'
import Userheader2 from '../Components/Userheader2'
import './Userside.css'
import Productcard from '../Components/Productcard'

function Userpage() {
  return (
    <div>
        <div>
        <Userheader/>
        </div>
        <div>
          <Usercarousel1/>
        </div>
        <div className='sticky-top'>
          <Userheader2/>
        </div>
        <div className='products-portion-casio1'>
           <Productcard/>
        </div>

    </div>
  )
}

export default Userpage