<?php
session_start();
require_once('../models/user.php');



$host = "localhost";
$db = "league";
$username = "root";
$password = "";

try {
    $conn = new mysqli($host, $username, $password, $db);

    if ($conn->connect_errno) {
        exit("Konekcija neuspesna: " . $conn->connect_errno);
    }

    $username = $_GET["username"];
    $password = $_GET["password"];
    $_SESSION["username"] = $username;
    $res = user::logIn($username, $password, $conn);
    

    echo json_encode($res);
} catch (Exception $e) {
    echo $e->getMessage() . "<br/>";
    while ($e = $e->getPrevious()) {
        echo 'Previous exception: ' . $e->getMessage() . "<br/>";
    }
}
?>
