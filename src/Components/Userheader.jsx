
import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import './user.css'

function Userheader() {
  return (
    <div>

      <MDBNavbar light bgColor='light' className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://th.bing.com/th?id=OIP.YLJ48aJgmqA4LOzklbbaugHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
              height='50'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <div className="m-auto d-flex flex-row mt-4 user-head">
            <p style={{color:'black'}}>Watches</p> <br />
            <p style={{color:'black'}} className='ms-5'>Electronic and musical instruments </p> <br />
            <p style={{color:'black'}} className='ms-5'>Calculators</p> <br />

          </div>
          <div className='mr-auto'>

             <span><i class="fa-regular fa-heart"></i></span>
          </div>
        </MDBContainer>
      </MDBNavbar>
        
    </div>
  )
}

export default Userheader