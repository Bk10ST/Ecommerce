import React from "react";
import "./Cart.css";
import CartFunction from "./CartFunction";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const {
    navigate,
    totalPrice,
    totalQuantity,
    handleAddToCart,
    handleDecrement,
    handleIncrement,
    data,
    isError,
    isLoading,
  } = CartFunction();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading post data</div>;
  }

  if (!data) {
    return <div>No data available for this post</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>back to list</button>
      <h1 className="cart-header">
        Cart &nbsp; <i className="fa-solid fa-cart-shopping"></i>
      </h1>
      <motion.div className="product-section1">
        {data.map((item) => {
          return (
            <table className="cart-table1">
              <thead className="table-header1">
                <th className="table-text">Product Name</th>
                <th className="table-text">Type</th>
                <th className="table-text">Amount</th>
                <th className="table-text">Image</th>
                <th className="table-text">Quantity</th>
                <th className="table-text">confirm</th>
              </thead>
              <tbody className="table-body">
                <td className="table-item">
                  <h3>{item.title}</h3>
                </td>
                <td className="table-item">{item.type}</td>
                <td className="table-item">{item.amount}</td>
                <td className="table-item">
                  <img src={item.base} alt="" className="image-port" />
                </td>
                <td className="table-item">
                  <p className="quantity-container">
                    Availiable upto {item.quantity}{" "}
                  </p>
                  <button
                    className="incrementbtn"
                    onClick={() => handleIncrement(item.amount)}
                  >
                    +
                  </button>
                  <span> {totalQuantity}</span>

                  <button
                    className="decreaseBtn"
                    onClick={() => handleDecrement(item.amount)}
                  >
                    -
                  </button>
                </td>
                <td className="table-item">
                  <p className="total">
                    Total: <span> {totalPrice}</span>
                  </p>
                  {console.log(item, "items")}
                  <button type="button" onClick={() => handleAddToCart(item)}>
                    Order
                  </button>
                </td>
                <ToastContainer />
              </tbody>
            </table>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cart;
