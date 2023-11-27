import React, { useEffect, useState } from 'react'
import Userheader from '../../Components/Userheader'
import Enticercarousel from './Enticercarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Enticer() {

  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Enticer")
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
        <Enticercarousel/>
      </div>
      <div className='sticky-top'>
         <Userheader2/>
      </div>
      <div className="enticer-products">
        <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Enticer