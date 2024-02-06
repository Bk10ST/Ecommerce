import React from 'react'
import './css/footer.css'
import pic from './images/apple.png'

const Footer = () => {
  return (
    <div className='footer-main'>
 <h1 className='foot-header'>TectStore</h1>

 <div className="foot-nav">
  <ul>
    <li>Home</li>
    <li>Available</li>
  </ul>
 </div>
 <div className="line"></div>

 <div className="image-container">
  <img src={pic} alt="" />
 </div>

 <div className="copy-text">
  <p>@copyright owned</p>
 </div>
</div>
 
  )
}

export default Footer