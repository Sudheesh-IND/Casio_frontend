import React, { useEffect, useState } from 'react'
import Gshockheader from './Gshockheader'
import Gshockcarousel from './Gshockcarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'



function Gshock() {
    const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("G-Shock")
    setProducts(data)

  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
        <div>
            <Gshockheader/>
        </div>
        <div >
            <Gshockcarousel/>
        </div>
        <div className='sticky-top'>
            <Userheader2/>
        </div>
        <div className="product-portion">
            <Productcard product={products}/>
        </div>
    </div>
  )
}

export default Gshock