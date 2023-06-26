import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  function getDepartments() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/department.php")
      .then(function (response) {
        console.log(response.data);
        setDepartments(response.data);
      });
  }

  function handleDelete(department_id){
    axios.delete(`http://localhost/hospital/src/components/paths/php/department.php?department_id=${department_id}`)
    .then(function(response){
      console.log(response.data);
      getDepartments();
    })
  }

  return (
    <div>
      <h1>DEPARTMENTS</h1>
      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Department Location</th>
            <th>Department Facilities</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, key) => {
            return (
              <tr key={key}>
                <td data-label="Department ID">{department.department_id}</td>
                <td data-label="Department Name">{department.department_name}</td>
                <td data-label="Department Location">{department.location}</td>
                <td data-label="Department Facilities">{department.facilities}</td>
                <td data-label="ACTIONS" className="col-action">
                <Link to={`/EditDepartment/${department.department_id}`}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(department.department_id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/AddDepartment">ADD DEPARTMENT</Link>
    </div>
  );
}

export default Departments;
