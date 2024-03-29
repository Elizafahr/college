<?php

$conn = mysqli_connect("localhost", "root", "", "baza");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  } 
  


  //Добавление пользователя
  $name=$_POST["name"];
  $age=$_POST["age"];
  if (isset($name)){
  $sql = "INSERT INTO user (name, age) VALUES ('".$name."', ".$age.")";
if(mysqli_query($conn, $sql)){
    echo "Данные успешно добавлены";
} else{
    echo "Ошибка: " . mysqli_error($conn);
}
  }


mysqli_close($conn);

?>