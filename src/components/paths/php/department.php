<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM department";

        if (isset($_GET['department_id'])) {
            $departmentID = $_GET['department_id'];
            $sql .= " WHERE department_id = ?";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $departmentID);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $department = mysqli_fetch_assoc($result);
        } else {
            $result = mysqli_query($conn, $sql);
            $department = mysqli_fetch_all($result, MYSQLI_ASSOC);
        }

        echo json_encode($department);
        break;
    case "POST":
        $department = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO department(department_id, department_name, location, facilities) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "isss", $department->department_id, $department->department_name, $department->location, $department->facilities);
        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record creation failed.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM department WHERE department_id = ? ";
        $departmentID = $_GET['department_id'];
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "i", $departmentID);
        mysqli_stmt_execute($stmt);

        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record delete failed.'];
        }
        break;
    case "PUT":
        $departmentID = $_REQUEST['department_id'];
        $formData = json_decode(file_get_contents('php://input'), true);

        $sql = "UPDATE department SET department_name = ?, location = ?, facilities = ? WHERE department_id = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "ssss", $formData['department_name'], $formData['location'], $formData['facilities'], $departmentID);

        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record update failed.'];
        }

        echo json_encode($response);
        break;
}
