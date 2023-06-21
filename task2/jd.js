function getUsers() {
    var loader = document.getElementById("loader");
    var userList = document.getElementById("userList");
    
    // Display the loader while fetching data
    loader.style.display = "block";

    // Fetch user data from the API
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(data => {
        // Hide the loader
        loader.style.display = "none";

        // Process the user data
        var users = data.data;
        var userListHTML = "";
        users.forEach(user => {
          userListHTML += '<div><strong>Name:</strong> ' + user.first_name + ' ' + user.last_name + '</div>';
          userListHTML += '<div><strong>Email:</strong> ' + user.email + '</div><br>';
        });

        // Display the user list
        userList.innerHTML = userListHTML;
      })
      .catch(error => {
        // Hide the loader on error
        loader.style.display = "none";
        console.error(error);
      });
  }