import React, { useEffect,useState } from 'react'
import Adminheader from './Admincomponents/Adminheader'
import Adminsidebar from './Admincomponents/Adminsidebar'
import Summarypart from './Admincomponents/Summarypart'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { base_Url, getAllProduct } from '../../Services/Api';
import './adminpage.css'
import Mainsidebar from './Admincomponents/Mainsidebar';
import axios from 'axios';

function Viewadminproducts() {

  const [products,setProducts]=useState([])

  const handleProducts=async()=>{
    const response=await getAllProduct()
    setProducts(response.data)
  }

  const handleDelete=async(id)=>{
  const response=await axios.delete(`${base_Url}/deleteproduct/${id}`)
  handleProducts()
  }

  useEffect(()=>{
    handleProducts()
  },[])
  return (
    <div>
      
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">
            <Mainsidebar/>
            </div>
          <div className="col-md-10 p-3">
            <MDBTable className='shadow'>
              <MDBTableHead dark>
                <tr >
                  <th scope='col'>Image</th>
                  <th scope='col'>Product Model</th>
                  <th scope='col'>Brand</th>
                  <th scope='col'>Price</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                
                {
                  products.length>0? products.map((item)=>(
                  <tr className='pro-table'>
                  <th scope='row'><img style={{width:'150px',height:'100px'}} src={item.imageUrl} alt="" /></th>
                  <td>{item.productModel}</td>
                  <td>{item.brand}</td>
                  <td>{item.price}</td>
                  <td>
                  
                    <button onClick={()=>{handleDelete(item._id)}} className='btn btn-danger m-1'>Delete</button>
                  </td>
                 </tr>
                  )):<div className='text-center'>
                    <h4>No products Found</h4>
                  </div>
                }
                
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewadminproducts