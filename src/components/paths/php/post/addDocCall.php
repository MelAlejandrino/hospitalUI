<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $doctor = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO doc_on_call(doctor_id, name, qualification,fees_per_call, payment_due, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "sssssss", $doctor->doctor_id, $doctor->name, $doctor->qualification,$doctor->fees_per_call,$doctor->payment_due, $doctor->address, $doctor->phone_number);
        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record creation failed.'];
        }
        echo json_encode($response);
        break;
}
