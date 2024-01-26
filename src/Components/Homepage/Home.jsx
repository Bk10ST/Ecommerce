import React from "react";
import "./css/main.css";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";
import { useHome } from "./HomeHook.jsx";

const HomePage = () => {
  const {
    handleChange,
    filterdata, 
    styleChanged,
    searchTerm,
    setSearchTerm,
    data,
      
  } = useHome();
  return (
    <div className="maindiv">
      <div className="main">
        <div className="menulogo">
          <i
            className="fa-solid fa-bars fa-2xl"
            onClick={handleChange}
            id="menu-bar"
          ></i>
        </div>
        <motion.div className="navbar">
          <motion.span
            whileInView={{
              marginLeft: "-40px",
            }}
            transition={{
              duration: 2,
              stiffness: "spring",
            }}
            className="best"
          >
            Best
          </motion.span>
          <motion.span
            whileInView={{
              marginLeft: "40px",
            }}
            transition={{
              duration: 2,
              stiffness: "spring",
            }}
            className="deal"
          >
            Deal
          </motion.span>
          <span className="tech">Tech Store</span>
          <div className="navbar-heading">
            <div
              id="mySidenav"
              className={styleChanged ? "sidenav1" : "sidenav"}
            >
              <h1 className="secondaryHeading">Tech Store</h1>
              <a href="#">
                <i className="fa-solid fa-house"></i>{" "}
                <span className="mx-1">Home</span>
              </a>
              <Link to="/signup">
                <i className="fa-solid fa-user-plus"></i>{" "}
                <span className="mx-1">Signup</span>
              </Link>
              <Link to="/login">
                <i className="fa-regular fa-user"></i>{" "}
                <span className="mx-2">Login</span>
              </Link>
              
            </div>
          </div>
          <motion.div className="iphonegroup"></motion.div>
          <motion.div
            animate={{
              marginTop: "580px",
            }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="applelogo"
          ></motion.div>
          <div className="profile">
            <i
              className="fa-solid fa-cart-shopping fa-2xl"
              style={{ color: "#000000" }}
            ></i>
          </div>
          <div className="searchInput">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="  search..."
            />
        
          </div>
          {/* suggestion div */}
        
      {searchTerm && (
        <div className="listsuggest" >
          {filterdata.length > 0 ? (
            filterdata.map((suggest, index) => (
              <ul key={index} className="suggestion-box">
                <li style={{ color: "black" }}>- {suggest.title}</li>
              </ul>
            ))
          ) : (
            <p className="non-found">No results found</p>
          )}
        </div>
      )}

          <div className="search"></div>
        </motion.div>
      </div>
      {/* api export */}

      <h1 className="productheading">Product's</h1>
      <motion.div className="product-section">
        {data.map((items, index) => {
          return (
            <motion.div key={index} 
            whileHover={{ scale: 1.1 }}
            className="productlist">
              <motion.div

                className="card"
                style={{ width: "18rem", fontFamily: "Lato , sans-serif" }}
                key={items.id}
              >
                <img
                  src={items.images[0]}
                  alt=""
                  className="api-image"
          
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    id="title-card"
                    
                  >
                    {items.title}
                  </h5>
                  <br />
                  <p
                    className="card-text"
                    id="text-card"
                   
                  >
                    {items.description}
                  </p>
                  <p className="card-text">$ {items.price}</p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      

      {/* footer */}

      <div className="home-footer">
        <ul className="footer-heading">
          <li className="list-text">
            <i className="fa-solid fa-house"></i> Home
          </li>
          <li className="list-text">
            <i className="fa-solid fa-user-plus"></i> Login
          </li>
          <li className="list-text">
            <i className="fa-regular fa-user"></i> SignUp
          </li>
        </ul>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomePage;
