import axios from 'axios'

export const base_Url='http://localhost:5000'


//adding product from admin side
export const addProduct=async(productModel,price,imageUrl,brand)=>{

   const body={
       productModel,price,imageUrl,brand
    }

    const response=await axios.post(`${base_Url}/addproduct`,body)
    return response

}

//viewing product through user side
export const getAllProduct=async()=>{
    const response=await axios.get(`${base_Url}/getproducts`)
    return response
}

//view particular product
export const viewParticular=async(id)=>{
    const response=await axios.get(`${base_Url}/getparticular/${id}`)
    return response
}

//get products by brand name
export const byBrand=async(brand)=>{
    
    const response=await axios.get(`${base_Url}/getbybrand/${brand}`)
    return response
}

//register user
export const userRegister=async(name,email,password)=>{
       const body={
        name,email,password
       }

       try {

       const response=await axios.post(`${base_Url}/registeruser`,body)
       return response
        
       } catch (error) {
        
        return error
       }
}

//login api call
export const userLogin=async(email,password)=>{

    const body={email,password}

    try {

        const response=await axios.post(`${base_Url}/userlogin`,body)
        return response
        
    } catch (error) {

        return error
        
    }


}

//adding products  to cart
export const addToCart=async(productModel,brand,imageUrl,price,userId,productId,count)=>{

    const body={productModel,brand,imageUrl,price,userId,productId,count}
    try {

        const response=await axios.post(`${base_Url}/addtocart`,body)
        return response
        
    } catch (error) {
        
        return error
    }
}

//get cart products
export const getCart=async(userId)=>{

    const response=await axios.get(`${base_Url}/getcartproducts/${userId}`)
    return response
}

//cart increment
export const cartIncrement=async(cartId,userId)=>{
    try {

        const response=await axios.get(`${base_Url}/increment/${cartId}/${userId}`)
    
        return response
        
    } catch (error) {
        return error
    }
}

//cart decrement
export const cartDecrement=async(cartId,userId)=>{
    try {

        const response=await axios.get(`${base_Url}/decrement/${cartId}/${userId}`)
    
        return response
        
    } catch (error) {
        return error
    }
}

//removing an item from cart
export const removeCart=async(cartId,userId)=>{
    try {

        const response=await axios.delete(`${base_Url}/removefromcart/${userId}/${cartId}`)
    
        return response
        
    } catch (error) {
        return error
    }
}

//adding product to wishlist
export const addToUserWishlist=async(productModel,brand,imageUrl,price,userId,productId)=>{

    const body={productModel,brand,imageUrl,price,userId,productId}
    try {

        const response=await axios.post(`${base_Url}/addtowishlist`,body)
        return response
        
    } catch (error) {
        
        return error
    }
}

//get wishlist products
export const getWishlist=async(userId)=>{
    try {
        
        const response=await axios.get(`${base_Url}/getwishlist/${userId}`)
        return response
    } catch (error) {
        return error
        
    }
}

//add address
export const addAddressApi=async(name,address,pincode,phone,city,state,userId)=>{

    const body={name,address,pincode,phone,city,state,userId}
    try {

        const response=await axios.post(`${base_Url}/addaddress`,body)
        return response
        
    } catch (error) {
        
        return error
    }

}

//get address
export const getAddress=async(userId)=>{
    try {
        
        const response=await axios.get(`${base_Url}/getaddress/${userId}`)
        return response
    } catch (error) {
        return error
        
    }
}

//deleting an address
export const deleteaddress=async(userId,addressId)=>{
    try {
        
        const response=await axios.get(`${base_Url}/deleteaddress/${userId}/${addressId}`)
        return response
    } catch (error) {
        return error
        
    }
}

//uploading an order
export const uploadOrder=async(userId,orderId,products,address,orderStatus,rate)=>{

    const body={userId,orderId,products,address,orderStatus,rate}

    try {

        const response=await axios.post(`${base_Url}/addorder`,body)
        return response
        
    } catch (error) {
        return error
    }
}

//getting the order details
export const getOrderDetails=async(orderId)=>{
    try {
        
        const response=await axios.get(`${base_Url}/getorderdetails/${orderId}`)
        return response
    } catch (error) {
        return error
        
    }
}

//for doing payment
export const doPayment=async(orderId)=>{

    const body={orderId}
    console.log('Inside payment')
   
        try {

            const response=await axios.post(`${base_Url}/dopayment`,body)
            return response
            
        } catch (error) {
            return error
        }
        
    
}

//payment success
export const success=async(orderId,paymentDetails)=>{
    const body={orderId,paymentDetails}
    try {

        const response=await axios.post(`${base_Url}/success`,body)
        return response
        
    } catch (error) {
        return error
    }
}

//payment failed status
export const failed=async(orderId)=>{
    try {
        
        const response=await axios.get(`${base_Url}/failed/${orderId}`)
        return response
    } catch (error) {
        return error
        
    }
}

