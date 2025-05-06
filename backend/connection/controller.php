<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'cineflix';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

//form data
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

