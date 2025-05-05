<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
session_start();

include '../connection/db.php';

// Leer datos JSON
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Datos incompletos."]);
    exit;
}

$email = $data->email;
$password = $data->password;

// Consultar base de datos
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $_SESSION['user'] = $email;
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciales inválidas."]);
}
?>
