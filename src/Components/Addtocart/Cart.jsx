import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ViewData } from "../ProductApi/IphoneApi";
import { motion } from "framer-motion";
import "./Cart.css";
import { addToCart, updateQuantity, updatedPrice } from "../CartSlice/CartSice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("id: ", id);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", id],
    queryFn: () => ViewData(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading post data</div>;
  }

  if (!data) {
    return <div>No data available for this post</div>;
  }

  const handleIncrement = (ProductAmount) => {
    const price = ProductAmount;

    console.log("price is", price);
    if (totalQuantity < 5) {
      setTotalQuantity(totalQuantity + 1);
    }
    if (totalPrice < price * 5) {
      setTotalPrice(totalPrice + price);
    }
  };

  const handleDecrement = (amount) => {
    const price = amount;
    if (totalQuantity === 0) {
      setTotalQuantity(0);
    } else {
      setTotalQuantity(totalQuantity - 1);
      setTotalPrice(totalPrice - price);
    }
  };

  const handleAddToCart = (item) => {
    if (totalQuantity === 0) {
      alert("please select quantity");
    } else {
      dispatch(addToCart(item));
      navigate("/confirm");
      toast.success("Lorem ipsum dolor");
    }
  };

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
                <td className="table-item">{item.title}</td>
                <td className="table-item">{item.type}</td>
                <td className="table-item">{item.amount}</td>
                <td className="table-item">
                  <img src={item.base} alt="" />
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
