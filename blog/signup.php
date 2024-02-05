<?php
// signup.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Input validation and sanitation
    $name = trim($_POST["name"]);
    $profession = trim($_POST["profession"]);
    $username = trim($_POST["username"]);
    $password = $_POST["password"];

    // Validate name, profession, username, and password (you can add more validation rules here)
    if (empty($name) || empty($profession) || empty($username) || empty($password)) {
        die("All fields are required.");
    }

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

    // Check if the username already exists
    $check_username_sql = "SELECT id FROM users WHERE username = '$username'";
    $check_username_result = mysqli_query($conn, $check_username_sql);

    if (mysqli_num_rows($check_username_result) > 0) {
        die("Username already exists. Please choose a different username.");
    }

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Insert user data into the database
    $insert_user_sql = "INSERT INTO users (name, profession, username, password) VALUES ('$name', '$profession', '$username', '$hashed_password')";
    if (mysqli_query($conn, $insert_user_sql)) {
        echo "Sign up successful!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>

<!-- signup_page.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Sign Up</h1>
    <div class="container">
        <div class="form-container">
            <form action="signup.php" method="POST">
                <input type="text" name="name" placeholder="Name" required>
                <input type="text" name="profession" placeholder="Profession" required>
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</body>
</html>
