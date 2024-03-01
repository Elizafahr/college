<!-- header -->
<div class="container">
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div class="col-md-3 mb-2 mb-md-0">
      <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <span class="fs-4">CofBlog</span>
      </a>
    </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"></ul>

    <div class="col-md-3 text-end">

      <?php if (isset($_SESSION['current_user_id'])) : ?>

        <?php

        $conn = new mysqli("localhost", "root", "", "kormyshevblog");

        $get_user_query = "SELECT * FROM `users` WHERE id = " . $_SESSION['current_user_id'];

        $user = $conn->query($get_user_query)->fetch_assoc();

        ?>

        <a href="../pages/profile.php">
          <?php echo $user['name']; ?>
        </a>
      <?php else :  ?>
        <a href="../pages/login.php"> <button type="button" class="btn btn-outline-primary me-2">Вход</button> </a>
        <button type="button" class="btn btn-primary">Регистрация</button>

      <?php endif; ?>
    </div>
  </header>
</div>
<!-- header -->