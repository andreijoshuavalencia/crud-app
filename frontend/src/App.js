import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import GetUser from "./pages/GetUser";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/add" element={<AddUser />}></Route>
          <Route exact path="/edit/:userId" element={<EditUser />}></Route>
          <Route exact path="/user/:userId" element={<GetUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
