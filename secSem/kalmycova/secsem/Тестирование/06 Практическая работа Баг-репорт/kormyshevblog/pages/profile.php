<?php session_start(); ?>

<?php require "../components/links.php" ?>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="chartjs-size-monitor">
        <div class="chartjs-size-monitor-expand">
            <div class=""></div>
        </div>
        <div class="chartjs-size-monitor-shrink">
            <div class=""></div>
        </div>
    </div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Профиль</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <a href="../functions/doLogout.php">
                <button type="button" class="btn btn-primary">Выйти</button>
            </a>
        </div>
    </div>

    <!-- comments -->

    <?php
    $conn = new mysqli("localhost", "root", "", "kormyshevblog");
    $get_author_query = "SELECT * FROM `users` WHERE id = " . $_SESSION['current_user_id'];
    $author = $conn->query($get_author_query)->fetch_assoc();
    ?>

    <!-- user panel -->

    <?php if (!$author['isAdmin']) : ?>

        <section class="border-bottom  mt-4 pt-4 mb-4 pb-4">
            <div class="row">
                <div class="col-3">
                    <img src="../assets/img/avatar.png" class="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div class="col-9">
                    <h1 class="mb-2"><?php echo $author['name']; ?></h1>

                </div>
            </div>
        </section>

        <h2>Мои комментарии</h2>

        <?php
        $conn = new mysqli("localhost", "root", "", "kormyshevblog");
        $get_comments_query = "SELECT * FROM `comments` WHERE user_id = " . $author['id'];
        $comments_res = $conn->query($get_comments_query);
        ?>

        <ul class="list-group list-group-flush">
            <!-- Each comment will be displayed as a list item -->
            <?php while ($comment = $comments_res->fetch_assoc()) : ?>
                <?php
                $get_post_query = "SELECT * FROM `posts` WHERE id = " . $comment['post_id'];
                $post = $conn->query($get_post_query)->fetch_assoc();
                ?>
                <li class="list-group-item">
                    <p><strong>Комментарий: </strong> <?php echo $comment['text']; ?> </p>
                    <p><strong>Пост: </strong> <a href="../pages/post.php?id=<?php echo $post['id']; ?>"> <?php echo $post['title']; ?> </a> </p>
                </li>
                <!-- Add more list items for more comments -->
            <?php endwhile; ?>
        </ul>


    <?php else : ?>

        <!-- admin panel -->

        <section class="border-bottom  mt-4 pt-4 mb-4 pb-4">
            <div class="row">
                <div class="col-3">
                    <img src="../assets/img/avatar.png" class="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div class="col-9">
                    <h1 class="mb-2"><?php echo $author['name'];  ?> (Модератор)</h1>

                </div>
            </div>
        </section>

        <h2>Новые комментарии</h2>

        <?php $conn = new mysqli("localhost", "root", "", "kormyshevblog");
        $get_comments_query = "SELECT * FROM `comments` WHERE isApproved = 0";
        $comments_res = $conn->query($get_comments_query);
        while ($comment = $comments_res->fetch_assoc()) :
            $comment_post_query = $conn->query("SELECT * FROM `posts` WHERE id = " . $comment['post_id']);
            $comment_post = $comment_post_query->fetch_assoc();
            $comment_author_query = $conn->query("SELECT * FROM `users` WHERE id = " . $comment['user_id']);
            $comment_author = $comment_author_query->fetch_assoc();

        ?>
            <div class="row mb-4">
                <div class="col-2">
                    <img src="../assets/img/avatar.png" class="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div class="col-10">
                    <p class="mb-2"><strong><?php echo $comment_author['name'] ?></strong></p>
                    <p>
                        <?php echo $comment['text']; ?>
                    </p>
                </div>
                <h2>Пост: <a href="../pages/post.php?id=<?php echo $comment_post['id']; ?>"><?php echo $comment_post['title']; ?></a></h2>
                <a href="../functions/doApproveComment.php?id=<?php echo $comment['id']; ?>">
                    <button type="button" class="btn btn-primary">Одобрить</button>
                </a>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>



</main>