import React, { useEffect, useState } from "react";
import "./css/main.css";
import pic from "./Images/nav-circle.png";
import pic1 from "./Images/applelogo.png";
import pic2 from "./Images/logo.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchData from "../ProductApi/IphoneApi";
import Footer from "./Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  // const [limitProduct, setLimitProduct] = useState(6);
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

  console.log(data);

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="main">
      <div className="navbar">
        <h1 className="nav-header">TechStore</h1>
        <nav className="nav-items">
          <ul>
            <li>
              <i class="fa-solid fa-house"></i>&nbsp; Home
            </li>
            <li>
              <Link style={linkStyle} to="/available">
                <i class="fa-solid fa-circle-check"></i>&nbsp; Available
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-img">
          <p className="dashboard">
            <Link style={linkStyle} to="/dashboard">
              {" "}
              Dashboard &nbsp; <i className="fa-solid fa-bars"></i>
            </Link>
          </p>
          <img src={pic} alt="" />
        </div>

        <div className="apple-group">
          <img src={pic1} alt="" />
        </div>

        <div className="apple-logo">
          <img src={pic2} alt="" />
        </div>

        <motion.div className="phone-text">
          <motion.h1 
          initial={{
            marginLeft: "-400px", 
            opacity: 0
          }}
          animate={{
            marginLeft: "-200px",
            transition: {duration: 1} ,
            opacity : 1

          }}
          >Iphone 11</motion.h1>
          <motion.h5 
           initial={{
            marginLeft: "-400px", 
            opacity: 0
          }}
          animate={{
            marginLeft: "-60px",
            transition: {duration: 1.5}, 
            opacity: 1

          }}
          >Available at your store</motion.h5>
          <motion.h6
          initial={{
            marginLeft: "-440px", 
            opacity: 0
          }}
          animate={{
            marginLeft: "-10px",
            transition: {duration: 1} ,
            opacity : 1

          }}
          >only for $999</motion.h6>
        </motion.div>
      </div>

      <div className="item-collection">
        <h1>Collection </h1>
        <motion.div className="product-section">
          {data &&
            data.slice(0, 8).map((item) => {
              return (
                <div whileHover={{ scale: 1.1 }} className="productlist">
                  <motion.div
                    className="card"
                    style={{ width: "18rem", fontFamily: "Lato , sans-serif" }}
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={item.productImages[0]} alt="" className="api-image" />
                    <div className="card-body">
                      <h5 className="card-title" id="title-card">
                        {item.productName}
                      </h5>
                      <br />
                      <p className="card-text" id="text-card">
                        Type: {item.productCategory}
                      </p>
                      <p className="card-text">Quantity: {item.quantity}</p>
                      <p className="card-text">Amount: {item.amount}</p>

                      <button
                        className="btn btn-primary"
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

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
