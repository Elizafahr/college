<?php

$conn = new mysqli("localhost", "root", "", "kormyshevblog");

echo $_GET['id'];

$get_comment_query = "SELECT * FROM `comments` WHERE id = " . $_GET['id'];

$comment = $conn->query($get_comment_query)->fetch_assoc();

$approve_comment_query = "UPDATE `comments` SET isApproved = 1 WHERE id = " . $_GET['id'];

$approve_comment_res = $conn->query($approve_comment_query);

header('Location: ../pages/profile.php');
