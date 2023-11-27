import React, { useEffect, useState } from 'react'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { base_Url } from '../../Services/Api';
import Mainsidebar from './Admincomponents/Mainsidebar';
import { useNavigate } from 'react-router-dom';

function Vieworders() {

  
  const [order, setOrder] = useState([])
  const navigate=useNavigate()

  const handleOrder = async () => {
    const response = await axios.get(`${base_Url}/getallplacedorderforadmin`)
    console.log(response)
    setOrder(response.data)
    console.log(order)
  }

  const handleShipping = async (orderId,expectedDate) => {
    
    if (expectedDate == undefined) {
      alert('Please update date first')
      navigate('/updatedate')
    } else {
      const body = { orderId }
      const response = await axios.post(`${base_Url}/shiporder`, body)
      console.log(response)
      if (response.status >= 200 && response.status <= 399) {
        handleOrder()
      }
    }
  }

  useEffect(() => {
    handleOrder()
  }, [])
  return (
    <div>
    
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Mainsidebar/>
            </div>
            <div className="col-md-10 p-3">
              <MDBTable className='shadow'>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col'>OrderId</th>
                    <th scope='col'>Product Details</th>
                    <th scope='col'>Razorpay Payment Id</th>
                    <th scope='col'>Expected Delivery Date</th>
                    <th scope='col'>Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>

                  {
                    order.length > 0 ? order.reverse().map((item) => {
                      return (
                        <tr>
                          <th scope='row'>{item.orderId}</th>
                          {
                            item.products.map((product) => {
                              return (
                                <>

                                  <tr>

                                    <td>{product.productModel}</td>
                                    <td><img style={{ width: '150px', height: '100px' }} src={product.imageUrl} alt="" /></td>

                                    <td>{product.brand}</td>

                                  </tr>

                                </>
                              )
                            })
                          }
                          <td>{item.paymentDetails[0].razorpay_payment_id}</td>
                          <td>{item.deliveryDate}</td>
                          <td><button onClick={() => { handleShipping(item.orderId,item.deliveryDate) }} className='btn btn-success'>Ship Order</button></td>
                        </tr>
                      )
                    }) : <div>
                      <h4>No orders found</h4>
                    </div>
                  }

                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vieworders