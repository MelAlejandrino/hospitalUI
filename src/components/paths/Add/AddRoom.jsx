import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddRoom() {
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
        "http://localhost/hospital/src/components/paths/php/rooms.php",
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
  return (
    <div>
        <h1>ADD ROOM</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="room_number">room_number </label>
            <input type="text" name='room_number' onChange={handleChange} />

            <label htmlFor="room_type">room_type </label>
            <input type="text" name='room_type' onChange={handleChange} />

            <label htmlFor="status">status </label>
            <input type="text" name='status' onChange={handleChange} />

            <label htmlFor="patient_number">patient_number </label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="patient_name">patient_name </label>
            <input type="text" name='patient_name' onChange={handleChange} />

            <label htmlFor="charges_per_day">charges_per_day </label>
            <input type="text" name='charges_per_day' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
  )
}

export default AddRoom