import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function DataTable({ props }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/user/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.id}>
            <td data-value={prop.user_id}>{prop.user_id}</td>
            <td>{prop.user_fname}</td>
            <td>{prop.user_lname}</td>
            <td>
              <Link to={`/edit/${prop.user_id}`}>
                <Button className="px-3 mx-3">Update</Button>
              </Link>
              <Button
                className="px-3"
                variant="danger"
                onClick={() => handleDelete(prop.user_id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
