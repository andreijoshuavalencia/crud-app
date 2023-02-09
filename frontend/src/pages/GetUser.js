import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

function GetUser() {
  const [backendData, setBackendData] = useState([{}]);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get(`/api/user/${id}`);
        // console.log(res.data.user);
        setBackendData(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAll();
  }, [id]);

  return (
    <div>
      <h1>User #{backendData.user_id}</h1>
      <h3>
        Name: {backendData.user_fname} {backendData.user_lname}
      </h3>
      <h3>Age: {backendData.age}</h3>
      <h3>Address: {backendData.address}</h3>
      <h3>Hobbies: {backendData.hobbies}</h3>
      <Link to={`/home`}>
        <Button className="" variant="secondary">
          Back Home
        </Button>
      </Link>
    </div>
  );
}

export default GetUser;
