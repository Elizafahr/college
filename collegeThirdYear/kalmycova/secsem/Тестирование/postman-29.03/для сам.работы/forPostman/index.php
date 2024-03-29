<?php
echo "<a href='show.php'> Просмотр пользователей </a><br>";
echo "Добавление пользователя"."<br><br>";

echo "<form method='post' action='addUser.php'>
        <input type=text name='name' placeholder='Введите имя'/><br><br>
        <input type=text name='age' placeholder='Введите возраст'/><br><br>
        <input type='submit' value='Добавить'/><br><br>
        
    </form>
";
?>
