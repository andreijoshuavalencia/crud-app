import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

function AddUser() {
  const [details, setDetails] = useState([
    {
      user_fname: "",
      user_lname: "",
    },
  ]);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    event.preventDefault();
    try {
      setDetails((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/user", details);
      navigate("/home");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <Form>
      <h1>Create a User</h1>
      <Link to="/home">Go Back Home</Link>
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            // value={firstName}
            name="user_fname"
            onChange={changeHandler}
            placeholder="Enter First Name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            // value={lastName}
            name="user_lname"
            onChange={changeHandler}
            placeholder="Enter Last Name"
          />
        </Col>
      </Form.Group>
      <Button
        className="px-5 text-center"
        variant="primary"
        type="submit"
        onClick={clickHandler}
      >
        Add
      </Button>
    </Form>
  );
}

export default AddUser;
