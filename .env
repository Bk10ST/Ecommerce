import React, { useState } from "react";
import "../Dash.css";
import "./item.css";
import { Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { QueryClient, useMutation } from '@tanstack/react-query'
import  { createProduct }  from "../../ProductApi/IphoneApi";


const Additems = () => {



  const style = {
    textDecoration: "none",
    color: "white",
  };

  const [items , setItems]= useState({
    title: "", 
    type: "" ,
    amount: "",
  })


  const handleChangeInput=(e)=> {
    setItems({
      ...items , 
      [e.target.name]: e.target.value
    })

  }
  const createPostMutation = useMutation({
    mutationFn: createProduct, 
    onSuccess: ()=> {
      QueryClient.invalidateQueries({queryKey: ['POST']});
      console.log("sucess")
    }
  });

  
  const handleSubmit=()=> {
    createPostMutation.mutate({
      id: uuidv4() , 
      ...items,
    })

    setItems({
      title : "" ,
    type: "" ,
    number: "",
      })

  }


  


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
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="">Product Name : </label>
              <input
                type="text"
              value={items[name]}
              name="title"
                className="form-control"
                placeholder="Product Name"
                onChange={handleChangeInput}
              />
            </div>

            <div class="form-group col-md-4">
              <label for="inputState">Type</label>
              <select id="inputState" value={items} name="type" onChange={handleChangeInput} className="form-control" >
                <option>-- Choose --</option> 
                <option>Ios</option>
                <option >Andriod</option>
              </select>
            </div>
            
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Product Image</label>
              <input
                type="file"
                className="form-control-file"
                name="file"
                value={isImage}
                id="exampleFormControlFile1"
                onChange={(e)=> {setIsImage(e.target.files[0])}}
              />
            </div> */}
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

          <button type="submit" className="btn btn-primary">Add</button>


        </form>

    <p>{items.title}</p>
    <p>{items.type}</p>
    <p>{items.amount}</p>
      </div>
    </div>
  );
};

export default Additems;
