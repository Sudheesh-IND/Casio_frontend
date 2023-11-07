import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Edificeheader() {
  return (
    <div>
         <MDBNavbar light bgColor='light' className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://th.bing.com/th/id/OIP.KxSt5dCYhPfMZfIeMYodZAHaEO?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
              height='60'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <div className="m-auto d-flex flex-row mt-4 user-head">
            <p style={{color:'black'}}>Watches</p> <br />
            <p style={{color:'black'}} className='ms-5'>Electronic and musical instruments </p> <br />
            <p className='ms-5' style={{color:'black'}}>Calculators</p> <br />

          </div>
          <div className='mr-auto'>

             <span><i class="fa-regular fa-heart"></i></span>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Edificeheader