import React, { useState } from "react";
import "../Dash.css";
import "./item.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { QueryClient, useMutation } from "@tanstack/react-query";
import "./addlist.css";
import { createProduct } from "../../ProductApi/IphoneApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Additems = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  const [items, setItems] = useState({
    ProductName: "",
    productCategory: "",
    quantity: 0,
    amount: 0,
    productImages: null,
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
    const productImages = await convertToBase64(file);
    const imageUrl = productImages.slice(22 , productImages.length);
    console.log({imageUrl});
    setItems(prev => ({...items , productImagesUrl : [imageUrl]}));
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
    console.log({items})
    e.preventDefault();
    createPostMutation.mutate({
      id: uuidv4(),
      ...items,
    } , {
      onSuccess : () => {
        toast("product added");
        setItems({
          productCategory: "",
          ProductName: "",
          quantity: 0,
          amount: 0,
          productImages: null,
        });
      }
    });
  };

  return (
    <div>
      <ToastContainer />
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
      <div className="custom-info">
        <h1 className="custom-header-dash">Add items</h1>
      </div>

      <div className="custom-input-field">
        <form onSubmit={handleSubmit}>
          <div className="custom-form-row">
            <div className="custom-col">
              <label htmlFor="">Product Name : </label>
              <input
                type="text"
                name="productName"
                value={items[name]}
                className="custom-form-control"
                placeholder="Product Name"
                onChange={handleChangeInput}
              />
            </div>

            <div className="custom-form-group custom-col-md-4">
              <label htmlFor="inputState">Type</label>
              <select
                id="inputState"
                value={items[name]}
                name="productCategory"
                onChange={handleChangeInput}
                className="custom-form-control"
              >
                <option>-- Choose --</option>
                <option>iphone</option>
                <option>ipad</option>
                <option>MacBook</option>
              </select>
            </div>

            {/* <div className="custom-form-group">
              <label htmlFor="exampleFormControlFile1">Product Image</label>
              <input
                type="file"
                className="custom-form-control-file"
                name="productImages"
                accept="images/*"
                id="exampleFormControlFile1"
                onChange={handleImage}
              />
            </div> */}

            <div className="custom-form-group">
              <label htmlFor="exampleFormControlFile1">Product Image</label>
              <input
                type="file"
                className="custom-form-control-file"
                name="productImages"
                accept="image/*"
                id="exampleFormControlFile1"
                onChange={handleImage}
                multiple // allow multiple file selection
              />
            </div>
          </div>

          <div className="custom-number-field">
            <div className="custom-col">
              <label htmlFor="">Product Quantity : </label>
              <input
                type="number"
                name="quantity"
                value={items[name]}
                onChange={handleQuantity}
                className="custom-form-control"
                placeholder="Product Quantity"
              />
            </div>
          </div>

          <div className="custom-number-field">
            <div className="custom-col">
              <label htmlFor="">Product Amount : </label>
              <input
                type="number"
                name="amount"
                value={items[name]}
                onChange={handleChangeInput}
                className="custom-form-control"
                placeholder="Product Amount"
              />
            </div>
          </div>

          <button type="submit" className="custom-btn custom-btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additems;
