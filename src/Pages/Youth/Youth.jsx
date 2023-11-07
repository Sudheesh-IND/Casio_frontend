import React from 'react'
import Userheader from '../../Components/Userheader'
import './youth.css'
import Youthcarousel from './Youthcarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'

function Youth() {
  return (
    <div>
      <div>
        <Userheader/>
      </div>
      <div>
        <Youthcarousel/>
      </div>
      <div className="sticky-top">
        <Userheader2/>
      </div>
      <div className="youth-products">
        <Productcard/>
      </div>
    </div>
  )
}

export default Youth