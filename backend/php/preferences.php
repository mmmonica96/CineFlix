<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

session_start();
include '../connection/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if (!isset($_SESSION['user'])) {
    echo json_encode(["loggedIn" => false]);
    exit;
}

$user_email = $_SESSION['user'];

//id
$stmtUser = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmtUser->bind_param("s", $user_email);
$stmtUser->execute();
$resUser = $stmtUser->get_result();

if ($resUser->num_rows !== 1) {
    echo json_encode(["loggedIn" => false]);
    exit;
}

$user_id = $resUser->fetch_assoc()['id'];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $categorias = $data['categorias'] ?? [];

    if (!is_array($categorias)) {
        echo json_encode(["success" => false, "message" => "Datos inválidos"]);
        exit;
    }

    $conn->query("DELETE FROM user_preferences WHERE user_id = $user_id");

    $insert = $conn->prepare("INSERT INTO user_preferences (user_id, category_id) VALUES (?, ?)");
    foreach ($categorias as $catId) {
        $insert->bind_param("ii", $user_id, $catId);
        $insert->execute();
    }

    echo json_encode(["success" => true]);
    exit;
}


$query = "SELECT id, category, img FROM preferences ORDER BY id ASC";
$result = $conn->query($query);

$preferences = [];
while ($row = $result->fetch_assoc()) {
    $preferences[] = [
        "id" => (int) $row["id"],
        "nombre" => ucfirst($row["category"]),
        "imagen" => "/img/generos/" . $row["img"]
    ];
}

//category
$seleccionadas = [];
$selQuery = $conn->prepare("SELECT category_id FROM user_preferences WHERE user_id = ?");
$selQuery->bind_param("i", $user_id);
$selQuery->execute();
$resSel = $selQuery->get_result();

while ($row = $resSel->fetch_assoc()) {
    $seleccionadas[] = (int) $row['category_id'];
}


echo json_encode([
    "loggedIn" => true,
    "user" => $user_email,
    "generos" => $preferences,
    "seleccionadas" => $seleccionadas
]);