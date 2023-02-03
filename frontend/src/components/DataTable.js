import React from "react";
import { Table } from "react-bootstrap";

function DataTable({props}) {
    console.log({props})
  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
            {props.map((prop)=>(
                <tr key={prop.id}>
                    <td >{prop.user_id}</td>
                    <td>{prop.user_fname}</td>
                    <td>{prop.user_lname}</td>
                </tr>
            ))}
        </tbody>
      </Table>
  );
}

export default DataTable;
