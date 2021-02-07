<?php 


$servername = getenv('dbserver');
$username = getenv('dbuser');
$password = getenv('dbpass');
$db = getenv('dbdatabase');

// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";