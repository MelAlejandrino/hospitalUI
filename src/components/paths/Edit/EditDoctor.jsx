import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditDoctor() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const { doctor_id } = useParams();

  useEffect(() => {
    getDepartment();
  }, [doctor_id]);

  function getDepartment() {
    axios
      .get(
        `http://localhost/hospital/src/components/paths/php/editdoctor.php?doctor_id=${doctor_id}`
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
        `http://localhost/hospital/src/components/paths/php/editdoctor.php?doctor_id=${doctor_id}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate("/Doctors");
      });
  };
  return (
    <div>
      <h1>EDIT DOCTOR</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="doctor_id">Doctor ID</label>
        <input
          value={formData.doctor_id}
          type="text"
          name="doctor_id"
          onChange={handleChange}
          disabled
        />

        <label htmlFor="department_id">Department ID</label>
        <input
          value={formData.department_id}
          type="text"
          name="department_id"
          onChange={handleChange}
        />

        <button type="submit"> SUBMIT </button>
      </form>
    </div>
  );
}

export default EditDoctor;
