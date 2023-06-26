import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddDoctor(){
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
        "http://localhost/hospital/src/components/paths/php/post/addDoctors.php",
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD DOCTOR</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="doctor_id">Doctor ID</label>
            <input type="text" name='doctor_id' onChange={handleChange} />

            <label htmlFor="department_id">Department ID</label>
            <input type="text" name='department_id' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddDoctorReg(){
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
        "http://localhost/hospital/src/components/paths/php/post/addDocReg.php",
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD REGULAR DOCTOR</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="doctor_id">Doctor ID</label>
            <input type="text" name='doctor_id' onChange={handleChange} />

            <label htmlFor="name">Doctor Name</label>
            <input type="text" name='name' onChange={handleChange} />

            <label htmlFor="qualification">Doctor Qualification</label>
            <input type="text" name='qualification' onChange={handleChange} />

            <label htmlFor="address">Address</label>
            <input type="text" name='address' onChange={handleChange} />

            <label htmlFor="phone_number">Phone Number</label>
            <input type="text" name='phone_number' onChange={handleChange} />

            <label htmlFor="salary">Salary</label>
            <input type="text" name='salary' onChange={handleChange} />

            <label htmlFor="date_of_joining">Date of Joining</label>
            <input type="text" name='date_of_joining' onChange={handleChange} />  

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddDoctorCall(){
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
        "http://localhost/hospital/src/components/paths/php/post/addDocCall.php",
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD DOCTOR ON CALL</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="doctor_id">Doctor ID</label>
            <input type="text" name='doctor_id' onChange={handleChange} />

            <label htmlFor="name">Doctor Name</label>
            <input type="text" name='name' onChange={handleChange} />

            <label htmlFor="qualification">Doctor Qualification</label>
            <input type="text" name='qualification' onChange={handleChange} />

            <label htmlFor="fees_per_call">Fees per Call</label>
            <input type="text" name='fees_per_call' onChange={handleChange} />

            <label htmlFor="payment_due">Payment Due</label>
            <input type="text" name='payment_due' onChange={handleChange} />  

            <label htmlFor="address">Address</label>
            <input type="text" name='address' onChange={handleChange} />

            <label htmlFor="phone_number">Phone Number</label>
            <input type="text" name='phone_number' onChange={handleChange} />
            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

export { AddDoctor, AddDoctorReg, AddDoctorCall };