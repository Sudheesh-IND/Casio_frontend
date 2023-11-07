import React from 'react'
import Edificeheader from './Edificeheader'
import Edificecarousel from './Edificecarousel'
import Userheader2 from '../../Components/Userheader2'
import './edifice.css'
import Productcard from '../../Components/Productcard'

function Edifice() {
  return (
    <div>
      <div>
      <Edificeheader/>
      </div>
      <div>
        <Edificecarousel/>
      </div>
      <div className='sticky-top'>
        <Userheader2/>
      </div>
      <div className="edifice-products">
          <Productcard/>
      </div>
    </div>
  )
}

export default Edifice