import React, { useEffect, useState } from 'react'
import Casioshopheader from './Shopcomponents/Casioshopheader'
import './casioindia.css'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteaddress, getAddress, getCart, uploadOrder } from '../../Services/Api'
import Addaddressnodal from './Shopcomponents/Addaddressnodal'

function Addresspage() {


  const { userId } = useParams()
  const [selling, setSelling] = useState(0)
  const [amount, setAmount] = useState([])
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)
  const [addressDetails, setAddressDetails] = useState([])
  const [name, setName] = useState('')
  const [address1, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [id, setId] = useState('')
  
  const [product, setProduct] = useState([])
  const [address, setAddress1] = useState([])
  const [orderStatus, setOrderStatus] = useState('Payment not done')
  const [rate, setRate] = useState()
 
  const navigate=useNavigate()


  const handleTotalCost = async () => {


    const { data } = await getCart(userId)

    if(data.length>1){
      setAmount(data.reduce((a, b) => a.grandTotal + b.grandTotal))
    }else{
      setAmount(data[0].grandTotal)
    }
   
    setProduct(data)
    
    setSelling(amount)
    // setTax(selling * (18 / 100))
    // var tax=selling * (18 / 100)
    // setTotal(selling + tax)
    // var total=selling + tax
    setRate(amount)
  }

  const handleAddress = async () => {
    const { data } = await getAddress(userId)
    setAddressDetails(data)

  }

  const orderAddress = (name, address1, pincode, phone, city, state, _id) => {
    
    var check = document.getElementById(`${_id}`)

    if (id != '' && id != _id) {
      var checking = document.getElementById(`${id}`)
      checking.style.color = 'white'

      if (name != name) {

        check.style.color = 'black'
        setName(name)
        setAddress(address1)
        setPincode(pincode)
        setPhone(phone)
        setCity(city)
        setState(state)
        setId(_id)
        setAddress1({ name: name, address: address1, pincode: pincode, phone: phone, city: city, state: state })


      }
    } else if (id == '' || id == _id) {
      check.style.color = 'black'
      setName(name)
      setAddress(address1)
      setPincode(pincode)
      setPhone(phone)
      setCity(city)
      setState(state)
      setId(_id)
      setAddress1({ name: name, address: address1, pincode: pincode, phone: phone, city: city, state: state })


    }




  }

  //handling address delete
  const handleDeleteAddress = async (addressId) => {
    const response = await deleteaddress(userId, addressId)
    setAddressDetails([])
    setAddressDetails(response.data)
  }

  //handling order
  const handleOrder = async () => {
    var orderId=Math.floor(Math.random() * 999999999999549)
   
    console.log(userId, orderId, product, address, orderStatus, rate)
    if(name!=''){
      
      const response = await uploadOrder(userId, orderId, product, address, orderStatus, amount)
      console.log(response)
      if (response.status >= 200 && response.status <= 399) {
        navigate(`/payment/${userId}/${orderId}`)
        
      }
     
    }else{
      alert('Please select address')
    }

  }

  useEffect(() => {
    handleTotalCost()
    handleAddress()

  }, [])
  return (
    <div>
      <div>
        <Casioshopheader />
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8" style={{ padding: '70px' }}>
              {
                addressDetails.length > 0 ? addressDetails.map((item) => (
                  <div className="border address-portion mt-2">
                    <div className="d-flex flex-row ">
                      <div>
                        <h5 style={{ color: 'black', fontWeight: '800' }}>{item.name}</h5>
                      </div>
                      <div className='ms-auto'>
                        {/* <input  id={item._id} onClick={()=>{orderAddress(item.name,item.address,item.pincode,item.phone,
                            item.city,item.state,item._id)}} type="checkbox" /> */}
                        <div className='d-flex text-align-center justify-content-center' onClick={() => {
                          orderAddress(item.name, item.address, item.pincode, item.phone,
                            item.city, item.state, item._id)
                        }} style={{ width: '20px', height: '20px', border: '1px solid black', backgroundColor: 'white', cursor: 'pointer' }}>
                          <i className='tick' id={item._id} class="fa-solid fa-check"></i>
                        </div>
                      </div>
                    </div>
                    <p>{item.address}</p>
                    <p>{item.phone}</p>
                    {/* <button style={{width:'60px',height:'30px'}} className='buy-btn mt-2'><i class="fa-solid fa-pen-to-square"></i></button> */}
                    <button onClick={() => { handleDeleteAddress(item._id) }} style={{ width: '60px', height: '30px' }} className='buy-btn mt-2 ms-2'><i class="fa-solid fa-trash"></i></button>

                  </div>
                )) : ''
              }
              <div className='text-center'>
                <Addaddressnodal />
              </div>
            </div>
            <div className="col-md-4" style={{ paddingTop: '70px' }}>
              <div className="border price-portion mt-2">
                <h6 style={{ color: 'black', fontWeight: '800' }}>Price details</h6>
                <div className='mt-3' >
                  <div className='price-portion-sub'>
                    <div>
                      <p>MRP</p>

                    </div>
                    <div>
                      <p>{amount}</p>
                    </div>
                  </div>

                  <div className='price-portion-sub'>
                    <div>
                      <p>Selling price</p>

                    </div>
                    <div>
                      <p>{amount}</p>
                    </div>
                  </div>

                  {/* <div className='price-portion-sub'>
                    <div>
                      <p>Taxable value</p>

                    </div>
                    <div>
                      <p>{selling}</p>
                    </div>
                  </div>

                  <div className='price-portion-sub'>
                    <div>
                      <p>Tax</p>

                    </div>
                    <div>
                      <p>{tax}</p>
                    </div>
                  </div> */}

              
                </div>
                <hr />
                <div >
                  <div className=' price-portion-sub'>
                    <div>
                      <h6 style={{ color: 'black', fontWeight: '800' }}>Net payable</h6>

                    </div>
                    <div>
                      <h6 style={{ color: 'black', fontWeight: '800' }}>{amount}</h6>
                    </div>
                  </div>



                </div>
              </div>

              {
                product.map((item) => (
                  <div className="summary mt-2">

                    <div className="row">
                      <div className='product-image col-md-3'>
                        <img src={item.imageUrl} alt="" />
                      </div>
                      <div className='col-md-9 '>
                        <h4 style={{ color: 'black', fontWeight: '700', fontSize: '1.3rem', letterSpacing: '2px' }}>{item.productModel}</h4>
                        <h6 style={{ color: 'black', fontWeight: '700' }}>{item.price}</h6>
                      </div>
                    </div>

                  </div>
                ))
              }

              <div className='text-center'>
                <button onClick={()=>{handleOrder()}} style={{ width: '250px', fontSize: '1rem', fontWeight: '800' }} className='buy-btn'>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addresspage