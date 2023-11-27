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

function Productcard2({product}) {
  return (
    <div>
     <div className="container card-portion">
     
     <div className="row">
     <div className="d-flex flex-col flex-wrap " style={{justifyContent:'flex-start'}}>
     {
      product.length>0? product.map((item)=>(
        <Link to={`/viewproduct/${item.productId}`}>
        <MDBCard className='card shadow-0 border-none' style={{borderRadius:'0'}}>
        <MDBCardImage className='card-img border-none' style={{borderRadius:'0'}} src={item.imageUrl} position='top' alt='...' />
        <MDBCardBody>
          <span className='cmpny-name'>{item.brand}</span> <br />
          
          <span className='model-name'>{item.productModel}</span><br />
          <span className='mrp-tag'>MRP</span><br />
          <span className='price-tag'>{item.price}(inclusive of all taxes)</span>
          
        </MDBCardBody>
      </MDBCard>
  
        </Link>
      )):''
     }
     </div>
     </div>
     
     </div>
    </div>
  )
}

export default Productcard2