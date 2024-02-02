import React, { useState } from "react";
import Home from "./Components/Homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Available from "./Components/Available/Available";
import Dashboard from "./Components/Dashboard/Dashboard";
import Cart from "./Components/Addtocart/Cart";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/Sign/Sign";
import Additems from "./Components/Dashboard/dash-item/Additems";
import Order from "./Components/Dashboard/dash-item/Order-list";
import ConfirmPage from "./Components/Confirm/ConfirmPage";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSiggned, setIsSiggned] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleSign = () => {
    setIsSiggned(true);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/available" element={<Available />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/addproduc" element={<Additems />} />
          <Route path="/order/" element={<Order />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
