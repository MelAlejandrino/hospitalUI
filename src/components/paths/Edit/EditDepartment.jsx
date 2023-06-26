import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditDepartment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const { department_id } = useParams();

  useEffect(() => {
    getDepartment();
  }, [department_id]);

  function getDepartment() {
    axios
      .get(
        `http://localhost/hospital/src/components/paths/php/department.php?department_id=${department_id}`
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
        `http://localhost/hospital/src/components/paths/php/department.php?department_id=${department_id}`,
        formData
      )
      .then(function (response) {
        console.log(response.data);
        navigate("/Departments");
      });
  };
  return (
    <div>
      <h1>EDIT DEPARTMENT</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="department_id">Department ID</label>
        <input
          value={formData.department_id}
          type="text"
          name="department_id"
          onChange={handleChange}
          disabled
        />

        <label htmlFor="department_name">Department Name</label>
        <input
          value={formData.department_name}
          type="text"
          name="department_name"
          onChange={handleChange}
        />

        <label htmlFor="location">Department Location</label>
        <input
          value={formData.location}
          type="text"
          name="location"
          onChange={handleChange}
        />

        <label htmlFor="facilities">Department Facilities</label>
        <input
          value={formData.facilities}
          type="text"
          name="facilities"
          onChange={handleChange}
        />

        <button type="submit"> SUBMIT </button>
      </form>
    </div>
  );
}

export default EditDepartment;
