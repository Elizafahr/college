<?php
// Подключение к базе данных 
session_destroy(); 


session_start();

$conn = new mysqli("localhost", "root", "", "kontr_php_mysql");

if (!empty($_POST['login']) and !empty($_POST['password'])) {
	$login = $_POST['login'];
	$name = $_POST['name'];

	//$password = $_POST['password'];
	// Хеширование пароля
	$password = md5($_POST['password']); // преобразуем пароль в его хеш
	$hashedPassword = password_hash($password, PASSWORD_DEFAULT);


	$query = "INSERT INTO user SET login='$login', password='$password',  name='$name', role='user'";
	mysqli_query($conn, $query);
	$_SESSION['auth'] = true; // пометка об авторизации
	$_SESSION['name'] = $name;
	header('Location: index.php');
}
