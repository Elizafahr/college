<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Зоопарк</title>
	<link rel="stylesheet" href="style.css">
	<style>
		.regestration {
			width: 100%;
		}

		.regestration form {
			width: 100%;
			display: flex;
			flex-direction: column;
			max-width: 500px;
		}

		.regestration form .row {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		.regestration form input {
			min-height: 25px;
		}
		.hi{
			color: red;
			font-size: 25px;
			background-color: white;
			padding: 10px;
			margin: 10px;
		}
	</style>
</head>

<body>
	<div id="wrap">
		<div id="header">
			<?php
			session_start();

			if (isset($_SESSION['name'])) {
				echo '<div class="hi">Привет, ' . $_SESSION['name'] . '! </div>';
			}
			?>
		</div>
		<div id="page">
			<div id="menu">
				<div id="sidemenu">
					<!--h2>Навигация</h2-->
					<ul>
						<li class="current_page_item"><a href="index.htm">Главная</a></li>
						<li><a href="photo.htm" title="Фотографии">Фотографии</a></li>
						<li><a href="about.htm" title="Как к нам добраться">Как к нам добраться</a></li>

					</ul>
				</div>
			</div>
			<div id="content">


				<div class="regestration" style="padding:0 0 50px 0;">
					<h2>Регистрация пользователя</h2>

					<form method="POST" action="">
						<div class="row">
							<label for="name">Имя:</label>
							<input type="text" name="name" required><br>

						</div>
						<div class="row">
							<label for="login">Логин:</label>
							<input type="text" name="login" required><br>
						</div>
						<div class="row">
							<label for="password">Пароль:</label>
							<input type="password" name="password" required><br>
						</div>

						<input type="submit" name="register" value="Зарегистрироваться">
					</form>
					<?php
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
						?>


				</div>


				<h2>
					<a href="#" rel="bookmark" title="Фотографии">Немного о зоопарке</a>
				</h2>
				<p>
					Мы рады приветствовать всех на нашем сайте. Надеемся, что здесь вы найдете для себя много интересного. А ваши отзывы и пожелания, оставленные в гостевой книге, помогут нам сделать сайт Пермского зоопарка еще лучше. До новых встреч на наших страницах.
				<h2><span class="seo">С большим уважением ко всем, Людмила Кардашова<br />
						Директор Пермского зоопарка</span></h2>

				Пермский зоопарк начал свою историю в 1922 году с небольшого "Уголка живой природы" при Пермском краеведческом музее, а с 1933 года стал работать как самостоятельная организация, получившая название зоологического сада. На существующую территорию зоосад был переведен в 1931г. За счет прилегающих строений площадь постепенно увеличивалась и сейчас составляет 2,2 га. Сюда входит и отдельный двухэтажный дом "Акватеррариум", открытый для посетителей в 1989 году. В мае 2001 года при принятии нового Устава Пермский зоологический сад был переименован в Пермский зоопарк.<br /><br />

				Месторасположение зоопарка удобно для посетителей. Он находится в центре Перми над набережной реки Камы и является одним из любимых мест отдыха горожан. Рядом расположены областной краеведческий музей, всемирно известная художественная галерея и выставочные залы. Проходящие поблизости центральные улицы города - Комсомольский проспект и ул. Сибирская - выходят на набережную Камы. Напротив зоопарка расположена гостиница "Турист".
				</p>

			</div>
			<div class="clear"></div>
			<div id="browse">
				<h2 class="subhead">&nbsp;</h2>
			</div>
		</div>
	</div>
</body>

</html>