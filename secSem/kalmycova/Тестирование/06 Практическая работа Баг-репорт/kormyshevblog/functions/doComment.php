<?php

session_start();

$text = $_POST['text'];
$post = $_POST['post_id'];
$sender_id = $_SESSION['current_user_id'];



$conn = new mysqli("localhost", "root", "", "kormyshevblog");


$add_comment_query = "INSERT INTO `comments` (`id`, `text`, `isApproved`, `user_id`, `post_id`) VALUES (NULL, '$text', '0', '$sender_id', '$post');";

$conn->query($add_comment_query);

header("Location: ../pages/post.php?id=" . $post);
