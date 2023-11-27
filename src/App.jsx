
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Userpage from './Pages/Userpage';
import Gshock from './Pages/Gshock/Gshock';
import Babyg from './Pages/Babyg/Babyg';
import Casio from './Pages/casio/Casio';
import Clock from './Pages/Clock/Clock';
import Edifice from './Pages/Edifice/Edifice';
import Enticer from './Pages/Enticer/Enticer';
import Protrek from './Pages/Protrek/Protrek';
import Sheen from './Pages/sheen/Sheen';
import Vintage from './Pages/Vintage/Vintage';
import Youth from './Pages/Youth/Youth';
import Viewproducts from './Pages/Casioindiashop/Viewproducts';
import Login from './Pages/Casioindiashop/Login';
import Register from './Pages/Casioindiashop/Register';
import Usercart from './Pages/Casioindiashop/Usercart';
import Addresspage from './Pages/Casioindiashop/Addresspage';
import Adminlogin from './Pages/Admin/Adminlogin';
import Viewuser from './Pages/Admin/Viewuser';
import Vieworders from './Pages/Admin/Vieworders';
import Addproducts from './Pages/Admin/Addproducts';
import Wishlist from './Pages/Casioindiashop/Wishlist';
import Paymentpage from './Pages/Casioindiashop/Paymentpage';
import Userprofile from './Pages/Casioindiashop/Userprofile';
import Viewordersforuser from './Pages/Casioindiashop/Viewordersforuser';
import Viewadminproducts from './Pages/Admin/Viewadminproducts';
import Shippedorders from './Pages/Admin/Shippedorders';
import Outfordelivery from './Pages/Admin/Outfordelivery';
import Deliveredorder from './Pages/Admin/Deliveredorder';
import Cancelledorder from './Pages/Admin/Cancelledorder';
import Refunded from './Pages/Admin/Refunded';
import Updatedate from './Pages/Admin/Updatedate';
import Trackorder from './Pages/Casioindiashop/Trackorder';
import Viewaddress from './Pages/Casioindiashop/Viewaddress';




function App() {
  return (
    <div className="App">

      <Routes>

        {/* routes for the user pages */}
        <Route path='/' element={<Userpage/>}/>
        <Route path='/gshock' element={<Gshock/>}/>
        <Route path='/babyg' element={<Babyg/>}/>
        <Route path='/casio' element={<Casio/>}/>
        <Route path='/clock' element={<Clock/>}/>
        <Route path='/edifice' element={<Edifice/>}/>
        <Route path='/enticer' element={<Enticer/>}/>
        <Route path='/protrek' element={<Protrek/>}/>
        <Route path='/sheen' element={<Sheen/>}/>
        <Route path='/vintage' element={<Vintage/>}/>
        <Route path='/youth' element={<Youth/>}/>
        <Route path='/viewproduct/:id' element={<Viewproducts/>}/>
        <Route path='/userlogin' element={<Login/>}/>
        <Route path='/userregister' element={<Register/>}/>
        <Route path='/cart/:userId' element={<Usercart/>}/>
        <Route path='/address/:userId' element={<Addresspage/>}/>
        <Route path='/wishlist/:userId' element={<Wishlist/>}/>
        <Route path='/payment/:userId/:orderId' element={<Paymentpage/>}/>
        <Route path='/profile/:userId' element={<Userprofile/>}/>
        <Route path='/viewuserorder/:userId' element={<Viewordersforuser/>}/>
        <Route path='/trackorder/:userId' element={<Trackorder/>}/>
        <Route path='/viewaddress/:userId' element={<Viewaddress/>}/>
        {/* <Route path='/raiseticket/:userId' /> */}


        {/* routes for admin pages */}
        <Route path='/admin' element={<Adminlogin/>}/>
        <Route path='/viewuser' element={<Viewuser/>}/>
        <Route path='/vieworders' element={<Vieworders/>}/>
        <Route path='/viewadminproducts' element={<Viewadminproducts/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/shippedorders' element={<Shippedorders/>}/>
        <Route path='/outfordelivery' element={<Outfordelivery/>}/>
        <Route path='/delivered' element={<Deliveredorder/>}/>
        <Route path='/cancelled' element={<Cancelledorder/>}/>
        <Route path='/refunded' element={<Refunded/>}/>
        <Route path='/updatedate' element={<Updatedate/>}/>
 
      </Routes>

     
    </div>
  );
}

export default App;
