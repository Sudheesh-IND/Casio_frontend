import React, { useEffect, useState } from 'react'
import Userheader from '../../Components/Userheader'
import './youth.css'
import Youthcarousel from './Youthcarousel'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Youth() {

  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Youth")
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
        <Youthcarousel/>
      </div>
      <div className="sticky-top">
        <Userheader2/>
      </div>
      <div className="youth-products">
        <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Youth