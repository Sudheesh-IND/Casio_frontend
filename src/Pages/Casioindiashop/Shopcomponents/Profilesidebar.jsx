import React from 'react'
import './usersidebar.css'
import { Link, useParams } from 'react-router-dom'

function Profilesidebar() {

    const {userId}=useParams()
  return (
    <div>
        <div className="container" >
            <div className="col-md-12 user-sidebar" >
                <div>
                    <br />
                   <Link to={`/profile/${userId}`}> <a href="">Overview</a></Link> <br /> <br />
                   <Link to={`/viewuserorder/${userId}`}> <a  href="">My Orders</a></Link> <br /> <br />
                    <Link to={`/cart/${userId}`}><a  href="">Cart</a></Link> <br /> <br />
                    <Link to={`/wishlist/${userId}`}><a href="">Wishlist</a></Link> <br /> <br />
                    <Link to={`/viewaddress/${userId}`}><a href="">Address</a></Link> <br /> <br />
                    {/* <Link><a href="">Raise a ticket</a></Link> <br /> <br />
                    <Link><a href="">My ticket</a></Link> <br /> <br /> */}
                     <Link to={`/trackorder/${userId}`}><a href="">Track Order</a></Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profilesidebar