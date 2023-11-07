import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Productcard() {
  return (
    <div>
     <div className="container card-portion">
      <Link to={'/viewproduct/:id'}>
      <MDBCard className='card shadow-0 border-none' style={{borderRadius:'0'}}>
      <MDBCardImage className='card-img border-none' style={{borderRadius:'0'}} src='https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/A1/A16/a168wa-5ay/assets/A168WA-5AY.png.transform/product-panel/image.png' position='top' alt='...' />
      <MDBCardBody>
        <span className='cmpny-name'>CASIO</span> <br />
        
        <span className='model-name'>A168WA-5AY</span><br />
        <span className='mrp-tag'>MRP</span><br />
        <span className='price-tag'>2995 (inclusive of all taxes)</span>
        
      </MDBCardBody>
    </MDBCard>

      </Link>
     
     </div>
    </div>
  )
}

export default Productcard