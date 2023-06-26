import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  function getDoctors() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/doctors.php")
      .then(function (response) {
        console.log(response.data.doctors);
        setDoctors(response.data.doctors);
      });
  }

  function handleDelete(doctor_id){
    const table = 'all_doctors';
    axios.delete(`http://localhost/hospital/src/components/paths/php/doctors.php?doctor_id=${doctor_id}&table=${table}`)
    .then(function(response) {
      console.log(response.data);
      getDoctors();
    });
  }

  return (
    <div>
      <div>
        <h1>ALL DOCTORS</h1>
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Department ID</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, key) => {
              return (
                <tr key={key}>
                  <td data-label="Doctor ID">{doctor.doctor_id}</td>
                  <td data-label="Department ID">{doctor.department_id}</td>
                  <td data-label="ACTIONS" className="col-action">
                  <Link to={`/EditDoctor/${doctor.doctor_id}`}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(doctor.doctor_id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/AddDoctor">ADD DOCTOR</Link>
      </div>

      <DocReg />
      <DocCall />
    </div>
  );
}

function DocReg() {
  const [doctorRegs, setDoctorRegs] = useState([]);

  useEffect(() => {
    getDoctorRegs();
  }, []);

  function getDoctorRegs() {

    axios
      .get("http://localhost/hospital/src/components/paths/php/doctors.php")
      .then(function (response) {
        console.log(response.data.docReg);
        setDoctorRegs(response.data.docReg);
      });
  }

  function handleDelete(doctor_id){
    const table = 'doc_reg';
    axios.delete(`http://localhost/hospital/src/components/paths/php/doctors.php?doctor_id=${doctor_id}&table=${table}`)
    .then(function(response) {
      console.log(response.data);
      getDoctorRegs();
    });
  }
  return (
    <div>
      <div>
        <h1>REGULAR DOCTORS</h1>
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Doctor Qualification</th>
              <th>Doctor Address</th>
              <th>Phone Number</th>
              <th>Salary</th>
              <th>Date of Joining</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {doctorRegs.map((doctorReg, key) => {
              return (
                <tr key={key}>
                  <td data-label="Doctor ID">{doctorReg.doctor_id}</td>
                  <td data-label="Doctor Name">{doctorReg.name}</td>
                  <td data-label="Doctor Qualification">{doctorReg.qualification}</td>
                  <td data-label="Doctor Address">{doctorReg.address}</td>
                  <td data-label="Phone Number">{doctorReg.phone_number}</td>
                  <td data-label="Salary">{doctorReg.salary}</td>
                  <td data-label="Date of Joining">{doctorReg.date_of_joining}</td>
                  <td data-label="ACTION" className="col-action">
                    <button onClick={() => handleDelete(doctorReg.doctor_id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/AddDoctorReg">ADD DOCTOR</Link>
      </div>
    </div>
  );
}

function DocCall(){
  const [doctorCall, setDoctorCall] = useState([]);

  useEffect(() => {
    getDoctorCall();
  }, []);

  function getDoctorCall() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/doctors.php")
      .then(function (response) {
        console.log(response.data.docCall);
        setDoctorCall(response.data.docCall);
      });
  }

  function handleDelete(doctor_id){
    const table = 'doc_on_call';
    axios.delete(`http://localhost/hospital/src/components/paths/php/doctors.php?doctor_id=${doctor_id}&table=${table}`)
    .then(function(response) {
      console.log(response.data);
      getDoctorCall();
    });
  }
  return(
    <div>
    <div>
      <h1>DOCTORS ON CALL</h1>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Doctor Qualification</th>
            <th>Fees per Call</th>
            <th>Payment Due</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {doctorCall.map((doc, key) => {
            return (
              <tr key={key}>
                <td data-label="Doctor ID">{doc.doctor_id}</td>
                <td data-label="Doctor Name">{doc.name}</td>
                <td data-label="Qualification">{doc.qualification}</td>
                <td data-label="Fees per Call">{doc.fees_per_call}</td>
                <td data-label="Payment Due">{doc.payment_due}</td>
                <td data-label="Address">{doc.address}</td>
                <td data-label="Phone Number">{doc.phone_number}</td>
                <td data-label="ACTION" className="col-action">
                    <button onClick={() => handleDelete(doc.doctor_id)}>Delete</button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/AddDoctorCall">ADD DOCTOR</Link>
    </div>
  </div>
  )
}

export default Doctors;
