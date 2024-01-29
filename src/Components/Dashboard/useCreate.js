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

{
  data.map(item=> {
    return   <tbody className='td1'>
    <td className='td-text'>{item.title}</td>
    <td className='td-text'>{item.title}</td>
    <td className='td-text'><img src={item.images} alt="" /></td>
    <td className='td-text'>{item.amount}</td>
  </tbody>
  })
}
  
</table>
</div>