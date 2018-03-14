
$(document).ready(function() {
  var username = getCookie('user');
  $.ajax({
    url: "http://localhost:8800/api/users/name/" + username
 }).then(function(data) {
   var user = data [0];
   console.log(user);


   document.getElementById('desc').value = user.description;
  });
});

function goBack() {
  window.history.back();
}

function save() {
  var username = getCookie('user');
  var description = document.getElementById('desc').value;
  $.ajax({
    url: "http://localhost:8800/api/users/name/" + username
  }).then(function(data) {
   var user = data [0];
   var jsonData = JSON.stringify({
     username: user.username,
     name: user.name,
     password: user.password,
     email: user.email,
     picurl: user.picurl,
     description: description
   });
   $.ajax({
     url: "http://localhost:8800/api/users/update/" + username,
     type: "PUT",
     dataType: "json",
     data: jsonData,
     contentType: "application/json"
   }).then(function() {//window.location.href = "myprofile.php";
 });

  });

}

function removeTip(tipID) {
  $.ajax({
      url: 'http://localhost:8800/api/tips/delete/' + tipID,
      type: 'DELETE',
  }).then(function() {location.reload();});
}

function editTip(tipID) {
window.location.href = "edittip.php?id=" + tipID;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
