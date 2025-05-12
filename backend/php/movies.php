<?php
<<<<<<< HEAD
<<<<<<< HEAD
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

session_start();
include '../connection/db.php';

if (!isset($_SESSION['user'])) {
    echo json_encode(["loggedIn" => false, "movies" => []]);
    exit;
}

$email = $_SESSION['user'];

// Obtener ID del usuario
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$res = $stmt->get_result();

if ($res->num_rows !== 1) {
    echo json_encode(["loggedIn" => false, "movies" => []]);
    exit;
}

$user_id = $res->fetch_assoc()['id'];

// Obtener categorías seleccionadas
$catQuery = $conn->prepare("SELECT category_id FROM user_preferences WHERE user_id = ?");
$catQuery->bind_param("i", $user_id);
$catQuery->execute();
$resCats = $catQuery->get_result();

$categoryIds = [];
while ($row = $resCats->fetch_assoc()) {
    $categoryIds[] = $row['category_id'];
}

if (empty($categoryIds)) {
    echo json_encode(["loggedIn" => true, "movies" => []]);
    exit;
}

// Crear placeholders dinámicamente
$placeholders = implode(',', array_fill(0, count($categoryIds), '?'));
$types = str_repeat('i', count($categoryIds));

// Obtener películas según preferencias
=======
//cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
//get movies based on preferences
>>>>>>> origin/monica
=======
// CORS: Permitir solicitudes solo desde el origen de tu frontend
header("Access-Control-Allow-Origin: http://localhost:3000"); // Cambia esto según sea necesario
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true"); // Permitir el uso de cookies y credenciales

// Get movies based on preferences
>>>>>>> origin/monica
$sql = "SELECT id, name, description, code, img FROM movies WHERE idPreferences IN ($placeholders)";
$stmtMovies = $conn->prepare($sql);
$stmtMovies->bind_param($types, ...$categoryIds);
$stmtMovies->execute();
$resMovies = $stmtMovies->get_result();

$movies = [];
while ($row = $resMovies->fetch_assoc()) {
    $movies[] = [
        "id" => $row["id"],
        "titulo" => $row["name"],
        "descripcion" => $row["description"],
<<<<<<< HEAD
        "imagen" => $row["img"]  // ✅ Solo el nombre de archivo
=======
        "imagen" => $row["img"]
>>>>>>> origin/monica
    ];
}

echo json_encode(["loggedIn" => true, "movies" => $movies]);
<<<<<<< HEAD
<<<<<<< HEAD
=======

?>
>>>>>>> origin/monica
=======
?>
>>>>>>> origin/monica
