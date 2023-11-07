import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Casioshopheader() {

  const navigate=useNavigate()

  const toCart=()=>{
    navigate('/cart/:id')
  }
  return (
    <div>
        <MDBNavbar  className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://www.casioindiashop.com/static/images/casio-logo.png'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          
          
          <div className='mr-auto'>
              <span><i class="fa-solid fa-user"></i></span>
             <span ><i class="fa-regular fa-heart ms-3"></i></span>
             <span onClick={toCart} style={{cursor:'pointer'}}><i class="fa-solid fa-cart-shopping ms-3"></i></span>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Casioshopheader