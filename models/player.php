<?php
    class player {
        public $id;
        public $name;
        public $position;
        public $teamId;
        
        public function __construct($id = null, $name = null, $position = null, $teamId = null){
            $this->id = $id;
            $this->name = $name;
            $this->position = $position;
            $this->teamId = $teamId;
        }
        
        public static function getPlayerByTeam(mysqli $conn, $teamId) {
            $q = "SELECT p.id, p.name, p.position, t.points
                  FROM league.team AS t
                  INNER JOIN league.player AS p ON t.id = p.teamId
                  WHERE p.teamId = $teamId";
            return $conn->query($q);
        }
        
        public static function addPlayer(mysqli $conn, $name, $position, $teamId){
            $q = "INSERT INTO `league`.`player` (`name`, `position`, `teamId`) VALUES ('$name', '$position', '$teamId')";
            return $conn->query($q);
        }
        
        
        public static function removePlayer(mysqli $conn, $id){
            $q = "DELETE FROM league.player WHERE id = $id";
            return $conn->query($q);
        }
        
    }
?>