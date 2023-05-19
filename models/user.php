<?php
    class user {
        public $id;
        public $username;
        public $password;
        public function __construct($id = null, $username = null, $password = null){
            $this->id = $id;
            $this->username = $username;
            $this->password = $password;
        }
        
        public static function logIn($username, $password, mysqli $conn){
            $q = "SELECT id FROM league.user WHERE league.user.username='$username' AND league.user.password='$password'";
            return $conn->query($q)->fetch_assoc();
        }
    }
?>