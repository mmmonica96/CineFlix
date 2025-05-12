<?php
// CORS: Permitir solicitudes solo desde el origen de tu frontend
header("Access-Control-Allow-Origin: http://localhost:3000"); // Cambia esto según sea necesario
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true"); // Permitir el uso de cookies y credenciales

// Get movies based on preferences
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
        "imagen" => $row["img"]
    ];
}

echo json_encode(["loggedIn" => true, "movies" => $movies]);
?>