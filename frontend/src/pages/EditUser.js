import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState([
    {
      user_fname: "",
      user_lname: "",
    },
  ]);

  const id = location.pathname.split("/")[2];

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
      await axios.put(`/api/user/${id}`, details);
      navigate("/home");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <Form>
      <h1>Update a User</h1>
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
        className="px-5"
        variant="primary"
        type="submit"
        onClick={clickHandler}
      >
        Update
      </Button>
    </Form>
  );
}

export default EditUser;
