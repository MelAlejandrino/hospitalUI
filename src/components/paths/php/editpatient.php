<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM pat_entry";

        if (isset($_GET['patient_number'])) {
            $departmentID = $_GET['patient_number'];
            $sql .= " WHERE patient_number = ?";
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
        $patient_number = $_REQUEST['patient_number'];
        $formData = json_decode(file_get_contents('php://input'), true);

        $sql = "UPDATE pat_entry SET name = ?, age = ?, address = ?, city = ?, phone_number = ?, entry_date = ?, doctor_referred = ?, diagnosis = ?, department_referred = ? WHERE patient_number = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "ssssssssss", $formData['name'], $formData['age'], $formData['address'], $formData['city'], $formData['phone_number'], $formData['entry_date'], $formData['doctor_referred'], $formData['diagnosis'], $formData['department_referred'], $patient_number);


        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record update failed.'];
        }

        echo json_encode($response);
        break;
}
