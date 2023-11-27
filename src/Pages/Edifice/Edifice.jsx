import React, { useEffect, useState } from 'react'
import Edificeheader from './Edificeheader'
import Edificecarousel from './Edificecarousel'
import Userheader2 from '../../Components/Userheader2'
import './edifice.css'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Edifice() {

  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Edifice")
    setProducts(data)

  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      <div>
      <Edificeheader/>
      </div>
      <div>
        <Edificecarousel/>
      </div>
      <div className='sticky-top'>
        <Userheader2/>
      </div>
      <div className="edifice-products">
          <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Edifice