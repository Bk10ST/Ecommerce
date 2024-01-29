import React from 'react'
import {Link} from 'react-router-dom'

const Available = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <div>
      <div className="navbar">
        <h1 className="nav-header">TechStore</h1>
        <nav className="nav-items">
          <ul>
            <li><Link style={linkStyle} to='/'>Home</Link></li>
            <li><Link style={linkStyle} to='/available'>Available</Link></li>
            {/* <li><Link style={linkStyle}  to='/blog'>Blog</Link></li> */}
            {/* <li><Link style={linkStyle} to='/contact'>Contact</Link></li> */}
          </ul>
        </nav>
        
        </div>
    </div>
  )
}

export default Available