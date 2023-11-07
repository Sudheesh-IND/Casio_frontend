import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Sheenheader() {
  return (
    <div>
          <MDBNavbar light bgColor='light' className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://th.bing.com/th/id/R.7422d98426047adb43b9c1f3103af061?rik=Z8ROI6u5WtrLxA&riu=http%3a%2f%2fwww.watcho.co.uk%2fproduct_images%2fLogos%2fSheen-1.png&ehk=kcR%2f1I2n1UnAZqP4d3cHjostKAGo%2bm%2fsRpdidIqISyw%3d&risl=&pid=ImgRaw&r=0'
              height='25'
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

export default Sheenheader