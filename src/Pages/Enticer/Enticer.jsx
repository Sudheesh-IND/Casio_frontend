import React from 'react'
import Userheader from '../../Components/Userheader'
import Enticercarousel from './Enticercarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'

function Enticer() {
  return (
    <div>
      <div>
        <Userheader/>
      </div>
      <div>
        <Enticercarousel/>
      </div>
      <div className='sticky-top'>
         <Userheader2/>
      </div>
      <div className="enticer-products">
        <Productcard/>
      </div>
    </div>
  )
}

export default Enticer