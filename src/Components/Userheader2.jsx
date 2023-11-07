import React from 'react'
import './user.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Userheader2() {
  return (
    <div>

      <MDBNavbar light bgColor='light' className='user-head-casio1'>
        <MDBContainer>
         
           <div className="d-flex flex-col ">
               <a href="/">All</a>
               <a href="/gshock"><img src="https://www.casio.com/content/dam/casio/global/watch/g_shock/logo/g-shock.svg" alt="" /></a>
               <a href="/babyg"><img src="https://www.casio.com/content/dam/casio/global/watch/baby_g/logo/baby-g.svg" alt="" /></a>
               <a href="/protrek"><img src="https://www.casio.com/content/dam/casio/global/watch/protrek/logo/protrek.svg" alt="" /></a>
               <a href="/edifice"><img src="https://www.casio.com/content/dam/casio/global/watch/edifice/logo/edifice.svg" alt="" /></a>
               <a href="/sheen"><img src="https://www.casio.com/content/dam/casio/global/watch/sheen/logo/sheen.svg" alt="" /></a>
               <a href="/casio">CASIO</a>
               <a href="/vintage">Vintage</a>
               <a href="/enticer">ENTICER</a>
               <a href="/youth">Youth</a>
               <a href="/clock">Clock</a>
           </div>
      
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Userheader2