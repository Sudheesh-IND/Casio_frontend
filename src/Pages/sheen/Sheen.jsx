import React from 'react'
import Sheenheader from './Sheenheader'
import Sheencarousel from './Sheencarousel'
import Userheader2 from '../../Components/Userheader2'
import './sheen.css'
import Productcard from '../../Components/Productcard'

function Sheen() {
  return (
    <div>
      <div>
      <Sheenheader/>
      </div>
      <div>
        <Sheencarousel/>
      </div>
      <div className="sticky-top">
        <Userheader2/>
      </div>
      <div className="sheen-products">
        <Productcard/>
      </div>
    </div>
  )
}

export default Sheen