import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import Profilesidebar from './Shopcomponents/Profilesidebar'
import './casioindia.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { base_Url } from '../../Services/Api'

function Viewordersforuser() {

    const [order,setOrder]=useState([])
    const {userId}=useParams()

    const handleOrders=async()=>{
        const response=await axios.get(`${base_Url}/getmyorders/${userId}`)
        console.log(response)
        setOrder(response.data)
    }

    const handleCancellation=async(orderId)=>{
        const response=await axios.get(`${base_Url}/cancelorder/${orderId}/${userId}`)
        if(response.status>=200 && response.status<=399){
            handleOrders()
            alert('Order cancelled refund will be done within 7 working days')
        }
    }
   

    useEffect(()=>{
        handleOrders()
    },[])
  return (
    <div>
        <div>
            <Casioshopheader/>
        </div>
        <div className="container" style={{padding:'100px'}}>
           <div className="row">
            <div className="col-md-3">
                <Profilesidebar/>
            </div>
            <div className="col-md-9 order-portion" >
            <h2>My Orders</h2>
                {
                    order.length>0? order.map((item)=>{
                    return(
                        <div className='border' style={{padding:'15px',margin:'20px'}}>
                         {
                            item.products.map((product)=>{
                                return(
                                    <div className='order-portion-2'>
                                        <div>
                                            <img style={{width:'200px',height:'150px'}} src={product.imageUrl} alt="" />
                                        </div>
                                        <div>
                                           <h4 style={{marginTop:'30px'}}>{product.productModel}</h4>
                                           <h6>{product.brand}</h6>
                                           <h6>{product.price}</h6>
                                        </div>

                                    </div>
                                )
                            })
                           

                         }
                         <div className='p-2'>
                         <p>OrderId : {item.orderId}</p>
                         </div>
                          <div className="order-portion-2">
                           
                          <div className='p-2'>
                              <h6 >Net Total: {item.rate} RS</h6>  
                          </div>
                          {
                            item.orderStatus=="Placed"?(
                                <div style={{textAlign:'end'}}>
                            <button onClick={()=>{handleCancellation(item.orderId)}} style={{height:'30px',marginTop:'0px'}} className="buy-btn ">Cancel order</button>
                          </div>
                            ):''
                          }
                          </div>
                        </div>
                    )}):<div>
                    <div className="row" style={{marginTop:'50px'}}>
                        <div className="col-md-12">
                            <div style={{display:'flex',textAlign:'center',flexDirection:'column'}} className='d-flex'>
                                <div>
                                <img style={{width:'100px'}} src="https://www.casioindiashop.com/static/images/cart-empty.svg" alt="" />

                                </div>
                                <div>
                                <h6 style={{fontWeight:'800',color:'black'}} className='mt-3'>No orders right now</h6>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   
                    
                }
            </div>
           </div>
        </div>
    </div>
  )
}

export default Viewordersforuser