import axios from 'axios'
import { useEffect, useState } from "react";

const useHome = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [styleChanged, setStyleChanged] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiItems = await axios.get("https://ff9e-2407-1400-aa1e-da20-11ef-d1ae-37b9-ba6a.ngrok-free.app/products");

        const response = apiItems.data.products || [];
        console.log(response)
        setData(response);
      } catch (error) {
        console.log("error occurred", error);
      }
    };
    fetchData();
  }, []);



  const filterdata = data.filter((items) =>
    items.productCategory.toLowerCase().includes(searchTerm.toString().toLowerCase())
  );

  const handleChange = () => {
    setStyleChanged(!styleChanged)
  }

  return { handleChange, filterdata, styleChanged, searchTerm, setSearchTerm }
}

export default useHome
