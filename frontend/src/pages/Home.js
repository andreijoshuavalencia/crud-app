import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";

function Home() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.allUser);
      });
  }, []);

  return (
    <div>
      <Link to='/add'>Add a user</Link>
      {typeof backendData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <DataTable props={backendData} />
      )}
    </div>
    // hello
  );
}

export default Home;
