import { useEffect, useState } from "react";
import { ProductData } from "./Data";

export const DashHook = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(ProductData);
  }, []);
  // edit button
  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setEmail(dt[0].email);
    }
  };
  // delete button
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete ?")) {
        const deleteData = data.filter((item) => item.id !== id);
        setData(deleteData);
      }
    }
  };

  // save button
  const handleSave = (e) => {
    let error = "";
    if (firstName === "") error += "FirstName is required ,";
    if (lastName === "") error += "LastName is required .";
    if (email === "") error += "email required .";
    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObj = {
        id: ProductData.length + 1,
        name: firstName,
        caste: lastName,
        email: email,
        // age: age,
      };
      dt.push(newObj);
      setData(dt);
    } else {
      alert(error);
    }
  };

  // update button
  const handleUpdate = () => {
    const index = data.map((item) => item.id).indexOf(id);
    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    setData(dt);
    handleClear();
  };
  // clear button
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsUpdate(false);
  };

  return {
    data,
    setData,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    id,
    setId,
    isUpdate,
    setIsUpdate,
    handleClear,
    handleDelete,
    handleEdit,
    handleSave,
    handleUpdate,
  };
};
