import React, { useEffect, useState } from 'react'
import './summary.css'
import axios from 'axios'
import { base_Url } from '../../../Services/Api'

function Summarypart() {


    const [users,setUsers]=useState(0)
    const [userlength,setUserLength]=useState([])
    const [orderLength,setOrderLength]=useState(0)
    const [shiplength,setShiplength]=useState(0)
    const [delivered,setDelivered]=useState(0)
  
    const handleUsers=async()=>{
      const response=await axios.get(`${base_Url}/getallusers`)
      setUsers(response.data.length)
 
    }

    const handleorders=async()=>{
        const response=await axios.get(`${base_Url}/getorderlength`)
        setOrderLength(response.data.length)
    }

    const handleShipped=async()=>{
        const response = await axios.get(`${base_Url}/shippedorders`)
        setShiplength(response.data.length)
    }

    const handleDelivered=async()=>{
        const response = await axios.get(`${base_Url}/getdelivered`)
        setDelivered(response.data.length)
    }
  
    useEffect(()=>{
      handleUsers()
      handleorders()
      handleShipped()
      handleDelivered()
    },[])
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 p-4">
                    <div className="summary-user shadow">

                        <h2>Total Users</h2>
                        <h4>{users}</h4>

                    </div>
                </div>
                <div className="col-md-3 p-4">
                    <div className="summary-user shadow">
                        <h2>Orders</h2>
                        <h4>{orderLength}</h4>
                    </div>
                </div>
                <div className="col-md-3 p-4">
                    <div className="summary-user shadow">
                        <h2>Shipped</h2>
                        <h4>{shiplength}</h4>
                    </div>
                </div>
                <div className="col-md-3 p-4">
                    <div className="summary-user shadow">
                        <h2>Delivered</h2>
                        <h4>{delivered}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summarypart