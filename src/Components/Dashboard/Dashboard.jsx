import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
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
        <h1 className='header-dash'>DashBoard</h1>
      </div>

      <div className="table">
        <table className='tab1'>
          <thead className='th1'>
            <th className='th-text'>Product Name</th>
            <th className='th-text'>Product Type</th>
            <th className='th-text'>Product Image</th>
            <th className='th-text'>Product Price</th>
          </thead>

          <tbody className='td1'>
            <td className='td-text'></td>
            <td className='td-text'></td>
            <td className='td-text'></td>
            <td className='td-text'></td>
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default Dashboard