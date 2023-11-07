import React from 'react'
import Gshockheader from './Gshockheader'
import Gshockcarousel from './Gshockcarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'


function Gshock() {
  return (
    <div>
        <div>
            <Gshockheader/>
        </div>
        <div >
            <Gshockcarousel/>
        </div>
        <div className='sticky-top'>
            <Userheader2/>
        </div>
        <div className="product-portion">
            <Productcard/>
        </div>
    </div>
  )
}

export default Gshock