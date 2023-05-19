function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    $.ajax({
        url: 'handlers/login.php',
        type: 'get',
        data: { 
            "username": username, 
            "password": password
        },
        success: function(response){
            if(response == "null"){
                alert("Wrong username or password");
            }
            else {
                location.href="league.php";
            }
        },
        error: function(xhr){
            alert("ERROR" + xhr.status);
        }
     });
}