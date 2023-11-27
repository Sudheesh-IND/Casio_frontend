import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { getWishlist } from '../../../Services/Api';

function Casioshopheader() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const userId=useParams()
 const [wishLength,setWishlength]=useState([])


  const toCart = () => {

    const userId = localStorage.getItem('userId')

    if (userId) {
      navigate(`/cart/${userId}`)
    } else {
      navigate('/userlogin')
    }
  }

  const getUsername = async () => {
    const user = localStorage.getItem('name')
    setUsername(user)
  }

  const handleWishlist=async()=>{
    const response=await getWishlist(userId)
    setWishlength(response.data)
    console.log(response)
  }

  const toWishlist = () => {
    const userId = localStorage.getItem('userId')

    if (userId) {
      navigate(`/wishlist/${userId}`)
    } else {
      navigate('/userlogin')
    }
  }

  const trackOrder = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      navigate(`/trackorder/${userId}`)
    } else {
      navigate('/userlogin')
    }
  }


  const toProfile = () => {
    const userId = localStorage.getItem('userId')

    if (userId) {
      navigate(`/profile/${userId}`)
    } else {
      navigate('/userlogin')
    }
  }


  useEffect(() => {
    getUsername()
    handleWishlist()
  },[])
  return (
    <div>
      <MDBNavbar className='shadow-0'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://www.casioindiashop.com/static/images/casio-logo.png'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>


          <div className='ms-auto'>
            <span onClick={trackOrder} style={{ cursor: 'pointer' }}><i class="fa-solid fa-box-open m-3"></i></span>
            <span onClick={toProfile} style={{ cursor: 'pointer' }}><i class="fa-solid fa-user m-3" ></i><span style={{ color: 'black', fontWeight: '700' }}>{username}</span></span>
            <span onClick={toWishlist} style={{ cursor: 'pointer' }}><i class="fa-regular fa-heart m-3">
            {/* <MDBBadge color='primary'  pill className='position-absolute translate-middle me-2'>
                {wishLength.length}
                <span class="visually-hidden">unread messages</span>
              </MDBBadge> */}
            </i>
           
            
            </span>
            <span onClick={toCart} style={{ cursor: 'pointer' }}><i class="fa-solid fa-cart-shopping m-3">
            {/* <MDBBadge color='primary'  pill className='position-absolute translate-middle'>
                {}
                <span class="visually-hidden">unread messages</span>
              </MDBBadge> */}
              </i></span>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Casioshopheader