import axios from "axios";
import { useEffect, useState } from "react";
export const useProducts = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [styleChanged, setStyleChanged] = useState(false)
 
    useEffect(() => {
        const fetchData = async (imageArray) => {
            try {
                const apiItems = await axios.get("https://4bfb-2407-1400-aa0e-3788-14d7-d2cb-2ca8-4f61.ngrok-free.app/products" , {
                    headers :{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                const response= await apiItems.data || [];
                setData(response)
            } catch (error) {
                console.log("error occurred", error);
            }
        };
        fetchData();
    }, []);
    
    const filterdata = data.filter((items) =>
        items?.productName?.toLowerCase().includes(searchTerm.toString().toLowerCase())
    );
    
    const handleChange = () => {
        setStyleChanged(!styleChanged)
    }

    return { handleChange, styleChanged, searchTerm, setSearchTerm , data  , filterdata}
}