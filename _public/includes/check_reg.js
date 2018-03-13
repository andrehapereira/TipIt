$(document).ready(function() {
    var username = document.getElementById('fbuser').value;
    console.log(username);
    /*$.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
     for (var i = 0; i < 5; i++ ) {
       if (data[i] === null || data[i] === undefined) {
         return;
       }
       var newElement = document.createElement('div');
       newElement.className = "tipper";
//        newElement.innerHTML = "<div class='tipcontainer' onClick='createProfile(user[" + counter + "])'>" +
       newElement.innerHTML = "<a href='profile.php?user=" + data[i].username + "'> <div class='tipcontainer'>" +
       "<div class='nameContainer'>" + data[i].username + "</div>" +
       "<div class='profilepic'><img src='" + data[i].picurl + "'/></div>" +
       "<div class='descContainer'>" + data[i].description + "</div>" +
       "</div></a>";
       document.getElementById('topTippers').appendChild(newElement);
     }
   });*/
});
