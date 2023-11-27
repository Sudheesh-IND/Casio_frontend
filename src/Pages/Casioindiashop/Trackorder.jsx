import React, { useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import Profilesidebar from './Shopcomponents/Profilesidebar'
import { base_Url } from '../../Services/Api'
import axios from 'axios'

function Trackorder() {

  const [orderId, setOrderId] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [isTracked, setIstracked] = useState(false)
  const [incorrect,seIncorrect]=useState(false)

  const handleTrack = async () => {
    const response = await axios.get(`${base_Url}/trackorder/${orderId}`)
    if (response.status ==200) {
      setIstracked(true)
      setOrderStatus(response.data)
    } else {
        seIncorrect(true)
        setOrderStatus('Not Found')
    }


  }
  return (
    <div>
      <div>
        <Casioshopheader />
      </div>
      <div className="container" style={{ padding: '100px' }}>
        <div className="row">
          <div className="col-md-3">
            <Profilesidebar />
          </div>
          <div className="col-md-9">
            <h2 style={{ color: 'black', fontWeight: '700' }}>Track Order</h2>
            <div style={{ padding: '50px' }}>
              <div className='p-4 border'>
                <p style={{ textAlign: 'center', fontWeight: '700' }}>Get updates about your order status</p>
                <label className='mt-3' htmlFor="">Order ID</label>
                <input onChange={(e) => { setOrderId(e.target.value) }} placeholder='Order ID' className='form-control mt-3' type="text" />
                <div className='text-center'>
                  {
                    incorrect?(
                      <p className='text-center mt-4'>Order Id Not Found</p>
                    ):''
                  }
                  <button onClick={handleTrack} style={{ width: '150px', height: '40px' }} className='buy-btn'>
                    Track
                  </button>
                </div>
              </div>
              {
                isTracked ? (
                  <div className='p-5 mt-2 text-center border'>
                    <h5 style={{ color: 'black' }}>Order Status: {orderStatus.orderStatus}</h5>
                    <h5 style={{ color: 'black' }}>Delivery Date: {orderStatus.deliveryDate}</h5>
                  </div>
                ) : ''

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trackorder