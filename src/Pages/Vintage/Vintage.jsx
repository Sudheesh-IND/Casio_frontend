import React, { useEffect, useState } from 'react'
import './vintage.css'
import Userheader from '../../Components/Userheader'
import Vintagecarousel from './Vintagecarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Vintage() {
  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Vintage")
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
        <Vintagecarousel/>
      </div>
      <div className="sticky-top">
        <Userheader2/>
      </div>
      <div className="vintage-products">
        <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Vintage