<?php

session_start();

$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli("localhost", "root", "", "kormyshevblog");

// uc = user candidate
$uc_query = "SELECT * FROM `users` WHERE email = '$email' AND password = '$password'";
$uc_res = $conn->query($uc_query);

if ($uc_res->num_rows > 0) {
    $_SESSION['current_user_id'] = $uc_res->fetch_assoc()['id'];
    if (isset($_SESSION['auth_error'])) $_SESSION['auth_error'] = null;
    header("Location: ../index.php");
} else {
    $_SESSION['current_user_id'] = null;
    $_SESSION['auth_error'] = "Неправильный логин или пароль";
    header("Location: ../pages/login.php");
}
