import React, { useEffect, useState } from 'react'
import Userheader from '../../Components/Userheader'
import Clockcarousel from './Clockcarousel'
import Userheader2 from '../../Components/Userheader2'
import './clock.css'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Clock() {

  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Clock")
    setProducts(data)

  }
  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>
      <div>
        <Userheader/>
      </div>
      <div>
        <Clockcarousel/>
      </div>
      <div className='sticky-top'>
         <Userheader2/>  
      </div>
      <div className="clock-products">
        <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Clock