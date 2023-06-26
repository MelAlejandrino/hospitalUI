import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddPatientEntry(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    const table = 'pat_entry';
    event.preventDefault();

    axios
      .post(
        `http://localhost/hospital/src/components/paths/php/patients.php?table=${table}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD PATIENT ENTRY</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="patient_number">Patient Number</label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="name">Patient Name</label>
            <input type="text" name='name' onChange={handleChange} />

            <label htmlFor="age">Age</label>
            <input type="text" name='age' onChange={handleChange} />

            <label htmlFor="sex">Sex</label>
            <input type="text" name='sex' onChange={handleChange} />

            <label htmlFor="address">Address</label>
            <input type="text" name='address' onChange={handleChange} />  

            <label htmlFor="city">City</label>
            <input type="text" name='city' onChange={handleChange} />

            <label htmlFor="phone_number">Phone Number</label>
            <input type="text" name='phone_number' onChange={handleChange} />
            
            <label htmlFor="entry_date">entry_date</label>
            <input type="text" name='entry_date' onChange={handleChange} />

            
            <label htmlFor="doctor_referred">doctor_referred</label>
            <input type="text" name='doctor_referred' onChange={handleChange} />

            
            <label htmlFor="diagnosis">diagnosis</label>
            <input type="text" name='diagnosis' onChange={handleChange} />

            
            <label htmlFor="department_referred">department_referred</label>
            <input type="text" name='department_referred' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddPatientAdmit(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    const table = 'pat_admit';
    event.preventDefault();

    axios
      .post(
        `http://localhost/hospital/src/components/paths/php/patients.php?table=${table}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD PATIENT ADMIT</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="patient_number">Patient Number</label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="advance_payment">advance_payment</label>
            <input type="text" name='advance_payment' onChange={handleChange} />

            <label htmlFor="mode_of_payment">mode_of_payment</label>
            <input type="text" name='mode_of_payment' onChange={handleChange} />

            <label htmlFor="room_number">room_number</label>
            <input type="text" name='room_number' onChange={handleChange} />

            <label htmlFor="department">department</label>
            <input type="text" name='department' onChange={handleChange} />  

            <label htmlFor="date_of_admission">date_of_admission</label>
            <input type="text" name='date_of_admission' onChange={handleChange} />

            <label htmlFor="initial_condition">initial_condition</label>
            <input type="text" name='initial_condition' onChange={handleChange} />
            
            <label htmlFor="diagnosis">diagnosis</label>
            <input type="text" name='diagnosis' onChange={handleChange} />

            <label htmlFor="treatment">treatment</label>
            <input type="text" name='treatment' onChange={handleChange} />

            
            <label htmlFor="doctor_number">doctor_number</label>
            <input type="text" name='doctor_number' onChange={handleChange} />

            


            
            <label htmlFor="attendant_name">attendant_name</label>
            <input type="text" name='attendant_name' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddPatientDischarged(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    const table = 'pat_dis';
    event.preventDefault();

    axios
      .post(
        `http://localhost/hospital/src/components/paths/php/patients.php?table=${table}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD PATIENT DISCHARGED</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="patient_number">Patient Number</label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="treatment_given">treatment_given</label>
            <input type="text" name='treatment_given' onChange={handleChange} />

            <label htmlFor="treatment_advice">treatment_advice</label>
            <input type="text" name='treatment_advice' onChange={handleChange} />

            <label htmlFor="payment_made">payment_made</label>
            <input type="text" name='payment_made' onChange={handleChange} />

            <label htmlFor="mode_of_payment">mode_of_payment</label>
            <input type="text" name='mode_of_payment' onChange={handleChange} />

            <label htmlFor="date_of_discharge">date_of_discharge</label>
            <input type="text" name='date_of_discharge' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddPatientOperation(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    const table = 'pat_opr';
    event.preventDefault();

    axios
      .post(
        `http://localhost/hospital/src/components/paths/php/patients.php?table=${table}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD PATIENT OPERATION</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="patient_number">Patient Number</label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="date_of_admission">date_of_admission</label>
            <input type="text" name='date_of_admission' onChange={handleChange} />

            <label htmlFor="date_of_operation">date_of_operation</label>
            <input type="text" name='date_of_operation' onChange={handleChange} />

            <label htmlFor="doctor_number">doctor_number</label>
            <input type="text" name='doctor_number' onChange={handleChange} />

            <label htmlFor="operation_theater_number">operation_theater_number</label>
            <input type="text" name='operation_theater_number' onChange={handleChange} />

            <label htmlFor="type_of_operation">type_of_operation</label>
            <input type="text" name='type_of_operation' onChange={handleChange} />

            <label htmlFor="patient_condition_before">patient_condition_before</label>
            <input type="text" name='patient_condition_before' onChange={handleChange} />

            <label htmlFor="patient_condition_after">patient_condition_after</label>
            <input type="text" name='patient_condition_after' onChange={handleChange} />

            <label htmlFor="treatment_advice">treatment_advice</label>
            <input type="text" name='treatment_advice' onChange={handleChange} />


            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddPatientCheckup(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    const table = 'pat_chkup';
    event.preventDefault();

    axios
      .post(
        `http://localhost/hospital/src/components/paths/php/patients.php?table=${table}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD PATIENT CHECKUP</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="patient_number">Patient Number</label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="doctor_id">doctor_id</label>
            <input type="text" name='doctor_id' onChange={handleChange} />

            <label htmlFor="date_of_checkup">date_of_checkup</label>
            <input type="text" name='date_of_checkup' onChange={handleChange} />

            <label htmlFor="diagnosis">diagnosis</label>
            <input type="text" name='diagnosis' onChange={handleChange} />

            <label htmlFor="treatment">treatment</label>
            <input type="text" name='treatment' onChange={handleChange} />

            <label htmlFor="status">status</label>
            <input type="text" name='status' onChange={handleChange} />


            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

function AddPatientReg(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((values) => ({ ...values, [name]: value }));
    };

    
  const handleSubmit = (event) => {
    const table = 'pat_reg';
    event.preventDefault();

    axios
      .post(
        `http://localhost/hospital/src/components/paths/php/patients.php?table=${table}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  };
return(
    <div>
        <h1>ADD PATIENT REGULAR</h1>
        <form method='post' onSubmit={handleSubmit}>
            <label htmlFor="patient_number">Patient Number</label>
            <input type="text" name='patient_number' onChange={handleChange} />

            <label htmlFor="date_of_visit">date_of_visit</label>
            <input type="text" name='date_of_visit' onChange={handleChange} />

            <label htmlFor="diagnosis">diagnosis</label>
            <input type="text" name='diagnosis' onChange={handleChange} />

            <label htmlFor="treatment">treatment</label>
            <input type="text" name='treatment' onChange={handleChange} />

            <label htmlFor="medicine_recommended">medicine_recommended</label>
            <input type="text" name='medicine_recommended' onChange={handleChange} />

            <label htmlFor="treatment_status">treatment_status</label>
            <input type="text" name='treatment_status' onChange={handleChange} />

            <button type='submit'> SUBMIT </button>
        </form>
    </div>
)
}

export { AddPatientEntry, AddPatientAdmit, AddPatientDischarged, AddPatientOperation, AddPatientCheckup, AddPatientReg };