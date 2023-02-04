import React, { useState, useEffect, useContext} from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";


function EditUser() {
    const navigate = useNavigate();
    const location = useLocation();
    const [details, setDetails] = useState([{
      user_fname:"",
      user_lname:""
    }]);

    const id = location.pathname.split('/')[2]
  
    // useEffect(()=> {
    //   fetch("/api/user/" + id, {
    //       method: "PUT",
    //       headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //       },
    //       // We convert the React state to JSON and send it as the POST body
    //       body: JSON.stringify(details),
    //     }).then(function (response) {
    //       // console.log(response);
    //       return response.json();
    //     });
      
    // },[details]);

    // console.log(details);

  const changeHandler = (event) => {
    event.preventDefault();
    try{
      setDetails(prev =>({...prev, [event.target.name]:event.target.value}))
    }catch(err){
      console.log(err)
    }
  };

  const clickHandler = async e => {
    e.preventDefault();
    try{
      await axios.put(`/api/user/${id}`, details);
      navigate('/home');
    }catch(err){
      console.log('error: '+ err);
    }
  }
    
  return (
    <Form>
    <h1>Update a User</h1>
    <Link to="/home">Go Back Home</Link>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        name="user_fname"
        onChange={changeHandler}
        placeholder="Enter First Name"
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        name="user_lname"
        onChange={changeHandler}
        placeholder="Enter Last Name"
      />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={clickHandler}>
      Update
    </Button>
  </Form>
  )
}

export default EditUser