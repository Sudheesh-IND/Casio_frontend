
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
        <Route path='/cart/:id' element={<Usercart/>}/>
        

 
      </Routes>

     
    </div>
  );
}

export default App;
