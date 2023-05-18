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
    $.ajax({
        url: "handlers/getTeams.php",
        type: "get",
        data: {
            id: id
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
                const position = data[i].position;
                const teamId = data[i].teamId;
                addPlayerToBottom(id, name, points);
              }
        },
        error: function (xhr) {
            alert("ERROR" + xhr.status);
        },
    });
}

function addClubToBottom(id, playerName, position) {
    const clubList = document.querySelector('.team-container-main'); // Select the element with class 'list-group'
    const clubElement = document.createElement('button'); // Create a button element instead of a div
    const pointsElement = document.createElement('p');
    clubElement.classList.add('list-group-item', 'list-group-item-action', 'club-button', 'text-light'); // Add necessary classes to the button
    clubElement.setAttribute('data-club', clubText+'('+points+')'); // Set the 'data-club' attribute to the club text
    clubElement.textContent = playerName;
    pointsElement.textContent = position;
  
    // clubElement.addEventListener('click', function() {
    //   // Handle the click event
    //   getAllPlayers(id);
    // });
  
    clubList.appendChild(clubElement);
    clubElement.appendChild(pointsElement);
  }
// function addClubToBottom1(clubText, points) {
//     const clubList = document.querySelector('.list-group'); // Select the element with class 'list-group'
//     const clubElement = document.createElement('button'); // Create a button element instead of a div
//     const pointsElement = document.createElement('p');
//     clubElement.classList.add('list-group-item', 'list-group-item-action', 'club-button', 'text-light'); // Add necessary classes to the button
//     clubElement.setAttribute('data-club', clubText); // Set the 'data-club' attribute to the club text
//     clubElement.textContent = clubText;
//     pointsElement.textContent = 'Points: '+points;
//     clubList.appendChild(clubElement);
//     clubElement.appendChild(pointsElement);
//   }

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
  
  
  