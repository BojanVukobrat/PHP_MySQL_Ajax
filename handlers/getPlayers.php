<?php
    require  "../models/player.php";

    session_start();
    $host = "localhost";
    $db = "league";
    $username = "root";
    $password = "";
    try{
    $conn = new mysqli($host, $username, $password, $db);
        
        if ($conn->connect_errno) {
            exit("Konekcija neuspesna: " . $conn->connect_errno);
        }
        $teamId = $_GET["id"];
        $res = player::getPlayerByTeam($conn, $teamId);
        $results = array();

        while($data = $res->fetch_assoc()){
            $id = $data['id'];
            $name = $data['name'];
            $position = $data['position'];
            $results[] = array('id' => $id, 'name' => $name, 'position' => $position);
        }

        echo json_encode($results);

        
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>