import React from "react";
import "../Dash.css";
import "./item.css";
import { Link } from "react-router-dom";

const Additems = () => {
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
        <h1 className="header-dash">Add items</h1>
      </div>

      <div className="input-field">
        <form>
          <div className="form-row">
            <div className="col">
              <label htmlFor="">Product Name : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
              />
            </div>

            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Ios</option>
                <option>Andriod</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Product Image</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          <div className="number-field">
            <div className="col">
              <label htmlFor="">Product Amount : </label>
              <input
                type="number"
                className="form-control"
                placeholder="Product Amount"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Additems;
