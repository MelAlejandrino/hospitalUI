import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPatient() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const { patient_number } = useParams();

  useEffect(() => {
    getPatient();
  }, [patient_number]);

  function getPatient() {
    axios
      .get(
        `http://localhost/hospital/src/components/paths/php/editpatient.php?patient_number=${patient_number}`
      )
      .then(function (response) {
        console.log(response.data);
        setFormData(response.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(
        `http://localhost/hospital/src/components/paths/php/editpatient.php?patient_number=${patient_number}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate("/Patients");
      });
  };
  return (
    <div>
      <h1>EDIT PATIENT</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="doctor_id">Patient Number</label>
        <input
          value={formData.patient_number}
          type="text"
          name="patient_number"
          onChange={handleChange}
          disabled
        />

        <label htmlFor="department_id">Patient Name</label>
        <input
          value={formData.name}
          type="text"
          name="name"
          onChange={handleChange}
        />

<label htmlFor="age">Patient Age</label>
<input
          value={formData.age}
          type="text"
          name="age"
          onChange={handleChange}
        />
        <label htmlFor="sex">Sex</label>
<input
          value={formData.sex}
          type="text"
          name="sex"
          onChange={handleChange}
        />
        <label htmlFor="address">Patient address</label>
<input
          value={formData.address}
          type="text"
          name="address"
          onChange={handleChange}
        />

<label htmlFor="city">Patient city</label>
<input
          value={formData.city}
          type="text"
          name="city"
          onChange={handleChange}
        />

<label htmlFor="phone_number">Patient phone_number</label>
<input
          value={formData.phone_number}
          type="text"
          name="phone_number"
          onChange={handleChange}
        />

<label htmlFor="entry_date">Patient entry_date</label>
<input
          value={formData.entry_date}
          type="text"
          name="entry_date"
          onChange={handleChange}
        />

<label htmlFor="doctor_referred">doctor_referred</label>
<input
          value={formData.doctor_referred}
          type="text"
          name="doctor_referred"
          onChange={handleChange}
        />

<label htmlFor="diagnosis">diagnosis</label>
<input
          value={formData.diagnosis}
          type="text"
          name="diagnosis"
          onChange={handleChange}
        />

<label htmlFor="department_referred">department_referred</label>
<input
          value={formData.department_referred}
          type="text"
          name="department_referred"
          onChange={handleChange}
        />

        <button type="submit"> SUBMIT </button>
      </form>
    </div>
  );
}

export default EditPatient;
