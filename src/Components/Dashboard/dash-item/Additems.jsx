import React from 'react'
import '../Dash.css'
import { Link } from 'react-router-dom'


const Additems = () => {
  const style={
    textDecoration: "none", 
    color: "white"
  }

  return (
    <div>
      <div className="sidenav">
        <h1 className='nav-head'>TechStore</h1>
        <div className="nav-item">
          <ul>
          <li><Link to='/dashboard' style={style}><i className="fa-solid fa-bars"></i> &nbsp; Dashboard</Link></li>
            <li><Link to='/addproduc' style={style}><i class="fa-solid fa-plus"></i> &nbsp;add-items</Link></li>
            <li><Link to='/order' style={style}><i class="fa-solid fa-list"></i> &nbsp;Order's</Link></li>
          </ul>
        </div>
      </div>

      <div className="info">
        <h1 className='header-dash'>Add items</h1>
      </div>
    </div>
  )
}

export default Additems