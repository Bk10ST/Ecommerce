import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ViewData } from '../ProductApi/IphoneApi';
import { motion } from 'framer-motion';
import './Cart.css'
import { addToCart } from '../CartSlice/CartSice';
import { useDispatch } from 'react-redux'



const Cart = () => {
  const [quantity , setQuantity]= useState(1);
  const dispatch= useDispatch();
 
  const { id }= useParams()
  console.log("id: " , id)
  const navigate= useNavigate()

  const {data , isLoading , isError}= useQuery({
    queryKey: ["products" , id], 
    queryFn: ()=> ViewData(id),
})
// console.log(data , "currently shown product")





if (isLoading) {
  return <div>Loading...</div>;
}

if (isError) {
  return <div>Error loading post data</div>;
}

if (!data) {
  return <div>No data available for this post</div>;
}



const handleIncrement=()=>{
if(quantity < 5){
  setQuantity(quantity + 1)

}
}

const handleDecrement=()=>{
 if(quantity === 1){
  setQuantity(1)
 }else{
  setQuantity(quantity -1)
 }
}

const handleAddToCart=(item)=> {
  dispatch(addToCart(item));
  navigate('/confirm');
}
 

  return (
    <div>
      <button onClick={()=> navigate('/')}>back to list</button>
      <h1 className='cart-header'>Cart  &nbsp; <i className="fa-solid fa-cart-shopping"></i></h1>
      <motion.div className="product-section">
          {data.map(item => {
            return <table className='cart-table'>
              <thead className='table-header'>
                <th className='table-text'>Product Name</th>
                <th className='table-text'>Type</th>
                <th className='table-text'>Amount</th>
                <th className='table-text'>Image</th>
                <th className='table-text'>Quantity</th>
                <th className='table-text'>confirm</th>
              </thead>
              <tbody className='table-body'>
                <td className="table-item">{item.title}</td>
                <td  className="table-item">{item.type}</td>
                <td  className="table-item">{item.amount}</td>
                <td  className="table-item"><img src={item.images} alt="" /></td>
                <td  className="table-item"><button className='incrementbtn' onClick={handleIncrement} >+</button><span>  {quantity}</span><button className='decreaseBtn' onClick={handleDecrement}>-</button></td>
                <td  className="table-item">
                <p className='total'>Total: {item.amount}</p>
                {console.log(item , "items")}
                  <button type='button' onClick={()=> handleAddToCart(item)}>Order</button></td>
              </tbody>
            </table>
          })}
        </motion.div>

       
        
        
    </div>
  )
}

export default Cart