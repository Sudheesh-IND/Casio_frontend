import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Adminheader from './Admincomponents/Adminheader'
import { addProduct } from '../../Services/Api'
import Mainsidebar from './Admincomponents/Mainsidebar'



function Addproducts() {

   const [body,setBody]=useState({})
   const [productModel,setProductModel]=useState('')
   const [price,setPrice]=useState()
   const [imageUrl,setImageUrl]=useState('')
   const [brand,setBrand]=useState('')

  const uploadProduct=async()=>{
       
   const response=await addProduct(productModel,price,imageUrl,brand)
   if(response){
      alert('successfully uploaded')
      console.log(response)
      setProductModel('')
      setPrice()
      setBrand('')
      setImageUrl('')
   }
  }

 
  return (
    <div>
      
       <div>
       <div className="login-part">
       <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
              <Mainsidebar/>
            </div>
            <div className="col-md-10 mt-3" style={{paddingLeft:'150px',paddingRight:'150px'}}>
                 <div className="border form-part mt-5">
                    {/* <h4>Please enter following details</h4> */}
                    <form action="">
                    <label className='text-start' htmlFor="">Product Model*</label>
                       
                       <input value={productModel} onChange={(e)=>{setProductModel(e.target.value)}}  placeholder='Product Model' className='form-control' type="text" />
                      
                       <label style={{marginTop:'40px'}}  className='text-start' htmlFor="">Price*</label>
                       
                        <input value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Price' className='form-control' type="text" />

                        <label style={{marginTop:'40px'}} className='text-start' htmlFor="">Image Url*</label>
                       
                        <input value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}} placeholder='Image Url' className='form-control' type="text" />
                        <label style={{marginTop:'40px'}}  className='text-start' htmlFor="">Brand*</label>


                        <select value={brand} onChange={(e)=>{setBrand(e.target.value)}}  className='form-control' name="" id="">
                           <option selected disabled value="">Select brand</option>
                           <option value="Casio">Casio</option>
                           <option value="G-Shock">G-shock</option>
                           <option value="Edifice">Edifice</option>
                           <option value="Sheen">Sheen</option>
                           <option value="Pro-trek">Pro-trek</option>
                           <option value="Baby-G">Baby-G</option>
                           <option value="Youth">Youth</option>
                           <option value="Enticer">Enticer</option>
                           <option value="Vintage">Vintage</option>
                           <option value="Clock">Clock</option>
                        </select>
                        <div style={{width:'100%',textAlign:'center'}}>
                        <button onClick={()=>{uploadProduct()}} style={{width:'300px',marginTop:'40px'}} type='button' className="buy-btn">Submit</button>
                        </div>
                    </form>
                 </div>
                  
                 
            </div>
            <div className="col-md-3"></div>
        </div>
       </div>
    </div>
       </div>
    </div>
  )
}

export default Addproducts