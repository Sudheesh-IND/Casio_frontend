import React from 'react'
import Babyheader from './Babyheader'
import Babycarousell from './Babycarousell'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'

function Babyg() {
  return (
    <div>
       <div>
       <Babyheader/>
       </div>
       <div>
       <Babycarousell/>
       </div>
       <div className='sticky-top' >
           <Userheader2/>
       </div>
       <div className="baby-products">
              <Productcard/>
       </div>
    </div>
  )
}

export default Babyg