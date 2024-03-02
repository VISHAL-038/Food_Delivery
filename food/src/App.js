import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './screens/Home'
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Signup from './screens/Signup.js';
import Cart from './screens/Cart.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/createuser' element={<Signup/>}/>
          <Route exact path='/cart' element={<Cart/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App