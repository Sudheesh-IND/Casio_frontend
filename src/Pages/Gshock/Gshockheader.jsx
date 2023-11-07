import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';


function Gshockheader() {
  return (
    <div>
        <MDBNavbar  style={{backgroundColor:'black'}} className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://logos-download.com/wp-content/uploads/2016/09/G-Shock_logo_black.png'
              height='20'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <div className="m-auto d-flex flex-row mt-4 user-head">
            <p style={{color:'white'}}>Watches</p> <br />
            <p style={{color:'white'}} className='ms-5'>Electronic and musical instruments </p> <br />
            <p style={{color:'white'}} className='ms-5'>Calculators</p> <br />

          </div>
          <div className='mr-auto'>

             <span style={{color:'white'}}><i class="fa-regular fa-heart"></i></span>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Gshockheader