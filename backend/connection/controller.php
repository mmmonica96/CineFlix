<?php
$host = 'localhost';
$user = 'root';
$password = ''; // Cambia si tu MySQL tiene contraseña
$dbname = 'cineflix';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
