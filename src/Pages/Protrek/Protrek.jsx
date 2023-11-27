import React, { useEffect, useState } from 'react'
import Protrekheader from './Protrekheader'
import Pretrekcarousell from './Pretrekcarousell'
import Userheader2 from '../../Components/Userheader2'
import './protrek.css'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Protrek() {
  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Pro-trek")
    setProducts(data)

  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      <div>
        <Protrekheader/>
      </div>
      <div>
        <Pretrekcarousell/>
      </div>
      <div className='sticky-top'>
        <Userheader2/>
      </div>
      <div className="trek-products">
            <Productcard product={products}/>
      </div>
    </div>
  )
}

export default Protrek
