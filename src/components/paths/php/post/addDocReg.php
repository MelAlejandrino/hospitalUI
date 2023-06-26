<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $doctor = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO doc_reg(doctor_id, name, qualification, address, phone_number, salary, date_of_joining) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "sssssss", $doctor->doctor_id, $doctor->name, $doctor->qualification, $doctor->address, $doctor->phone_number, $doctor->salary, $doctor->date_of_joining);
        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record creation failed.'];
        }
        echo json_encode($response);
        break;
}
