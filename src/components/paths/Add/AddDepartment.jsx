import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddDepartment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost/hospital/src/components/paths/php/department.php",
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
  return (
    <div>
        <h1>ADD DEPARTMENT</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="department_id">Department ID</label>
            <input type="text" name='department_id' onChange={handleChange} />

            <label htmlFor="department_name">Department Name</label>
            <input type="text" name='department_name' onChange={handleChange} />

            <label htmlFor="location">Department Location</label>
            <input type="text" name='location' onChange={handleChange} />

            <label htmlFor="facilities">Department Facilities</label>
            <input type="text" name='facilities' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
  )
}

export default AddDepartment