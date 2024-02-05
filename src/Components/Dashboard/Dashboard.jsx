import React from "react";
import "./Dash.css";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchData from "../ProductApi/IphoneApi";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: FetchData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="dash-main">
      <div className="backtohome">
        <button onClick={() => navigate("/")}>Back to home</button>
      </div>
      <div className="info">
        <h1 className="header-dash">DashBoard</h1>
      </div>
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

      <div className="table">
        <table className="tab1">
          <thead className="th1">
            <th className="th-text">Product Name</th>
            <th className="th-text">Product Type</th>
            <th className="th-text">Product Image</th>
            <th className="th-text">Product Quantity</th>
            <th className="th-text">Product Price</th>
          </thead>

          {data.map((item) => {
            return (
              <tbody className="td1">
                <td className="td-text">{item.title}</td>
                <td className="td-text">{item.type}</td>
                <td className="td-text">
                  <img src={item.base} alt="" className="image-container" />
                </td>
                <td className="td-text">{item.quantity}</td>
                <td className="td-text">{item.amount}</td>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
