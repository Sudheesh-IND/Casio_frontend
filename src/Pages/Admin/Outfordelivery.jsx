import React, { useEffect, useState } from 'react'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { base_Url } from '../../Services/Api';
import Mainsidebar from './Admincomponents/Mainsidebar';

function Outfordelivery() {
   
    const [order, setOrder] = useState([])

    const handleOrder = async () => {
      const response = await axios.get(`${base_Url}/getoutfordelivery`)
      console.log(response)
      setOrder(response.data)
      console.log(order)
    }
  
    const handleDelivered = async (orderId) => {
      const body = { orderId}
      const response = await axios.post(`${base_Url}/delivered`, body)
      console.log(response)
      if (response.status >= 200 && response.status <= 399) {
        setOrder([])
        setOrder(response.data)
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
                      <th scope='col'>Address</th>
                      <th scope='col'>Delivery Date</th>
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
                            <td>
                                <div>
                                    <h6>{item.address[0].name},{item.address[0].phone}</h6>
                                    <h6>{item.address[0].address},{item.address[0].pincode}</h6>
                                    <h6>{item.address[0].city},{item.address[0].state}</h6>
                              
                                </div>
                            </td>
                            <td>{item.deliveryDate}</td>
                            <td><button onClick={() => { handleDelivered(item.orderId, item.deliveryDate) }} className='btn btn-success'>Deliver Order</button></td>
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

export default Outfordelivery