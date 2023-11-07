import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Protrekheader() {
  return (
    <div>
         <MDBNavbar light bgColor='light' className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://www.maty.com/Webpages/606/content/titletextimageblock0/Logo-Casio-Protrek-Noir.png'
              height='40'
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

export default Protrekheader