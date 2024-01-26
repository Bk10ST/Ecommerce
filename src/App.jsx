import React from 'react'
import {
  BrowserRouter as Router , 
  Routes , 
  Route
} from 'react-router-dom'
import Home from './Components/Homepage/Home'
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/Sign/Sign'
import { Dashboard } from './Components/Dashboard/Dashboard'


const App = () => {
  return (
    <div>
     <Router>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/signup' element={<SignUp/>}  />
      <Route exact path='/dashboard' element={<Dashboard/>} />

     </Routes>
     </Router>




    </div>
  )
}

export default App