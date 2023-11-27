import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addToCart, addToUserWishlist, viewParticular } from '../../Services/Api'

function Viewproducts() {

    //state for navigation
    const navigate=useNavigate()
    const {id}=useParams()
    const [productDetails,setProductDetails]=useState({})
    const [count,setCount]=useState(1)

    const toLogin=async()=>{

        const userId=localStorage.getItem('userId')
        if(userId){
           
            const response=await addToCart(productDetails.productModel,
                productDetails.brand,productDetails.imageUrl,productDetails.price,userId,
                productDetails._id,count)

               console.log(response)
            
            if(response.status>=200 && response.status<=399){
                navigate(`/cart/${userId}`)
            }else{
                alert('cannot add to cart')
            }
            
        }else{
            navigate('/userlogin')
        }
    }

    //adding to wishlist
    const handleWishlist=async()=>{
        const userId=localStorage.getItem('userId')
        if(userId){
           
            const response=await addToUserWishlist(productDetails.productModel,
                productDetails.brand,productDetails.imageUrl,productDetails.price,userId,
                productDetails._id)

               console.log(response)
            
            if(response.status>=200 && response.status<=399){
                navigate(`/wishlist/${userId}`)
            }else{
                alert('Product already exist in wishlist')
            }
            
        }else{
            navigate('/userlogin')
        }
    }

    const viewProduct=async()=>{

        const {data}=await viewParticular(id)
        setProductDetails(data)
        console.log(data)

    }


    useEffect(()=>{
        viewProduct()
    },[])
  return (
    <div>
        <div>
            <Casioshopheader/>
        </div>
        <div className="view-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-portion">
                            <img src={productDetails.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-portion">
                            <h6>{productDetails.brand}</h6>
                            <h2>{productDetails.productModel}</h2>
                            <p>MRP</p>
                            <h4>₹ {productDetails.price} (incl. of all taxes)</h4>
                           <button onClick={toLogin} className='buy-btn'>Click to Buy</button>
                            <button onClick={handleWishlist} className='fav-btn'>Favorite <i class="fa-regular fa-heart ms-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewproducts