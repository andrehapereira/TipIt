$(document).ready(function() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("user");
  console.log(c);
  $.ajax({
    url: "http://localhost:8800/api/users/name/" + c
 }).then(function(data) {
   var user = data [0];
   console.log(data);
   var newElement = document.createElement('div');
//        newElement.innerHTML = "<div class='tipcontainer' onClick='createProfile(user[" + counter + "])'>" +
   newElement.innerHTML = "" + user.username;
   document.getElementById('profileContainer').appendChild(newElement);
  });
});
