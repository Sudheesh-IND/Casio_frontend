import React, { useEffect, useState } from 'react'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { base_Url } from '../../Services/Api';
import Mainsidebar from './Admincomponents/Mainsidebar';

function Deliveredorder() {
    const [order, setOrder] = useState([])

    const handleOrder = async () => {
      const response = await axios.get(`${base_Url}/getdelivered`)
      console.log(response)
      setOrder(response.data)
      console.log(order)
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
                      <th scope='col'>Delivered Address</th>
                      <th scope='col'>Delivered on</th>
                   
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
                            <td>
                                <div>
                                    <h6>{item.address[0].name},{item.address[0].phone}</h6>
                                    <h6>{item.address[0].address},{item.address[0].pincode}</h6>
                                    <h6>{item.address[0].city},{item.address[0].state}</h6>
                              
                                </div>
                            </td>
                            <td>{item.deliveryDate}</td>
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

export default Deliveredorder