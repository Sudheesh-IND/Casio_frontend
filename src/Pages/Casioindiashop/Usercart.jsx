import React from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'

function Usercart() {
  return (
    <div>
        <div>
            <Casioshopheader/>
        </div>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 p-4">
                        <div className="row cart-products">
                           <div className="col-md-4">
                              <div className="cart-image">
                                <img src="https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/A1/A16/a168wa-5ay/assets/A168WA-5AY.png.transform/product-panel/image.png" alt="" />
                              </div>
                           </div>
                           <div className="col-md-8">
                               <div className="cart-details">
                                
                               </div>
                           </div>
                        </div>

                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Usercart