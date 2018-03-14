$(document).ready(function() {
    var username = getCookie('user');
    var profileUrl = getCookie('profilePic');
    var mail = getCookie('mail');
    var name = getCookie('firstname');
    var lastname = getCookie('lastname');
    $.ajax({
      url: "http://localhost:8800/api/users/name/" + username
   }).then(function(data) {
     if(data.error === true) {
       var jsonData = JSON.stringify({
         username: username,
         name: name + ' ' + lastname,
         password: '',
         email:mail,
         picurl: profileUrl,
         description: ''
       });
       console.log(jsonData);
       $.ajax({
         url: "http://localhost:8800/api/users/register",
         type: "POST",
         dataType: "json",
         data: jsonData,
         contentType: "application/json"
       }).then(function() {window.location.href = "index.php"});
     }
    });
});


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
