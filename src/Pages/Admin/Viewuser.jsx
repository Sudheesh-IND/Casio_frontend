import React, { useEffect, useState } from 'react'

import Summarypart from './Admincomponents/Summarypart'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { base_Url } from '../../Services/Api';
import Mainsidebar from './Admincomponents/Mainsidebar';

function Viewuser() {

  const [users,setUsers]=useState([])
  const [userlength,setUserLength]=useState([])

  const handleUsers=async(req,res)=>{
    const response=await axios.get(`${base_Url}/getallusers`)
    setUsers(response.data)
  }

  const handleDeletion=async(userId)=>{
        
    const response=await axios.delete(`${base_Url}/deleteuser/${userId}`)
    console.log(response)
     handleUsers()
    
  }


  useEffect(()=>{
    handleUsers()
  })
  return (
    <div>
     
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Mainsidebar/>
          </div>
          <div className="col-md-10 p-4">
          <div>
        <Summarypart />
      </div>
            <MDBTable className='shadow'>
              <MDBTableHead dark>
                <tr>
                  <th scope='col'>UserId</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {
                users.length>0? users.map((item)=>(
                  <tr>
                  <th scope='row'>{item._id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td><button  onDoubleClick={()=>handleDeletion(item._id)} className='btn btn-danger'>Remove User</button></td>
                </tr>
                )):<div className='text-center'>
                  <h2>No users found</h2>
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

export default Viewuser