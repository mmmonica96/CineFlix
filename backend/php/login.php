<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

session_start();
include '../connection/db.php';

// Leer JSON
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Datos incompletos."]);
    exit;
}

$email = $data->email;
$password = $data->password;

// Validar usuario
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $_SESSION['user'] = $email;
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Email o contraseña incorrectos."]);
}

$stmt->close();
$conn->close();
?>
