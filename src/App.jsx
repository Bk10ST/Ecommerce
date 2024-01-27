import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components/Homepage/Home'
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/Sign/Sign'
import Productdetails from './Components/Productdetails/Productdetails'
import { AddItems } from './Components/Productdetails/AddItems'
import { AdminDashboard } from './AdminDashboard/Admin'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/dashboard' element={<Productdetails />} />
          <Route exact path='/add' element={<AddItems />} />
          <Route exact path='/admin/dashboard' element={<AdminDashboard />} />
          

        </Routes>
      </Router>


    </div>
  )
}

export default App