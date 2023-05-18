<?php
    require  "../models/player.php";
    
    session_start();
    $host = "localhost";
    $db = "hotel";
    $username = "root";
    $password = "";
    try{
    $conn = new mysqli($host, $username, $password, $db);
        
        if ($conn->connect_errno) {
            exit("Konekcija neuspesna: " . $conn->connect_errno);
        }
        $name = $_POST["name"];
        $position = $_POST["position"];
        $teamId = $_POST["teamId"];

        player::addPlayer($conn, $name, $position, $teamId);
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>