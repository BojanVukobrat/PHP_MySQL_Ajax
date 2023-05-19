window.onload = function getAllTeams() {
    $.ajax({
        url: "handlers/getTeams.php",
        type: "get",
        data: {
        },
        success: function (response) {
            if (response == "") {
                return "a";
            }
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
            addFormToContainer(id);
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
    const clubList = document.querySelector('.list-group'); 
    const clubElement = document.createElement('button'); 
    const pointsElement = document.createElement('p');
    clubElement.classList.add('list-group-item', 'list-group-item-action', 'club-button', 'text-light'); 
    clubElement.setAttribute('data-club', clubText+'('+points+')'); 
    clubElement.textContent = clubText;
    pointsElement.textContent = 'Points: '+points;
  
    clubElement.addEventListener('click', function() {
      getAllPlayers(id);
    });
  
    clubList.appendChild(clubElement);
    clubElement.appendChild(pointsElement);
  }

  function addPlayer(id){
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    $.ajax({
        url: 'handlers/addPlayer.php',
        type: 'post',
        data: {
            "name": name,
            "position": position,
            "teamId": id
        },
        success: function(response){
            window.location.reload();
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
          window.location.reload();
        },
        error: function (xhr) {
          alert("GRESKA" + xhr);
        },
      });
  }
  
  function addFormToContainer(id) {
    const teamContainer = document.getElementById('team-container-main');
  
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name of the player';
  
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
  
    const positionLabel = document.createElement('label');
    positionLabel.setAttribute('for', 'position');
    positionLabel.textContent = 'Position';
  
    const positionInput = document.createElement('input');
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('id', 'position');
  
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Player';
    addButton.addEventListener('click', function() {
        addPlayer(id)
    });
  
    teamContainer.appendChild(nameLabel);
    teamContainer.appendChild(nameInput);
    teamContainer.appendChild(positionLabel);
    teamContainer.appendChild(positionInput);
    teamContainer.appendChild(addButton);
  }
  
  
  