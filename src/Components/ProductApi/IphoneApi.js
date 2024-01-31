import axios from 'axios';

const FetchData = async () => {
  try {
    const allItems = await axios.get('http://localhost:3000/products');
    const response = allItems.data || [];
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

export default FetchData;

export const ViewData = async (id) => {
  try {
    const allItems = await axios.get(`http://localhost:3000/products/?id=${id}`);
    const response = allItems.data || [];
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};


export const createProduct = async (newPost) => {
  
  try {
    const productApi = await axios.post("http://localhost:3000/products/", newPost, {
      headers: {
        "Content-Type": "application/json", 
      },
    });

    console.log(productApi.data, "API response");
    const response = productApi.data || [];
    console.log(response, "response");
    return response;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};




