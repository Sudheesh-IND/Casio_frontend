import React, { useEffect, useState } from 'react'
import Userheader from '../Components/Userheader'
import Usercarousel1 from '../Components/Usercarousel1'
import Userheader2 from '../Components/Userheader2'
import './Userside.css'
import Productcard from '../Components/Productcard'
import { getAllProduct } from '../Services/Api'

function Userpage() {

  const [products,setProducts]=useState([])

  const getALLProducts=async()=>{
    const {data}= await getAllProduct()
   

    setProducts(data)
  }

  useEffect(()=>{
    getALLProducts()
  },[])
  return (
    <div>
        <div>
        <Userheader/>
        </div>
        <div>
          <Usercarousel1/>
        </div>
        <div className='sticky-top'>
          <Userheader2/>
        </div>
        <div className='products-portion-casio1'>
           <Productcard product={products}/>
        </div>

    </div>
  )
}

export default Userpage