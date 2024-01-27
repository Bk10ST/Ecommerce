// import { useEffect, useState } from "react";
// import { ProductData } from "./Data";

import axios from "axios";
import { useState } from "react";

// export const DashHook = () => {
//   const [data, setData] = useState([]);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [id, setId] = useState(0);
//   const [isUpdate, setIsUpdate] = useState(false);

//   useEffect(() => {
//     setData(ProductData);
//   }, []);
//   // edit button
//   const handleEdit = (id) => {
//     const dt = data.filter((item) => item.id === id);
//     if (dt !== undefined) {
//       setIsUpdate(true);
//       setId(id);
//       setFirstName(dt[0].firstName);
//       setLastName(dt[0].lastName);
//       setEmail(dt[0].email);
//     }
//   };
//   // delete button
//   const handleDelete = (id) => {
//     if (id > 0) {
//       if (window.confirm("Are you sure you want to delete ?")) {
//         const deleteData = data.filter((item) => item.id !== id);
//         setData(deleteData);
//       }
//     }
//   };

//   // save button
//   const handleSave = (e) => {
//     let error = "";
//     if (firstName === "") error += "FirstName is required ,";
//     if (lastName === "") error += "LastName is required .";
//     if (email === "") error += "email required .";
//     if (error === "") {
//       e.preventDefault();
//       const dt = [...data];
//       const newObj = {
//         id: ProductData.length + 1,
//         name: firstName,
//         caste: lastName,
//         email: email,
//         // age: age,
//       };
//       dt.push(newObj);
//       setData(dt);
//     } else {
//       alert(error);
//     }
//   };

//   // update button
//   const handleUpdate = () => {
//     const index = data.map((item) => item.id).indexOf(id);
//     const dt = [...data];
//     dt[index].firstName = firstName;
//     dt[index].lastName = lastName;
//     setData(dt);
//     handleClear();
//   };
//   // clear button
//   const handleClear = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setIsUpdate(false);
//   };

//   return {
//     data,
//     setData,
//     email,
//     setEmail,
//     firstName,
//     setFirstName,
//     lastName,
//     setLastName,
//     id,
//     setId,
//     isUpdate,
//     setIsUpdate,
//     handleClear,
//     handleDelete,
//     handleEdit,
//     handleSave,
//     handleUpdate,
//   };
// };

export const useCreateProduct = () => {
  const [imageData , setImageData] = useState('');
  const [formvalues, setFormvalues] = useState({
    productName: "",
    productCategory: "",
    amount: "",
  });

  const handleProducts = (e) => {
    const { name, value } = e.target;
    console.log(name , value , e);
    setFormvalues({ ...formvalues, [name]: value });
  };

  const convertToBase64 = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageData(reader.result);
      console.log({result : reader.result});
    };

    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  };

  const addProduct = () => {
    const { productName, productCategory, amount, productImageUrl } = formvalues;
    return axios.post(`https://4bfb-2407-1400-aa0e-3788-14d7-d2cb-2ca8-4f61.ngrok-free.app/products`, {
      productName,
      productCategory,
      amount,
      productImageUrl,
      imageData
    });
  };

  return { addProduct , handleProducts , formvalues , convertToBase64 };
};

const editProduct = (data) => {
  const { productName, poductCategory, amount, productImageUrl, id } = data;
  axios.put(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    productName,
    poductCategory,
    amount,
    productImageUrl,
  });
};
const deleteProduct = (data) => {
  axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
};
const getProducts = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/products`);
};
