<?php
// Establishing a connection to the database
$servername = "localhost"; // Change this to your MySQL server address
$username = "root"; // Change this to your MySQL username
$password = ""; // Change this to your MySQL password
$dbname = "fitness"; // Change this to your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Checking the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handling form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validating form data
    $username = validate_input($_POST['username']);
    $email = validate_input($_POST['email']);
    $password = validate_input($_POST['password']);
    $dob = validate_input($_POST['dob']);

    // Basic form validation function
    function validate_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Validating email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit();
    }

    // SQL query to insert data into users table
    $sql = "INSERT INTO users (username, email, password, dob) VALUES ('$username', '$email', '$password', '$dob')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Closing the connection
$conn->close();
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="./reg.css">
</head>
<body>
    <header>
        <nav>
            <ul class="nav-links">
                <li class="nav-item"><img src="images/ic_menu.svg" alt="menu" class="menu"></li>
                <li class="nav-item"><a href="index.html">SignUp</a></li>
                <li class="nav-item"><a href="about.html">About</a></li>
                <li class="nav-item"><a href="index.html">Home</a></li>
                <li class="nav-item"><a href="signup.html">Login</a></li>
            </ul>
        </nav>
    </header>
    <h1 style="text-align: center;">Daily Fitness</h1>
    <div class="container">
        <form id="form" action="/">
            <div class="input-control">
                <label for="username">Username</label>
                <input id="username" name="username" type="text">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="email">Email</label>
                <input id="email" name="email" type="text">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="password">Password</label>
                <input id="password" name="password" type="password">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="password2">Confirm Password</label>
                <input id="password2" name="password2" type="password">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="dob">Date of Birth</label>
                <input id="dob" name="dob" type="date">
                <div class="error"></div>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    <script src="./reg.js" defer></script>
</body>
</html>
