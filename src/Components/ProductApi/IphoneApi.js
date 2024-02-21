import axios from "axios";

const FetchData = async () => {
  try {
    const allItems = await axios.get(import.meta.env.VITE_PRODUCT_URL, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    }
    }
  );
    const response = allItems.data || [];
    console.log(response) 
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default FetchData;

export const ViewData = async (id) => {
  
  try {
    const allItems = await axios.get(
      // `http://localhost:3000/products/?id=${id}`
      `https://6dce-2407-1400-aa13-acd8-c4bc-fecd-e11a-4976.ngrok-free.app/products/?id=${id}`
    );
    const response = allItems.data || [];
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createProduct = async (newPost) => {
  try {
    const productApi = await axios.post(
      import.meta.env.VITE_PRODUCT_URL,
      newPost,
      {
        headers: {
  
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            // 'ngrok-skip-browser-warning': 'true' ,
        
        },
      }
    );

    console.log(productApi.data, "API response");
    const response = productApi.data || [];
    console.log(response, "response");
    return response;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};
