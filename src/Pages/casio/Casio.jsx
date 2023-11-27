import React, { useEffect, useState } from 'react'
import Userheader from '../../Components/Userheader'
import Casiocarousel from './Casiocarousel'
import Userheader2 from '../../Components/Userheader2'
import './casio.css'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Casio() {
  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Casio")
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
        <Casiocarousel/>
      </div>
      <div className='sticky-top'>
         <Userheader2/>
      </div>
      <div className="casio-products">
         <Productcard product={products}/>
      </div>
      
    </div>
  )
}

export default Casio