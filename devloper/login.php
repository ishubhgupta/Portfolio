<?php
// login.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    // Input validation and sanitation
    $username = trim($_POST["username"]);
    $password = $_POST["password"];

    // Validate username and password (you can add more validation rules here)
    if (empty($username) || empty($password)) {
        die("Username and password are required.");
    }

    // Retrieve the hashed password from the database for the entered username
    $get_user_sql = "SELECT id, password FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $get_user_sql);

    if ($result && mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        $hashed_password = $row["password"];

        // Verify the password
        if (password_verify($password, $hashed_password)) {
            session_start();
            $_SESSION["user_id"] = $row["id"]; // Store user ID in the session for future use
            $_SESSION["username"] = $username;
            header("Location: \..\blog\dashboard.php"); // Redirect to the dashboard page
            exit();
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "Invalid username or password.";
    }

    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <div class="container form-area">
        <div class="form-container">
            <h1>Login</h1>
            <form action="login.php" method="POST">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
            <p>Currently, Only EvolkAI verified Writter can write Blog.</p>
        </div>
    </div>
</body>
</html>