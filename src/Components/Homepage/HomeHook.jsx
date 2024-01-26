import axios from "axios";
import { useEffect, useState } from "react";
export const useHome = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [styleChanged, setStyleChanged] = useState(false)
 
    useEffect(() => {
        const fetchData = async (imageArray) => {
            try {
                const apiItems = await axios.get("https://dummyjson.com/products");
                const response= await apiItems.data.products || [];
                setData(response)
            } catch (error) {
                console.log("error occurred", error);
            }
        };
        fetchData();
    }, []);
    
    const filterdata = data.filter((items) =>
        items.title.toLowerCase().includes(searchTerm.toString().toLowerCase())
    );
    

    const handleChange = () => {
        setStyleChanged(!styleChanged)
    }


    
   

    return { handleChange, styleChanged, searchTerm, setSearchTerm , data  , filterdata}
}