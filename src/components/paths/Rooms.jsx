import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  function getRooms() {
    axios
      .get("http://localhost/hospital/src/components/paths/php/rooms.php")
      .then(function (response) {
        console.log(response.data);
        setRooms(response.data);
      });
  }

  function handleDelete(room_number) {
    axios
      .delete(
        `http://localhost/hospital/src/components/paths/php/rooms.php?room_number=${room_number}`
      )
      .then(function (response) {
        console.log(response.data);
        getRooms();
      });
  }

  useEffect(() => {
    getRooms();
  }, []);

  const tableNames = ["Room Number", "Room Type", "Status", "Patient Number", "Patient Name", "Charges Per Day"];
  return (
    <div className="tableContainer">
      <h1>ROOM DETAILS</h1>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Status</th>
            <th>Patient Number</th>
            <th>Patient Name</th>
            <th>Charges Per Day</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, key) => (
            <tr key={key}>
              {Object.values(room).map((value, index) => (
                <td data-label={tableNames[index]} key={index}>{value}</td>
              ))}
              <td data-label="ACTIONS" className="col-action">
                <button onClick={() => handleDelete(room.room_number)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddRoom">ADD ROOM</Link>
    </div>
  );
}

export default Rooms;
