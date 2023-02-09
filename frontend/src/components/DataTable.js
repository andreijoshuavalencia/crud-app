import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function DataTable({props}) {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/user/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(props[2].hobbies.length)

  return (
    <Table striped bordered hover responsive="sm" className="text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Hobbies</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.id}>
            <td><Link to={`/user/${prop.user_id}`}>{prop.user_id}</Link></td>
            <td>{prop.user_fname}</td>
            <td>{prop.user_lname}</td>
            <td>{prop.address}</td>
            <td>{prop.age}</td>
            <td>{prop.hobbies}</td>
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
