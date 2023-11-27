import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './sidebar.css'

function Mainsidebar() {

    const navigate = useNavigate()
    const handleDesign = (id) => {

        const design = document.getElementById(id)
       
            design.style.backgroundColor = 'black'
            design.style.color = 'white'
      

    }

    const adminLogout = () => {
        navigate('/admin')
    }


    return (
        <div>
            <div className="container ">
                <div className="col-md-12" style={{ position: 'relative' }}>
                    <div className='text-center  sidebar' >
                        <div>
                            <img style={{ width: '130px', height: '70px' }} src="https://th.bing.com/th/id/R.60b278f1a2609aa0382cece495b6daba?rik=xtSpc8XOP2cnLg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f12%2fCasio-Logo.png&ehk=173C%2ft1KVe2oXfff%2f8DMJJoCgV43aGELKJn2G0i2PGk%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div>
                            <Link to={'/viewuser'} onClick={() => { handleDesign('viewuser') }}>  <button className='shadow' id='viewuser' >View users</button></Link>
                        </div>
                        <div>
                            <Link to={'/updatedate'}>  <button onClick={() => { handleDesign('deliverydate') }} className='shadow' id='deliverydate' >Add Delivery Date</button></Link>
                        </div>
                        <div>
                            <Link to={'/vieworders'}>  <button onClick={() => { handleDesign('shiporder') }} className='shadow' id='shiporder' >Ship Order</button></Link>
                        </div>

                        <div>
                            <Link to={'/shippedorders'}>  <button onClick={() => { handleDesign('shipped') }} className='shadow' id='shipped' >Shipped Orders</button></Link>
                        </div>
                        <div>
                            <Link to={'/outfordelivery'}>  <button onClick={() => { handleDesign('outfor') }} className='shadow' id='outfor'>Out for delivery</button></Link>
                        </div>
                        <div>
                            <Link to={'/delivered'}>  <button onClick={() => { handleDesign('delivered') }} className='shadow' id='delivered' >Delivered</button></Link>
                        </div>
                        <div>
                            <Link to={'/cancelled'}>  <button onClick={() => { handleDesign('cancelled') }} className='shadow' id='cancelled'>Cancelled</button></Link>
                        </div>
                        <div>
                            <Link to={'/refunded'}>  <button onClick={() => { handleDesign('refunded') }} className='shadow' id='refunded' >Refunded</button></Link>
                        </div>
                        <div>
                            <Link to={'/viewadminproducts'}>  <button onClick={() => { handleDesign('viewpro') }} className='shadow' id='viewpro' >View Products</button></Link>
                        </div>
                        <div>
                            <Link to={'/addproducts'}>  <button onClick={() => { handleDesign('addpro') }} className='shadow' id='addpro' >Add Products</button></Link>
                        </div>
                        <div>
                            <button onClick={adminLogout} className='shadow' id='addpro' >Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainsidebar