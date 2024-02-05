<?php
// dashboard.php

session_start();

if (!isset($_SESSION["user_id"])) {
    header("Location: index.php"); // Redirect to the login page if not logged in
    exit();
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["blog_content"]) && isset($_POST["blog_title"])) {
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

        $user_id = $_SESSION["user_id"];
        $username = $_SESSION["username"];
        $blog_content = $_POST["blog_content"];
        $blog_title = $_POST["blog_title"];

        // Insert blog data into the database
        $insert_blog_sql = "INSERT INTO blogs (user_id, username, title, content, submission_date) VALUES ('$user_id', '$username', '$blog_title', '$blog_content', NOW())";
        if (mysqli_query($conn, $insert_blog_sql)) {
            echo "Blog post saved successfully!";
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        mysqli_close($conn);
        exit(); // Exit the PHP script after processing the AJAX request
    } elseif (isset($_POST["delete_blog"]) && isset($_POST["blog_id"])) {
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

        $blog_id = $_POST["blog_id"];

        // Delete the blog from the database
        $delete_blog_sql = "DELETE FROM blogs WHERE id = '$blog_id'";
        if (mysqli_query($conn, $delete_blog_sql)) {
            // Redirect to the dashboard page after deletion
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Evolkai Blog </title>
    <link rel="stylesheet" href="css/dashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-dktu6QPf43Y4iFpeZPFVmnOdtZ0GFazhcl1aQEl0O+Zh5boKfjbbp4P2Uil2EGi9WvwS4jWtyqZlK0uWhD9PQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <header class="header sticky">
        <a href="index.php"><img src="images/evolkai_dark.png" alt="logo" class="logo" href="index.html"></a>
        <nav>
            <ul>
                <li><a href="index.php"><h3>Home</h3></a></li>
                <li><a href="blogs.php"><h3>Blogs</h3></a></li>
                <li><a href="Authors.php"><h3>Authors</h3></a></li>
                <li><a href="https://evolkai.com/contact.html"><h3>Contact</h3></a></li>
            </ul>
        </nav>
    </header>
    <h1>Hello <?php echo $_SESSION["username"]; ?>, Welcome to your Evolkai Blog dashboard</h1>
    <div class="editor-container">
        <div class="editor-toolbar">
            <!-- ... (your existing toolbar buttons) ... -->
            <button onclick="execCommand('bold')"><b>B</b></button>
            <button onclick="execCommand('italic')"><i>I</i></button>
            <button onclick="execCommand('underline')"><u>U</u></button>
          
            <button onclick="execCommand('justifyLeft')"><i class="material-icons">format_align_left</i></button>

           
            <button onclick="execCommand('justifyCenter')"><i class="material-icons">format_align_center</i></button>
            <button onclick="execCommand('justifyRight')"><i class="material-icons">format_align_right</i></button>
            <button onclick="execCommand('justifyFull')"><i class="material-icons">format_align_justify</i></button>
            <button onclick="execCommand('insertOrderedList')"><i class="material-icons">format_list_numbered</i></button>
            <button onclick="execCommand('insertUnorderedList')"><i class="material-icons">format_list_bulleted</i></button>
            <button onclick="execCommand('indent')"><i class="material-icons">format_indent_increase</i></button>
            <button onclick="execCommand('outdent')"><i class="material-icons">format_indent_decrease</i></button>
            <button onclick="execCommand('removeFormat')"><i class="material-icons">format_clear</i></button>
            
        </div>

        <div class="editor-title">
            <input type="text" id="blogTitle" placeholder="Enter blog title here" required>
        </div>

        <div class="editor-content" contenteditable="true" id="editor"></div>
        <button onclick="saveBlog()">Submit Blog</button>
    
    </div>

    <!-- Display previously written blogs -->
    <h2>Previous Blogs by You</h2>
    <div id="blog-posts">
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

        // Retrieve blogs written by the logged-in user
        $user_id = $_SESSION["user_id"];
        $get_blogs_sql = "SELECT * FROM blogs WHERE user_id = '$user_id' ORDER BY submission_date DESC";
        $result = mysqli_query($conn, $get_blogs_sql);

        // Fetch all blogs
        if ($result && mysqli_num_rows($result) > 0) {
            while ($blog = mysqli_fetch_assoc($result)) {
                echo "<div>";
                echo "<p><strong>User: " . $blog["username"] . "</strong></p>";
                echo "<p><strong>Title: " . $blog["title"] . "</strong></p>";
                echo "<p>" . nl2br($blog["content"]) . "</p>";
                echo "<p>Date: " . $blog["submission_date"] . "</p>";
                // Add delete button for each blog
                echo "<form action='dashboard.php' method='post'>";
                echo "<input type='hidden' name='blog_id' value='" . $blog["id"] . "'>";
                echo "<button type='submit' name='delete_blog'>Delete</button>";
                echo "</form>";
                echo "</div>";
            }
        } else {
            echo "<p>No previous blogs.</p>";
        }

        mysqli_close($conn); 
        ?>
    </div>
    <script>
        // ... (your existing JavaScript code) ...
        function execCommand(command, value = null) {
            document.execCommand(command, false, value);
        }

        function saveBlog() {
            const blogTitle = document.getElementById('blogTitle').value;
            const blogContent = document.getElementById('editor').innerHTML;

            // Send the blog content and title to the server using AJAX
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'dashboard.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText); // Response from the server (e.g., "Blog post saved successfully!")
                }
            };
            xhr.send('blog_title=' + encodeURIComponent(blogTitle) + '&blog_content=' + encodeURIComponent(blogContent));
        }
    </script>
</body>
</html>
