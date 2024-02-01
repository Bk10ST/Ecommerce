import axios from 'axios';

// const FetchData = async () => {
//   try {
//     const allItems = await axios.get('http://localhost:3000/products/' );
//     const response = allItems.data || [];
//     return response;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; 
//   }
// };

// export default FetchData;


const FetchData = async () => {
  try {
    const allItems = await axios.get('http://localhost:3000/products/' );
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

// export const createProduct = async (newPost) => {
//   console.log(newPost , "ngrok")
//   const url= "https://8944-2407-1400-aa16-c2e8-7caf-1276-ffa4-511b.ngrok-free.app/products"
  
  
//   try {
//     const productApi = await axios.post(url , newPost , {
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'application/json',
  
//       }
//     });
    

//     console.log(productApi.data, "API response");
//     const response = productApi.data || [];
//     console.log(response, "response");
//     return response;
//   } catch (error) {
//     console.error("Error occurred:", error);
//     throw error;
//   }
// };


// export const createProduct = async (newPost) => {
//   console.log(newPost, "ngrok");
//   const url = "https://773b-2403-3800-320b-387c-1d8e-7f13-c1fb-3013.ngrok-free.app/products";

//   try {
//     const productApi = await axios.post(url, newPost, {
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log(productApi.data, "API response");
//     const response = productApi.data || [];
//     console.log(response, "response");
//     return response;
//   } catch (error) {
//     console.error("Error occurred:", error);
//     throw error;
//   }
// };





