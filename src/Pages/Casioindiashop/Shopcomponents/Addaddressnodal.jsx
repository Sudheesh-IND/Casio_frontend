import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../casioindia.css'
import {  addAddressApi } from '../../../Services/Api';
import { useParams } from 'react-router-dom';

function Addaddressnodal() {
   
    const [show, setShow] = useState(false);
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [pincode,setPincode]=useState('')
    const [phone,setPhone]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const {userId}=useParams()
    const [load,setLoad]=useState(false)
    console.log(userId)
    console.log(name,address,pincode,phone,city,state,userId)

  const handleClose = () =>{
     setShow(false)
     setLoad(true)
    };
  const handleShow = () => setShow(true);

  const handleAddress=async()=>{
     const response=await addAddressApi(name,address,pincode,phone,city,state,userId)
     console.log(response)
     if(response.status>=200 && response.status<=399){
        handleClose()
        setAddress('')
        setName('')
        setPhone('')
        setPincode('')
     }
  }
  return (
    <div>
    
    <button onClick={handleShow} style={{width:'250px'}} className="fav-btn">Add Address</button>

     <div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  closeButton>
        <h6  style={{color:'black',fontWeight:'800'}}>Address details</h6>
        </Modal.Header>
        <Modal.Body>
           <label className='mt-2' htmlFor="">Name*</label>
           <input onChange={(e)=>{setName(e.target.value)}} placeholder='Name' className='form-control ' type="text" />
           <label className='mt-3' htmlFor="">Address*</label>
           <input  onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address' className='form-control ' type="text" />
           <label className='mt-3' htmlFor="">Pincode*</label>
           <input  onChange={(e)=>{setPincode(e.target.value)}} placeholder='pincode' className='form-control ' type="number" />
           <label className='mt-3' htmlFor="">Phone*</label>
           <input  onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone number' className='form-control ' type="number" />
           <label className='mt-3' htmlFor="">City*</label>
           <select  onChange={(e)=>{setCity(e.target.value)}} name="" id="" className='form-control'>
            <option selected disabled value="">City</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="">Kochi</option>
           </select>
           <label className='mt-3' htmlFor="">State*</label>
           <select  onChange={(e)=>{setState(e.target.value)}} name="" id="" className='form-control'>
            <option selected disabled value="">State</option>
            <option value="Thiruvananthapuram">Kerala</option>
            <option value="">Tamilnadu</option>
            <option value="">Karnataka</option>
           </select>

           <div className='text-center'>
           <button onClick={()=>{handleAddress()}} style={{width:'150px',height:'40px'}} type='button' className='buy-btn'>Submit</button>
           </div>

        </Modal.Body>
       
      </Modal>
     </div>

    
        
    </div>
  )
}

export default Addaddressnodal