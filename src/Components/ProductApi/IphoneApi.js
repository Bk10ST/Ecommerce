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



