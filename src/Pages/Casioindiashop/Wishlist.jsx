import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'

import { getWishlist } from '../../Services/Api'
import { Link, useParams } from 'react-router-dom'
import Productcard2 from '../../Components/Productcard2'

function Wishlist() {

  const [products,setProducts]=useState([])
  const {userId}=useParams()

  const handleWishlist=async()=>{
    
    const response=await getWishlist(userId)
    setProducts(response.data)
    console.log(response)
  }

  useEffect(()=>{
    handleWishlist()
  },[])
  return (
    <div>
      <div>
        <Casioshopheader/>
      </div>
      {
        products.length>0?(
          <div>
          <Productcard2 product={products}/>
         </div>
        ):<div>
        <div className="row">
            <div className="col-md-12">
                <div style={{height:'100vh',display:'flex',textAlign:'center',justifyContent:'center',flexDirection:'column'}} className='d-flex'>
                    <div>
                    <img style={{width:'150px'}} src="https://www.casioindiashop.com/static/images/empty-wishlist.svg" alt="" />

                    </div>
                    <div>
                    <h4 style={{fontWeight:'800',color:'black'}} className='mt-3'>Your wishlist seems empty.</h4>
                      <div>
                        <Link to={'/'}>
                        <button style={{width:'250px'}} className='fav-btn'>Continue shopping</button>
                         </Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      }
      
    </div>
  )
}

export default Wishlist