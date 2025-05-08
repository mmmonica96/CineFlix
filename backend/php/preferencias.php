<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_start();

if (isset($_SESSION['user'])) {
    echo json_encode(["loggedIn" => true, "user" => $_SESSION['user']]);
} else {
    echo json_encode(["loggedIn" => false]);
}
?>
