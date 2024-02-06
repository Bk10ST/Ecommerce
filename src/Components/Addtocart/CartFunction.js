import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { ViewData } from "../ProductApi/IphoneApi";
import "./Cart.css";
import { addToCart } from "../CartSlice/CartSice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CartFunction = () => {
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
      localStorage.setItem("orderInfo" , JSON.stringify(item))
    }
  };

  return {
    navigate,
    totalPrice,
    totalQuantity,
    handleAddToCart,
    handleDecrement,
    handleIncrement,
    data,
    isError,
    isLoading,
  };
};

export default CartFunction;
