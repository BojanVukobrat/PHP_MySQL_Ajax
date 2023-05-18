window.onload = function getAllTeams() {
    $.ajax({
        url: "handlers/getTeams.php",
        type: "get",
        data: {
        },
        success: function (response) {
            if (response == "") {
                console.log(localStorage.getItem("id"));
                return "a";
            }
            console.log(response);
            const data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const name = data[i].name;
                const points = data[i].points;
                addClubToBottom(id, name, points);
              }
        },
        error: function (xhr) {
            alert("ERROR" + xhr.status);
        },
    });
}

function getAllPlayers(id){
    console.log(id + 'pls');
    $.ajax({
        url: "handlers/getPlayers.php",
        type: "get",
        data: {
            id: id
        },
        success: function (response) {
            if (response == "") {
                return "a";
            }
            console.log(response);
            const data = JSON.parse(response);
            clearPlayers();
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const name = data[i].name;
                const position = data[i].position;
                const teamId = data[i].teamId;
                addPlayerToBottom(id, name, position);
              }
        },
        error: function (xhr) {
            alert("ERROR" + xhr.status);
        },
    });
}

function addPlayerToBottom(id, name, position) {
    const teamContainer = document.getElementById('team-container-main');
  
    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player-container');
  
    const playerInfo = document.createElement('div');
    playerInfo.classList.add('player-info');
  
    const playerName = document.createElement('h3');
    playerName.textContent = name;
  
    const playerPosition = document.createElement('p');
    playerPosition.textContent = 'Position: ' + position;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      deletePlayer(id);
    });
  
    playerInfo.appendChild(playerName);
    playerInfo.appendChild(playerPosition);
    playerContainer.appendChild(playerInfo);
    playerContainer.appendChild(deleteButton);
    teamContainer.appendChild(playerContainer);
  }

  function clearPlayers() {
    const teamContainer = document.getElementById('team-container-main');
  
    while (teamContainer.firstChild) {
      teamContainer.removeChild(teamContainer.firstChild);
    }
  }

  function addClubToBottom(id, clubText, points) {
    const clubList = document.querySelector('.list-group'); // Select the element with class 'list-group'
    const clubElement = document.createElement('button'); // Create a button element instead of a div
    const pointsElement = document.createElement('p');
    clubElement.classList.add('list-group-item', 'list-group-item-action', 'club-button', 'text-light'); // Add necessary classes to the button
    clubElement.setAttribute('data-club', clubText+'('+points+')'); // Set the 'data-club' attribute to the club text
    clubElement.textContent = clubText;
    pointsElement.textContent = 'Points: '+points;
  
    clubElement.addEventListener('click', function() {
      // Handle the click event
      getAllPlayers(id);
    });
  
    clubList.appendChild(clubElement);
    clubElement.appendChild(pointsElement);
  }

  function addPlayer(){
    //
    $.ajax({
        url: 'handlers/addPlayer.php',
        type: 'post',
        data: {
            "name": "Test Test",
            "position": 'attack',
            "teamId": 1
        },
        success: function(response){

        },
        error: function(xhr){
            alert("ERROR" + xhr);
        }
     });
  }

  function deletePlayer(id){
    $.ajax({
        url: "handlers/deletePlayer.php",
        type: "delete",
        data: {
          id: id,
        },
        success: function (response) {
          // alert("Sacuvano" + response);
          window.location.reload();
        },
        error: function (xhr) {
          alert("GRESKA" + xhr);
        },
      });
  }
  
  
  