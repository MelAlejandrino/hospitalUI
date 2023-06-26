<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM room_details";
        $result = mysqli_query($conn, $sql);
        $rooms = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($rooms);
        break;
    case "POST":
        $department = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO room_details(room_number, room_type, status, patient_number, patient_name, charges_per_day) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "sssssd", $department->room_number, $department->room_type, $department->status, $department->patient_number, $department->patient_name, $department->charges_per_day);
        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record creation failed.'];
        }
        echo json_encode($response);
        break;
        case "DELETE":
            $sql = "DELETE FROM room_details WHERE room_number = ? ";
            $roomNumber = $_GET['room_number'];
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $roomNumber);
            mysqli_stmt_execute($stmt);
    
            if (mysqli_stmt_execute($stmt)) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Record delete failed.'];
            }
            break;
}
