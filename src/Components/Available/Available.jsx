import React,  { useEffect, useState } from 'react'
import './Available.css'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchData from "../ProductApi/IphoneApi";
const Available = () => {

  const navigate = useNavigate();
  useEffect(() => {
    FetchData();
  }, []);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: FetchData,
  });

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }
  const linkStyle = {
    textDecoration: "none",
    // color: "black",
    color: "white"
  };
  return (
    <div className='Available-conainer'>
      <div className="nav-container">
        <h3 className='nav-item-head'>TechStore</h3>
       <div className="nav-list">
       <ul>
       <li>
             <Link style={linkStyle} to='/'>
             <i class="fa-solid fa-house"></i>&nbsp; Home
             </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/available">
                <i class="fa-solid fa-circle-check"></i>&nbsp; Available
              </Link>
            </li>
        
           {/* <li className='slogan'>IPHONE</li> */}
         
        </ul>
       </div>
</div>
<div className="available-card-header">
  <h1>Buy Now</h1>
</div>
       <motion.div className="product-section-available">
          {data.map((item) => {
              return (
                <div whileHover={{ scale: 1.1 }} className="productlist">
                  <motion.div
                    className="card"
                    style={{ width: "18rem", fontFamily: "Lato , sans-serif" }}
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={item.base} alt="" className="api-image" />
                    <div className="card-body">
                      <h5 className="card-title" id="title-card">
                        {item.title}
                      </h5>
                      <br />
                      <p className="card-text" id="text-card">
                        Type: {item.type}
                      </p>
                      <p className="card-text">Quantity: {item.quantity}</p>
                      <p className="card-text">Amount: {item.amount}</p>

                      <button
                        className="btn btn-primary ml-90"
                        id='cart-function'
                        onClick={() => navigate(`/cart/${item.id}`)}
                      >
                        VIEW
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
        </motion.div>
      

    </div>
  )
}

export default Available