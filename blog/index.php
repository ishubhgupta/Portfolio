<?php
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

// Retrieve the most recent blog along with the title and content
$get_recent_blog_sql = "SELECT id, username, title, content FROM blogs ORDER BY submission_date DESC LIMIT 1";
$recent_blog_result = mysqli_query($conn, $get_recent_blog_sql);
$recent_blog = mysqli_fetch_assoc($recent_blog_result);

// Retrieve the titles of the last ten blogs (excluding the most recent one)
$get_last_ten_blogs_sql = "SELECT id, username, title FROM blogs WHERE id != {$recent_blog['id']} ORDER BY submission_date DESC LIMIT 10";
$last_ten_blogs_result = mysqli_query($conn, $get_last_ten_blogs_sql);
$last_ten_blogs = mysqli_fetch_all($last_ten_blogs_result, MYSQLI_ASSOC);

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog | EvlokAI</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;700&display=swap">
</head>
<script src="three.r134.min.js"></script>
<script src="vanta.birds.min.js"></script>

<body>
    <header class="header sticky">
        <a href="index.html"><img src="images/evolkai_dark.png" alt="logo" class="logo" href="index.html"></a>
        <nav>
            <ul>
                <li><a href="index.php"><h3>Home</h3></a></li>
                <li><a href="blogs.php"><h3>Blogs</h3></a></li>
                <li><a href="login.php"><h3>Writers</h3></a></li>
                <li><a href="https://evolkai.com/contact.html"><h3>Contact</h3></a></li>
            </ul>
        </nav>
    </header>

    <div class="container text-container">
        
    </div>

    <!-- Display the most recent blog with title and content -->
    <div class="most-recent-blog">
    <a href="blog.php?id=<?php echo $recent_blog["id"]; ?>">
    <h2><?php echo $recent_blog["title"]; ?></h2>
        <p><?php echo nl2br($recent_blog["content"]); ?></p>
        <p>by <?php echo $recent_blog["username"]; ?></p>
        </a>
    </div>

    <!-- Display titles of the last ten blogs -->
    <div class="recent-blogs">
    <h2>Recent Blogs</h2>
    <ul>
        <?php
        if (!empty($last_ten_blogs)) {
            foreach ($last_ten_blogs as $blog) {
                ?>
                <li>
                    <a href="blog.php?id=<?php echo $blog["id"]; ?>"><?php echo $blog["title"]; ?></a>
                    by <span class="highlight-username"><?php echo $blog["username"]; ?></span>
                </li>
                <?php
            }
        } else {
            echo "<li>No More blogs found.</li>";
        }
        ?>
    </ul>
    </div>
</body>
</html>
