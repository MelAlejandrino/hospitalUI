import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './paths/Home'
import Doctors from './paths/Doctors'
import Patients from './paths/Patients'
import Departments from './paths/Departments'
import Rooms from './paths/Rooms'
import AddDepartment from './paths/Add/AddDepartment'
import { AddDoctor, AddDoctorCall, AddDoctorReg } from './paths/Add/AddDoctor'
import { AddPatientAdmit, AddPatientCheckup, AddPatientDischarged, AddPatientEntry, AddPatientOperation, AddPatientReg } from './paths/Add/AddPatient'
import AddRoom from './paths/Add/AddRoom'
import EditDepartment from './paths/Edit/EditDepartment'
import EditDoctor from './paths/Edit/EditDoctor'
import EditPatient from './paths/Edit/EditPatient'
function Dashboard() {
  return (
    <div className='dashboard'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Doctors' element={<Doctors />} />
            <Route path="/Patients" element={<Patients />} />
            <Route path="/Departments" element={<Departments />} />
            <Route path="/Rooms" element={<Rooms />} />

            {/* ADD */}
            <Route path='/AddDepartment' element={<AddDepartment />} />
            <Route path='/AddRoom' element={<AddRoom />} />

            {/* DOCTORS */}
            <Route path='/AddDoctor' element={<AddDoctor />} />
            <Route path='/AddDoctorReg' element={<AddDoctorReg />} />
            <Route path='/AddDoctorCall' element={<AddDoctorCall />} />

            {/* PATIENTS */}
            <Route path='/AddPatientEntry' element={<AddPatientEntry />} />
            <Route path='/AddPatientAdmit' element={<AddPatientAdmit />} />
            <Route path='/AddPatientDischarged' element={<AddPatientDischarged />} />
            <Route path='/AddPatientOperation' element={<AddPatientOperation />} />
            <Route path='/AddPatientCheckup' element={<AddPatientCheckup />} />
            <Route path='/AddPatientReg' element={<AddPatientReg />} />

            {/* EDIT */}
            <Route path='/EditDepartment/:department_id' element={<EditDepartment />} />
            <Route path='/EditDoctor/:doctor_id' element={<EditDoctor />} />
            <Route path='/EditPatient/:patient_number' element={<EditPatient />} />
        </Routes>
    </div>
  )
}

export default Dashboard