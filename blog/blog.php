<?php
// blog.php

// Database connection (replace with your actual database credentials)
$db_host = "localhost";
$db_user = "root";
$db_password = "123456";
$db_name = "user_data";

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if blog ID is provided in the URL
if (isset($_GET["id"])) {
    $blog_id = $_GET["id"];

    // Retrieve the blog content based on the ID
    $get_blog_sql = "SELECT * FROM blogs WHERE id = $blog_id";
    $result = mysqli_query($conn, $get_blog_sql);

    // Fetch the blog content
    if ($result && mysqli_num_rows($result) > 0) {
        $blog = mysqli_fetch_assoc($result);
    } else {
        // If the blog is not found, you can handle the error here (e.g., redirect to an error page).
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $blog["title"]; ?></title>
    <link rel="stylesheet" href="css/blog.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap">
</head>
<body>
    <header class="header sticky">
        <a href="index.html"><img src="images/evolkai_dark.png" alt="logo" class="logo" href="index.html"></a>
        <nav>
            <ul>
                <li><a href="index.php"><h3>Home</h3></a></li>
                <li><a href="blogs.php"><h3>Blogs</h3></a></li>
                <li><a href="login.php"><h3>Writers</h3></a></li>
                <li><a href="Authors.php"><h3>Authors</h3></a></li>
                <li><a href="https://evolkai.com/contact.html"><h3>Contact</h3></a></li>
            </ul>
        </nav>
    </header>
    <h1><?php echo $blog["title"]; ?></h1>
    <div class="blog-info">
        <p class="author">Author: <?php echo $blog["username"]; ?></p>
        <p class="date">Date: <?php echo $blog["submission_date"]; ?></p>
    </div>
    <div class="blog-content">
        <?php echo $blog["content"]; ?>
    </div>
</body>
</html>
