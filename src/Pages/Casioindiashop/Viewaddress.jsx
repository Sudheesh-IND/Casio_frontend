import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import Profilesidebar from './Shopcomponents/Profilesidebar'
import { useParams } from 'react-router-dom'
import { getAddress } from '../../Services/Api'
import Addaddressnodal from './Shopcomponents/Addaddressnodal'

function Viewaddress() {

  const { userId } = useParams()
  const [address, setAddress] = useState([])

  const handleAddress = async () => {
    const response = await getAddress(userId)
    setAddress(response.data)
    console.log(address)

  }


  useEffect(() => {
    handleAddress()
  }, [])
  return (
    <div>
      <div>
        <Casioshopheader />
      </div>
      <div className="container" style={{padding:'100px'}}>
        <div className="row">
          <div className="col-md-3">
            <Profilesidebar />
          </div>
          <div className="col-md-9">
            <h2 style={{ color: 'black', fontWeight: '700' }}>My Address</h2>
            <div style={{ padding: '50px' }}>
              {
                address.length > 0 ? address.map((item) => (
                  <div className='border p-3 mt-2'>
                     <h4 style={{color:'black',fontWeight:'700'}}>{item.name}</h4>
                     <h6>{item.address},{item.pincode}</h6>
                     <h6>{item.city}</h6>
                     <h6>{item.phone}</h6>
                  </div>
                )) : ''
              }

            </div>
            <div className='text-center'>
                  <Addaddressnodal/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewaddress