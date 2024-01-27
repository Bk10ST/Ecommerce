import React from "react";
import "./css/main.css";
import pic from "./Images/nav-circle.png";
import pic1 from "./Images/applelogo.png";
import pic2 from "./Images/logo.png";
import { useProducts } from "./useProduct";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const Home = () => {
  const { data } = useProducts();
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <div className="main">
      <div className="navbar">
        <h1 className="nav-header">TechStore</h1>
        <nav className="nav-items">
          <ul>
            <li>Home</li>
            <li><Link style={linkStyle} to='/available'>Available</Link></li>
            <li><Link style={linkStyle}  to='/blog'>Blog</Link></li>
            <li><Link style={linkStyle} to='/contact'>Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-img">
          <div className="cart">
            <Link style={linkStyle} to='/cart'>Cart &nbsp; <i class="fa-solid fa-cart-shopping"></i></Link>
          </div>
          <p className="dashboard">
           <Link style={linkStyle} to='/login'> Dashboard &nbsp; <i class="fa-solid fa-bars"></i></Link>
          </p>
          <img src={pic} alt="" />
        </div>

        <div className="apple-group">
          <img src={pic1} alt="" />
        </div>

        <div className="apple-logo">
          <img src={pic2} alt="" />
        </div>

        <div className="phone-text">
          <h1>Iphone 11</h1>
          <h5>Available at your store</h5>
          <h6>only for $999</h6>
        </div>
      </div>

      <div className="item-collection">
        <h1>Collection</h1>
        <motion.div className="product-section">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="productlist"
              >
                <motion.div
                  className="card"
                  style={{ width: "18rem", fontFamily: "Lato , sans-serif" }}
                  key={item.id}
                  whileHover={{scale: 1.1 , boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
                >
                  <img src={item.images[0]} alt="" className="api-image" />
                  <div className="card-body">
                    <h5 className="card-title" id="title-card">
                      {item.title}
                    </h5>
                    <br />
                    <p className="card-text" id="text-card">
                      {item.description}
                    </p>
                    <p className="card-text">$ {item.price}</p>

                    <a to="/addtocart" href="#" className="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
