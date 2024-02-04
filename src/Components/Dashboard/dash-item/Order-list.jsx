import React, { useContext, useState } from "react";
import "./Order.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Order = () => {
  const orderList = useSelector((state) => state.order);
  console.log(orderList, "orders on orderList");

  const style = {
    textDecoration: "none",
    color: "white",
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
                <i class="fa-solid fa-plus"></i> &nbsp;add-items
              </Link>
            </li>
            <li>
              <Link to="/order" style={style}>
                <i class="fa-solid fa-list"></i> &nbsp;Order's
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="info">
        <h1 className="header-dash">Order-list</h1>
        <div className="list">
          return{" "}
          <table className="table2 table-striped">
            <thead>
              <tr>
                <th scope="col">NO.</th>
                <th scope="col">Title</th>
                <th scope="col">Type</th>
                <th scope="col">Image</th>
                <th scope="col">Amount</th>
                <th scope="col">Quantity</th>
                <th scope="col">UserID</th>
              </tr>
            </thead>

            {orderList.order?.map((item, index) => {
              return (
                <tbody key={index}>
                  <br />
                  <tr>
                    <th scope="row">1</th>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>
                      <img src={item.base} alt="" />
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.totalprice}</td>
                  </tr>
                </tbody>
              );
            })}

            {/* <p>{orderList.qua}</p> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
