<?php
    class team {

        public $id;
        public $name;
        public $points;

        public function __construct($id = null, $name = null, $points = null){
            $this->id = $id;
            $this->name = $name;
            $this->points = $points;
        }

        public static function getAll(mysqli $conn){
        $q = "SELECT id, name, points FROM league.team";
        return $conn->query($q);
        }
    }
?>