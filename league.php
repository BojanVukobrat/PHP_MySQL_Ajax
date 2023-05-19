<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidebar Example</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="./css/league.css">
    <script src="./js/league.js"></script>
</head>

<body>
    <div class="container-fluid">
    <h1>Welcome, <?php  session_start(); echo $_SESSION["username"]?>!</h1>
      <!-- <h1>Welcome, !</h1> -->
        <div class="row">
          <div class="col-md-3">
            <div class="sidebar">
              <h4>Football Clubs</h4>
              <div class="list-group">
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <h1>Football league</h1>
            <div id="team-container-main"></div>
          </div>
        </div>
      </div>
      
      

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min