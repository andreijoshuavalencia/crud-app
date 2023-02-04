import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import axios from "axios";

function Home() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("/api/user");
        console.log(res.data.allUser);
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
      <Link to="/add">Add a user</Link>
      {typeof backendData === "undefined" ? (
        <h5>No Data Available</h5>
      ) : (
        <DataTable props={backendData} />
      )}
    </div>
    // hello
  );
}

export default Home;
