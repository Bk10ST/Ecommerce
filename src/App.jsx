import React, { useState } from 'react';
import Home from './Components/Homepage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Available from './Components/Available/Available';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Dashboard  from './Components/Dashboard/Dashboard';
import Cart from './Components/Addtocart/Cart';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/Sign/Sign';
import Additems from './Components/Dashboard/dash-item/Additems';
import Order from './Components/Dashboard/dash-item/Order-list';


const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSiggned , setIsSiggned]= useState(false);


  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleSign=()=>{
    setIsSiggned(true);
  }



  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/available" element={<Available />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path='/addproduc' element={<Additems/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
