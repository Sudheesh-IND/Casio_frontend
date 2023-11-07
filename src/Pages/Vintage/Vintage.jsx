import React from 'react'
import './vintage.css'
import Userheader from '../../Components/Userheader'
import Vintagecarousel from './Vintagecarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'

function Vintage() {
  return (
    <div>
      <div>
        <Userheader/>
      </div>
      <div>
        <Vintagecarousel/>
      </div>
      <div className="sticky-top">
        <Userheader2/>
      </div>
      <div className="vintage-products">
        <Productcard/>
      </div>
    </div>
  )
}

export default Vintage