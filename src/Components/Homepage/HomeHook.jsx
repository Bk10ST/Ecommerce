import axios from 'axios'
import { useEffect, useState } from "react";

const useHome=()=>{
    const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [styleChanged , setStyleChanged]= useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiItems = await axios.get("https://c47c-2407-1400-aa1b-5f0-55b6-7bc5-88f6-4d34.ngrok-free.app/products");

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

  const handleChange=()=>{
    setStyleChanged(!styleChanged)
  }

   return {handleChange , filterdata , styleChanged ,searchTerm ,setSearchTerm}
}

export default useHome
