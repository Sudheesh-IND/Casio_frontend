import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import { useNavigate, useParams } from 'react-router-dom'
import { doPayment, failed, getOrderDetails, paymentVerification, success } from '../../Services/Api'
import axios from 'axios'


function Paymentpage() {

    const { userId, orderId } = useParams()
    const [rate, setRate] = useState(0)
    const navigate = useNavigate()
    const [paymentDetails, setPaymentDetails] = useState([])

    //fetching order details
    const handlePayment = async () => {

        const { data } = await doPayment(orderId)
        console.log(data)
        paymentInitialization(data)

    }

    const paymentInitialization = (data) => {
        const options = {
            key: 'rzp_test_cLCCtesd9B4FOj',
            amount: data.amount,
            orderId: orderId,
            currency: data.currency,
            order_id: data.id,

            handler: async (body) => {
                try {
                    console.log(body)
                    setPaymentDetails(body)
                    const response = await axios.post(`http://localhost:5000/verifypayment`, body)
                   
                  
                  
                    console.log(paymentDetails)
                    if (response.status >= 200 && response.status <= 399) {
                        const paymentSuccess = await success(orderId, body)
                        if (paymentSuccess.status >= 200 && paymentSuccess.status <= 399) {
                            alert('Order placed successfully')
                            navigate('/viewuserorder/'+userId)
                        }
                    } else {
                        const paymentFailed = await failed(orderId)
                        if (paymentFailed.status > 200) {
                            alert('Something went wrong')
                            navigate('/')
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay(options)
        rzp1.open()
    }

    const handleOrderDetails = async () => {
        const { data } = await getOrderDetails(orderId)
        setRate(data.rate)
        console.log(rate)
    }

    useEffect(() => {
        handleOrderDetails()
    }, [])

    return (
        <div>
            <div>
                <Casioshopheader />
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className='text-center' style={{ height: '100vh', marginTop: '200px' }}>
                                <button className='btn btn-primary' style={{width:'200px'}} onClick={handlePayment}>Go to payment</button>
                            </div>

                        </div>

                        <div className="col-md-4" style={{ paddingTop: '70px' }}>
                            <div className="price-portion mt-2">
                                <h6 style={{ color: 'black', fontWeight: '800' }}>Price details</h6>
                                <div className='mt-3' >
                                    <div className='price-portion-sub'>
                                        <div>
                                            <p>MRP</p>

                                        </div>
                                        <div>
                                            <p>{rate }</p>
                                        </div>
                                    </div>

                                    <div className='price-portion-sub'>
                                        <div>
                                            <p>Selling price</p>

                                        </div>
                                        <div>
                                            <p>{rate }</p>
                                        </div>
                                    </div>

                                    {/* <div className='price-portion-sub'>
                                        <div>
                                            <p>Taxable value</p>

                                        </div>
                                        <div>
                                            <p>{ }</p>
                                        </div>
                                    </div>

                                    <div className='price-portion-sub'>
                                        <div>
                                            <p>Tax</p>

                                        </div>
                                        <div>
                                            <p>{ }</p>
                                        </div>
                                    </div> */}


                                </div>
                                <hr />
                                <div >
                                    <div className='price-portion-sub'>
                                        <div>
                                            <h6 style={{ color: 'black', fontWeight: '800' }}>Net payable</h6>

                                        </div>
                                        <div>
                                            <h6 style={{ color: 'black', fontWeight: '800' }}>{rate }</h6>
                                        </div>
                                    </div>



                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Paymentpage