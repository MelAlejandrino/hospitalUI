import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
        <ul role='list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Departments">Departments</Link></li>
            <li><Link to="/Doctors">Doctors</Link></li>
            <li><Link to="/Patients">Patients</Link></li>
            <li><Link to="/Rooms">Rooms</Link></li>
        </ul>
    </nav>
  )
}

export default Sidebar