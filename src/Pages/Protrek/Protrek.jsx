import React from 'react'
import Protrekheader from './Protrekheader'
import Pretrekcarousell from './Pretrekcarousell'
import Userheader2 from '../../Components/Userheader2'
import './protrek.css'
import Productcard from '../../Components/Productcard'

function Protrek() {
  return (
    <div>
      <div>
        <Protrekheader/>
      </div>
      <div>
        <Pretrekcarousell/>
      </div>
      <div className='sticky-top'>
        <Userheader2/>
      </div>
      <div className="trek-products">
            <Productcard/>
      </div>
    </div>
  )
}

export default Protrek
