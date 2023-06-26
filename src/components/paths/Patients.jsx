import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  function getPatients() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/patients.php")
      .then(function (response) {
        console.log(response.data.patentry);
        setPatients(response.data.patentry);
      });
  }

  function handleDelete(patient_number) {
    const table = "pat_entry";
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/patients.php?patient_number=${patient_number}&table=${table}`
      )
      .then(function (response) {
        console.log(response.data);
        getPatients();
      });
  }

  const tableNames = ["Patient Number", "Patient Name", "Age", "Sex", "Address", "City", "Phone Number", "Entry Date", "Doctor Referred", "Diagnosis", "Department Referred"];

  return (
    <div>
      <div>
        <h1>PATIENT ENTRIES</h1>
        <table>
          <thead>
            <tr>
              <th>Patient Number</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Address</th>
              <th>City</th>
              <th>Phone Number</th>
              <th>Entry Date</th>
              <th>Doctor Referred</th>
              <th>Diagnosis</th>
              <th>Department Referred</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, key) => (
              <tr key={key}>
{Object.values(patient).map((value, index) => (
  <td data-label={tableNames[index]} key={index}>{value}</td>
))}

                <td data-label="ACTIONS" className="col-action">
                <Link to={`/EditPatient/${patient.patient_number}`}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(patient.patient_number)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/AddPatientEntry">ADD PATIENT</Link>
      </div>
      <PatAdmit />
      <PatDis />
      <PatOpr />
      <PatCheckup />
      <PatReg />
    </div>
  );
}

function PatAdmit() {
  const [admitted, setAdmitted] = useState([]);

  useEffect(() => {
    getAdmitted();
  }, []);

  function getAdmitted() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/patients.php")
      .then(function (response) {
        console.log(response.data.admitted);
        setAdmitted(response.data.admitted);
      });
  }

  function handleDelete(patient_number) {
    const table = "pat_admit";
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/patients.php?patient_number=${patient_number}&table=${table}`
      )
      .then(function (response) {
        console.log(response.data);
        getAdmitted();
      });
  }

  const tableNames = ["", "Patient Number", "Advance Payment", "Mode of Payment", "Room Number", "Department", "Date of Admission", "Initial Condition", "Diagnosis", "Treatment", "Doctor Number", "Attendant Name"];
  return (
    <div>
      <h1>PATIENT ADMIT</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Advance Payment</th>
            <th>Mode of Payment</th>
            <th>Room Number</th>
            <th>Department</th>
            <th>Date of Admission</th>
            <th>Initial Condition</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Doctor Number</th>
            <th>Attendant Name</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {admitted.map((admit, key) => (
            <tr key={key}>
              {Object.values(admit).map((value, index) => (
                <td data-label={tableNames[index]}key={index}>{value}</td>
              ))}
                <td data-label="ACTIONS" className="col-action">
                  <button onClick={() => handleDelete(admit.patient_number)}>
                    Delete
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddPatientAdmit">ADD PATIENT</Link>
    </div>
  );
}

function PatDis() {
  const [discharged, setDischarged] = useState([]);

  useEffect(() => {
    getDischarged();
  }, []);

  function getDischarged() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/patients.php")
      .then(function (response) {
        console.log(response.data.discharged);
        setDischarged(response.data.discharged);
      });
  }

  function handleDelete(patient_number) {
    const table = "pat_dis";
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/patients.php?patient_number=${patient_number}&table=${table}`
      )
      .then(function (response) {
        console.log(response.data);
        getDischarged();
      });
  }

  const tableNames = ["", "Patient Number", "Treatment Given", "Treatment Advice", "Payment Made", "Mode of Payment", "Date of Discharged"];
  return (
    <div>
      <h1>PATIENT DISCHARGED</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Treatment Given</th>
            <th>Treatment Advice</th>
            <th>Payment Made</th>
            <th>Mode of Payment</th>
            <th>Date of Discharged</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {discharged.map((discharge, key) => (
            <tr key={key}>
              {Object.values(discharge).map((value, index) => (
                <td data-label={tableNames[index]} key={index}>{value}</td>
              ))}
                <td data-label="ACTIONS" className="col-action">
                  <button onClick={() => handleDelete(discharge.patient_number)}>
                    Delete
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddPatientDischarged">ADD PATIENT</Link>
    </div>
  );
}

function PatOpr() {
  const [opr, setOpr] = useState([]);

  useEffect(() => {
    getOpr();
  }, []);

  function getOpr() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/patients.php")
      .then(function (response) {
        console.log(response.data.opr);
        setOpr(response.data.opr);
      });
  }

  function handleDelete(patient_number) {
    const table = "pat_opr";
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/patients.php?patient_number=${patient_number}&table=${table}`
      )
      .then(function (response) {
        console.log(response.data);
        getOpr();
      });
  }
  const tableNames = [
    "Patient Number",
    "Date of Admission",
    "Date of Operation",
    "Doctor Number",
    "Operation Theater Number",
    "Type of Operation",
    "Condition Before",
    "Condition After",
    "Treatment Advice"
  ];
  return (
    <div>
      <h1>PATIENT OPERATION</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Date of Admission</th>
            <th>Date of Operation</th>
            <th>Doctor Number</th>
            <th>Operation Theater Number</th>
            <th>Type of Operation</th>
            <th>Condition Before</th>
            <th>Condition After</th>
            <th>Treatment Advice</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {opr.map((op, key) => (
            <tr key={key}>
              {Object.values(op).map((value, index) => (
                <td data-label={tableNames[index]}key={index}>{value}</td>
              ))}
              <td data-label="ACTIONS" className="col-action">
                <button onClick={() => handleDelete(op.patient_number)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddPatientOperation">ADD PATIENT</Link>
    </div>
  );
}

function PatCheckup() {
  const [chkup, setChkup] = useState([]);

  useEffect(() => {
    getChkup();
  }, []);

  function getChkup() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/patients.php")
      .then(function (response) {
        console.log(response.data.checkup);
        setChkup(response.data.checkup);
      });
  }

  function handleDelete(patient_number) {
    const table = "pat_chkup";
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/patients.php?patient_number=${patient_number}&table=${table}`
      )
      .then(function (response) {
        console.log(response.data);
        getChkup();
      });
  }

  const tableNames = ["Patient Number", "Doctor ID", "Date of Checkup", "Diagnosis", "Treatment", "Status"];
  return (
    <div>
      <h1>PATIENT CHECKUP</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Doctor ID</th>
            <th>Date of Checkup</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Status</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {chkup.map((chk, key) => (
            <tr key={key}>
              {Object.values(chk).map((value, index) => (
                <td data-label={tableNames[index]} key={index}>{value}</td>
              ))}
                <td data-label="ACTIONS" className="col-action">
                  <button onClick={() => handleDelete(chk.patient_number)}>
                    Delete
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddPatientCheckup">ADD PATIENT</Link>
    </div>
  );
}

function PatReg() {
  const [patreg, setPatReg] = useState([]);

  useEffect(() => {
    getPatReg();
  }, []);

  function getPatReg() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/patients.php")
      .then(function (response) {
        console.log(response.data.patreg);
        setPatReg(response.data.patreg);
      });
  }

  function handleDelete(patient_number) {
    const table = "pat_reg";
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/patients.php?patient_number=${patient_number}&table=${table}`
      )
      .then(function (response) {
        console.log(response.data);
        getPatReg();
      });
  }

  const tableNames = ["Patient Number", "Date of Visit", "Diagnosis", "Treatment", "Medicine Recommended", "Treatment Status"];
  return (
    <div>
      <h1>PATIENT REGULAR</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Date of Visit</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Medicine Recommended</th>
            <th>Treatment Status</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {patreg.map((pat, key) => (
            <tr key={key}>
              {Object.values(pat).map((value, index) => (
                <td data-label={tableNames[index]}key={index}>{value}</td>
              ))}
                <td data-label="ACTIONS" className="col-action">
                  <button onClick={() => handleDelete(pat.patient_number)}>
                    Delete
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddPatientReg">ADD PATIENT</Link>
    </div>
  );
}

export default Patients;
