import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from  './pages/Home'
import AddUser from  './pages/AddUser'
import EditUser from './pages/EditUser';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/add' element={<AddUser/>}></Route>
        <Route exact path='/edit/:userId' element={<EditUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
