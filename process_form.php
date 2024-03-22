<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Establish database connection (replace with your actual database credentials)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "fitness";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Function to sanitize and validate input
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Process signup form
    if (isset($_POST["signup-username"]) && isset($_POST["signup-password"]) && isset($_POST["confirm-password"]) && isset($_POST["dob"]) && isset($_POST["phone"])) {
        $username = test_input($_POST["signup-username"]);
        $password = test_input($_POST["signup-password"]);
        $confirmPassword = test_input($_POST["confirm-password"]);
        $dob = test_input($_POST["dob"]);
        $phone = test_input($_POST["phone"]);
        // Add this line for email handling

        // Check if passwords match
        if ($password !== $confirmPassword) {
            echo "Signup failed: Passwords do not match.";
            exit;
        }

        // Insert data into the database
        $sql = "INSERT INTO users (username, password, dob, phone) VALUES ('$username', '$password', '$dob', '$phone')";
        if ($conn->query($sql) === TRUE) {
            echo "Signup successful!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Process login form
    if (isset($_POST["login-username"]) && isset($_POST["login-password"])) {
        $username = test_input($_POST["login-username"]);
        $password = test_input($_POST["login-password"]);

        // Check if user exists in the database
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Login successful!";
            // Redirect to index.html or any other page
            header("Location: index.html");
            exit;
        } else {
            echo "Login failed: Invalid username or password.";
        }
    }

    $conn->close();
}
?>
