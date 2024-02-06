import React, { useState } from "react";
import "../Dash.css";
import "./item.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { QueryClient, useMutation } from "@tanstack/react-query";

import { createProduct } from "../../ProductApi/IphoneApi";

const Additems = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  const [items, setItems] = useState({
    title: "",
    type: "",
    quantity: 0,
    amount: 0,
    base: null,
  });

  const handleChangeInput = (e) => {
    const value =
      e.target.name === "amount" ? parseFloat(e.target.value) : e.target.value;

    setItems({
      ...items,
      [e.target.name]: value,
    });
  };

  const createPostMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["POST"] });
      console.log("sucess");
    },
  });

  const handleQuantity = (e) => {
    const quantity =
      e.target.name === "quantity"
        ? parseFloat(e.target.value)
        : e.target.value;

    setItems({
      ...items,
      [e.target.name]: quantity,
    });
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const base = await convertToBase64(file);
    console.log(base);
    setItems({
      ...items,
      base,
    });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload = () => {
        resolve(filereader.result);
      };
      filereader.onerror = () => {
        reject(error);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      id: uuidv4(),
      ...items,
    });

    setItems({
      title: "",
      type: "",
      quantity: 0,
      amount: 0,
      base: null,
    });
  };

  return (
    <div>
      <div className="sidenav">
        <h1 className="nav-head">TechStore</h1>
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/dashboard" style={style}>
                <i className="fa-solid fa-bars"></i> &nbsp; Dashboard
              </Link>
            </li>
            <li>
              <Link to="/addproduc" style={style}>
                <i className="fa-solid fa-plus"></i> &nbsp;add-items
              </Link>
            </li>
            <li>
              <Link to="/order" style={style}>
                <i className="fa-solid fa-list"></i> &nbsp;Order's
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="info">
        <h1 className="header-dash">Add items</h1>
      </div>

      <div className="input-field">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="">Product Name : </label>
              <input
                type="text"
                name="title"
                value={items[name]}
                className="form-control"
                placeholder="Product Name"
                onChange={handleChangeInput}
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputState">Type</label>
              <select
                id="inputState"
                value={items[name]}
                name="type"
                onChange={handleChangeInput}
                className="form-control"
              >
                <option>-- Choose --</option>
                <option>Ios</option>
                <option>Andriod</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Product Image</label>
              <input
                type="file"
                className="form-control-file"
                name="images"
                accept="images/*"
                id="exampleFormControlFile1"
                onChange={handleImage}
              />
            </div>
          </div>

          <div className="number-field">
            <div className="col">
              <label htmlFor="">Product Quantity : </label>
              <input
                type="number"
                name="quantity"
                value={items[name]}
                onChange={handleQuantity}
                className="form-control"
                placeholder="Product Quantity"
              />
            </div>
          </div>

          <div className="number-field">
            <div className="col">
              <label htmlFor="">Product Amount : </label>
              <input
                type="number"
                name="amount"
                value={items[name]}
                onChange={handleChangeInput}
                className="form-control"
                placeholder="Product Amount"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additems;
