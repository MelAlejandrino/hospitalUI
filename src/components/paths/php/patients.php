<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $patentrySql = "SELECT * FROM pat_entry";
        $patentryResult = mysqli_query($conn, $patentrySql);
        $patentry = mysqli_fetch_all($patentryResult, MYSQLI_ASSOC);

        $admittedSql = "SELECT * FROM pat_admit";
        $admittedResult = mysqli_query($conn, $admittedSql);
        $admitted = mysqli_fetch_all($admittedResult, MYSQLI_ASSOC);

        $dischargedSql = "SELECT * FROM pat_dis";
        $dischargedResult = mysqli_query($conn, $dischargedSql);
        $discharged = mysqli_fetch_all($dischargedResult, MYSQLI_ASSOC);

        $checkupSql = "SELECT * FROM pat_chkup";
        $checkupResult = mysqli_query($conn, $checkupSql);
        $checkup = mysqli_fetch_all($checkupResult, MYSQLI_ASSOC);

        $oprSql = "SELECT * FROM pat_opr";
        $oprResult = mysqli_query($conn, $oprSql);
        $opr = mysqli_fetch_all($oprResult, MYSQLI_ASSOC);

        $patregSql = "SELECT * FROM pat_reg";
        $patregResult = mysqli_query($conn, $patregSql);
        $patreg = mysqli_fetch_all($patregResult, MYSQLI_ASSOC);


        $data = [
            "patentry" => $patentry,
            "admitted" => $admitted,
            "discharged" => $discharged,
            "checkup" => $checkup,
            "opr" => $opr,
            "patreg" => $patreg
        ];

        echo json_encode($data);
        break;

    case "POST":
        $table = $_GET['table'];
        $patient = json_decode(file_get_contents('php://input'));
        if ($table === 'pat_entry') {
            $sql = "INSERT INTO pat_entry (patient_number, name, age, sex, address, city, phone_number, entry_date, doctor_referred, diagnosis, department_referred) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ssssssssssi", $patient->patient_number, $patient->name, $patient->age, $patient->sex, $patient->address, $patient->city, $patient->phone_number, $patient->entry_date, $patient->doctor_referred, $patient->diagnosis, $patient->department_referred);
        } else if ($table === 'pat_admit') {
            $sql = "INSERT INTO pat_admit (patient_number, advance_payment, mode_of_payment, room_number, department, date_of_admission, initial_condition, diagnosis, treatment, doctor_number, attendant_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "sdssissssss", $patient->patient_number, $patient->advance_payment, $patient->mode_of_payment, $patient->room_number, $patient->department, $patient->date_of_admission, $patient->initial_condition, $patient->diagnosis, $patient->treatment, $patient->doctor_number, $patient->attendant_name);
        }else if ($table === 'pat_dis') {
            $sql = "INSERT INTO pat_dis (patient_number, treatment_given, treatment_advice, payment_made, mode_of_payment, date_of_discharge) VALUES (?,?,?,?,?,?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "sssdss", $patient->patient_number, $patient->treatment_given, $patient->treatment_advice, $patient->payment_made, $patient->mode_of_payment, $patient->date_of_discharge);
        }else if ($table === 'pat_opr') {
            $sql = "INSERT INTO pat_opr (patient_number,date_of_admission, date_of_operation, doctor_number, operation_theater_number, type_of_operation, patient_condition_before, patient_condition_after, treatment_advice) VALUES (?,?,?,?,?,?,?,?,?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ssssissss", $patient->patient_number, $patient->date_of_admission, $patient->date_of_operation, $patient->doctor_number, $patient->operation_theater_number, $patient->type_of_operation, $patient->patient_condition_before, $patient->patient_condition_after, $patient->treatment_advice);
        }else if ($table === 'pat_chkup') {
            $sql = "INSERT INTO pat_chkup (patient_number, doctor_id, date_of_checkup, diagnosis, treatment, status) VALUES (?,?,?,?,?,?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ssssss", $patient->patient_number, $patient->doctor_id, $patient->date_of_checkup, $patient->diagnosis, $patient->treatment, $patient->status);
        }
        else if ($table === 'pat_reg') {
            $sql = "INSERT INTO pat_reg (patient_number, date_of_visit, diagnosis, treatment, medicine_recommended, treatment_status) VALUES (?,?,?,?,?,?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ssssss", $patient->patient_number, $patient->date_of_visit, $patient->diagnosis, $patient->treatment, $patient->medicine_recommended, $patient->treatment_status);
        }
        if (mysqli_stmt_execute($stmt)) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record creation failed.'];
        }
        echo json_encode($response);
        break;
        case "DELETE":
            $patientID = $_GET['patient_number'];
            $table = $_GET['table'];
            if ($table === 'pat_entry') {
                $sql = "DELETE FROM pat_entry WHERE patient_number = ? ";
            } else if($table === 'pat_opr') {
                $sql = "DELETE FROM pat_opr WHERE patient_number = ? ";
            } else if ($table === 'pat_chkup'){
                $sql = "DELETE FROM pat_chkup WHERE patient_number = ? ";
            }else if ($table === 'pat_admit'){
                $sql = "DELETE FROM pat_admit WHERE patient_number = ? ";
            }else if ($table === 'pat_dis'){
                $sql = "DELETE FROM pat_dis WHERE patient_number = ? ";
            }else if ($table === 'pat_reg'){
                $sql = "DELETE FROM pat_reg WHERE patient_number = ? ";
            }
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $patientID);
            mysqli_stmt_execute($stmt);
    
            if (mysqli_stmt_execute($stmt)) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Record delete failed.'];
            }
            break;
}
