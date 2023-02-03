import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


function EditUser() {

    const [details, setDetails] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(()=> {
      fetch("/api/user/:userId", {
          method: "PUT",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(details),
        }).then(function (response) {
          // console.log(response);
          return response.json();
        });
      
    },[details]);

    console.log(details);
  
    
    const formHandler = (event) => {
        event.preventDefault();
        setDetails({"user_fname":firstName, "user_lname":lastName});
        console.log(firstName);
        console.log(lastName);
      };
    
  return (
    <Form onSubmit={formHandler}>
    <h1>Edit a User</h1>
    <Link to="/home">Go Back Home</Link>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        value={firstName}
        name="first_name"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name"
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        value={lastName}
        name="last_name"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name"
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Add
    </Button>
  </Form>
  )
}

export default EditUser