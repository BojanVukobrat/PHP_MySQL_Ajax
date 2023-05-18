<?php
    require  "../models/team.php";

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
        $res = team::getAll($conn);
        $results = array();

        while($data = $res->fetch_assoc()){
            $id = $data['id'];
            $name = $data['name'];
            $points = $data['points'];
            $results[] = array('id' => $id, 'name' => $name, 'points' => $points);
        }

        echo json_encode($results);

        
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>