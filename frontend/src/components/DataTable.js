import React from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function DataTable({props}) {
    
    const navigate = useNavigate();
    const goRouteId = (id) => {
     navigate(`/edit/${id}`);
    }  
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
                <tr key={prop.id} onClick={()=> goRouteId(prop.user_id)}>
                    <td value={prop.user_id}  >{prop.user_id}</td>
                    <td>{prop.user_fname}</td>
                    <td>{prop.user_lname}</td>
                </tr>

            ))}
        </tbody>
      </Table>
  );
}

export default DataTable;
