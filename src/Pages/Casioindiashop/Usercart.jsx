import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addToUserWishlist, cartDecrement, cartIncrement, getCart, removeCart } from '../../Services/Api'

function Usercart() {

    const navigate=useNavigate()
    const {userId}=useParams()
    const [products,setProducts]=useState([])

    const handleCartProducts=async()=>{
        const response=await getCart(userId)
        console.log(response)
        setProducts(response.data)
    }

    const toAddressPage=()=>{
        if(products.length<=0){
            alert('Please add products')
        }else{
            navigate(`/address/${userId}`)
        }
    }

    const handleIncrement=async(cartId)=>{
       
       const response=await cartIncrement(cartId,userId)
       console.log(response)
       if(response.status>=200 && response.status<=399){
        
        setProducts([])
         setProducts(response.data)
       }
    }

    const handleDecrement=async(cartId)=>{
       
        const response=await cartDecrement(cartId,userId)
        console.log(response)
        if(response.status>=200 && response.status<=399){
         
         setProducts([])
          setProducts(response.data)
        }
     }
    
    const handleRemove=async(cartId)=>{
        const response=await removeCart(cartId,userId)
        console.log(response)
        if(response.status>=200 && response.status<=399){
         
         setProducts([])
          setProducts(response.data)
        } 
    }

    const handleWishlist=async(productModel,brand,imageUrl,price,userId,productId)=>{
        const response=await addToUserWishlist(productModel,brand,imageUrl,price,userId,productId)
        console.log(response)
        if(response.status>=200 && response.status<=399){
         
            navigate(`/wishlist/${userId}`)
        }else{
            alert('Product already exist in wishlist')
        }
        
    }


    useEffect(()=>{
        handleCartProducts()
    },[])
  return (
    <div>
        <div>
            <Casioshopheader/>
        </div>
        <div>
            <div className="container">
               {
                products.length>0?(
                    <div className="row">
                    <div className="col-md-8 p-4">

                    {
                        products.length>0? products.map((item)=>(
                        <div className="row border cart-products mt-2  ">
                           <div className="col-md-4">
                              <div className="cart-image">
                                <img src={item.imageUrl} alt="" />
                              </div>
                           </div>
                           <div className="col-md-8">
                              
                                    <div className="cart-details">
                                  {/* <p>CASIO</p> */}
                                 <div style={{width:'100%',justifyContent:'space-between'}} className='d-flex flex-col '>
                                 <span>
                                 <h4>{item.productModel}</h4>
                                 </span>
                                 <span>
                                    <h5 style={{marginRight:'50px'}}>₹ {item.price}</h5>
                                 </span>
                                 </div>
                                
                                  <div>
                                   <div className="col d-flex mt-2 cart-increment">
                                    <div>
                                        <button onClick={()=>{handleIncrement(item._id)}}>+</button>
                                    </div>
                                    <div className='count-portion'>
                                        <input className='text-center bg-white' value={item.count} type="text" />
                                    </div>
                                    <div>
                                       <button onClick={()=>{handleDecrement(item._id)}}>-</button> 
                                    </div>
                                  </div>

                                  <div className='mt-2'>
                                    <button  onClick={()=>{handleRemove(item._id)}} style={{height:'30px',width:'100px'}} className='buy-btn '>Remove</button>
                                    <button onClick={()=>{handleWishlist(item.producyModel,item.brand,item.imageUrl
                                        ,item.price,item.userId,item.productId)}} style={{height:'30px',width:'100px'}} className='fav-btn ms-2'>Wishlist</button>
                                    
                                  </div>
                                  </div>
                               </div>
                              
                           </div>
                        </div>
                          )):''
                        }

                    </div>
                    <div className="col-md-4 p-3">
                        <button onClick={toAddressPage} style={{width:'100%'}} className='buy-btn'>Continue</button>
                        <div>
                            <h6 style={{color:'black'}} className='text-center mt-3'>Shipping applicable as per T&C.</h6>
                        </div>
                    </div>
                </div>
                ):<div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{height:'100vh',display:'flex',textAlign:'center',justifyContent:'center',flexDirection:'column'}} className='d-flex'>
                                <div>
                                <img style={{width:'150px'}} src="https://www.casioindiashop.com/static/images/cart-empty.svg" alt="" />

                                </div>
                                <div>
                                <h4 style={{fontWeight:'800',color:'black'}} className='mt-3'>Your cart is empty right now.</h4>
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
        </div>
    </div>
  )
}

export default Usercart