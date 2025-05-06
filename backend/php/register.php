<?php
//enable CORS before any output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

session_start();
<<<<<<< HEAD

include '../connection/db.php';

//pre-flight options management
=======
include '../connection/db.php';

//pre-flight OPTIONS management
>>>>>>> origin/monica
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header("Content-Type: application/json");

//json
$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? '';
$name = $data['name'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($name) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
    exit;
}

$conn = new mysqli("localhost", "root", "", "cineflix");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Error de conexión"]);
    exit;
}
<<<<<<< HEAD
//inserts
$sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
=======
//inse
$sql = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";
>>>>>>> origin/monica
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $email, $name, $password);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Error al registrar: " . $stmt->error]);
}

$stmt->close();
$conn->close();
