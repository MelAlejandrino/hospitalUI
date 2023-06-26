<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $doctorsSql = "SELECT * FROM all_doctors";
        $doctorsResult = mysqli_query($conn, $doctorsSql);
        $doctors = mysqli_fetch_all($doctorsResult, MYSQLI_ASSOC);

        $docRegSql = "SELECT * FROM doc_reg";
        $docRegResult = mysqli_query($conn, $docRegSql);
        $docReg = mysqli_fetch_all($docRegResult, MYSQLI_ASSOC);

        $docCallSql = "SELECT * FROM doc_on_call";
        $docCallResult = mysqli_query($conn, $docCallSql);
        $docCall = mysqli_fetch_all($docCallResult, MYSQLI_ASSOC);

        $data = [
            "doctors" => $doctors,
            "docReg" => $docReg,
            "docCall" => $docCall
        ];
        echo json_encode($data);
        break;
    case "DELETE":
        $doctorID = $_GET['doctor_id'];
        $table = $_GET['table'];
        if ($table === 'doc_reg') {
            $sql = "DELETE FROM doc_reg WHERE doctor_id = ? ";
        } else if($table === 'all_doctors') {
            $sql = "DELETE FROM all_doctors WHERE doctor_id = ? ";
        } else if ($table === 'doc_on_call'){
            $sql = "DELETE FROM doc_on_call WHERE doctor_id = ? ";
        }
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $doctorID);
        mysqli_stmt_execute($stmt);

        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record delete failed.'];
        }
        break;
}
