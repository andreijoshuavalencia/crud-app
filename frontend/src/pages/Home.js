import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import { Button } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("/api/user");
        setBackendData(res.data.allUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAll();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <Link to="/add"><Button className="mb-3" variant="info">Add a user</Button></Link>
      {!backendData ? (
        <h5>No Data Available</h5>
      ) : (
        <DataTable props={backendData} />
      )}
    </div>
  );
}

export default Home;
