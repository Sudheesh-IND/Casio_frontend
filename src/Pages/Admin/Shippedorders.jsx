import React, { useEffect, useState } from 'react'
import Adminsidebar from './Admincomponents/Adminsidebar'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { base_Url } from '../../Services/Api';
import Mainsidebar from './Admincomponents/Mainsidebar';

function Shippedorders() {
  
  const [order, setOrder] = useState([])

  const handleOrder = async () => {
    const response = await axios.get(`${base_Url}/shippedorders`)
    console.log(response)
    setOrder(response.data)
    console.log(order)
  }

  const handleOutForDelivery = async (orderId) => {
    const body = { orderId}
    const response = await axios.post(`${base_Url}/outfordelivery`, body)
    console.log(response)
    if (response.status >= 200 && response.status <= 399) {
      handleOrder()
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
                   
                    <th scope='col'>Expected Date</th>
                    <th scope='col'>Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>

                  {
                    order.length > 0 ? order.map((item) => {
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
                          <td><button onClick={() => { handleOutForDelivery(item.orderId, item.deliveryDate) }} className='btn btn-success'>Out for delivery</button></td>
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

export default Shippedorders