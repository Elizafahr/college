<?php

$conn = mysqli_connect("localhost", "root", "", "baza");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  } 
  
  //просмотр пользователей
  $sql = "select * from user";
  if($result = mysqli_query($conn, $sql)){
    foreach($result as $row){
         
        echo $row["id"]." ".$row["name"]. " ".$row["age"]."<br>";
    }
}



mysqli_close($conn);

?>