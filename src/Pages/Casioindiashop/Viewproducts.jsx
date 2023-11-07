import React from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { Link, useNavigate } from 'react-router-dom'

function Viewproducts() {

    //state for navigation
    const navigate=useNavigate()

    const toLogin=()=>{
       navigate('/userlogin')
    }
  return (
    <div>
        <div>
            <Casioshopheader/>
        </div>
        <div className="view-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-portion">
                            <img src="https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/L/LT/LTP/ltp-sn1d-2a/assets/LTP-SN1D-2A_1.png.transform/main-visual-pc/image.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-portion">
                            <h6>STANDARD</h6>
                            <h2>LTP-SN1D-2A</h2>
                            <p>MRP</p>
                            <h4>₹ 2,995 (incl. of all taxes)</h4>
                           <button onClick={toLogin} className='buy-btn'>Click to Buy</button>
                            <button className='fav-btn'>Favorite <i class="fa-regular fa-heart ms-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewproducts