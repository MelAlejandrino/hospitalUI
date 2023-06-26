<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM all_doctors";

        if (isset($_GET['doctor_id'])) {
            $departmentID = $_GET['doctor_id'];
            $sql .= " WHERE doctor_id = ?";
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
    case "PUT":
        $doctorID = $_REQUEST['doctor_id'];
        $formData = json_decode(file_get_contents('php://input'), true);

        $sql = "UPDATE all_doctors SET department_id = ? WHERE doctor_id = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "ss", $formData['department_id'], $doctorID);

        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record update failed.'];
        }

        echo json_encode($response);
        break;
}
