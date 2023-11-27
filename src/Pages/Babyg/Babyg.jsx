import React, { useEffect, useState } from 'react'
import Babyheader from './Babyheader'
import Babycarousell from './Babycarousell'
import Userheader2 from '../../Components/Userheader2'
import Productcard from '../../Components/Productcard'
import { byBrand } from '../../Services/Api'


function Babyg() {

 
  const [products,setProducts]=useState([])

  const getProduct=async()=>{
    
    const {data}=await byBrand("Baby-G")
    setProducts(data)

  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
       <div>
       <Babyheader/>
       </div>
       <div>
       <Babycarousell/>
       </div>
       <div className='sticky-top' >
           <Userheader2/>
       </div>
       <div className="baby-products">
              <Productcard product={products}/>
       </div>
    </div>
  )
}

export default Babyg