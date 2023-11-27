import React, { useEffect, useState } from 'react'
import Sheenheader from './Sheenheader'
import Sheencarousel from './Sheencarousel'
import Userheader2 from '../../Components/Userheader2'
import './sheen.css'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'



function Sheen() {
  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Sheen")
    setProducts(data)

  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      <div>
      <Sheenheader/>
      </div>
      <div>
        <Sheencarousel/>
      </div>
      <div className="sticky-top">
        <Userheader2/>
      </div>
      <div className="sheen-products">
        <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Sheen