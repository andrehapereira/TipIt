function goBack() {
  window.history.back();
}

function save() {
  var username = getCookie('user');
  var description = document.getElementById("basicDesc").value;
  var price = document.getElementById("price").value;
  var full_desc = document.getElementById("fullDesc").value;
  var jsonData = JSON.stringify({
    owner: username,
    description: description,
    price: price,
    full_description: full_desc
  });
  $.ajax({
    url: "http://localhost:8800/api/tips/register",
    type: "POST",
    dataType: "json",
    data: jsonData,
    contentType: "application/json"
}).then(function() {window.location.href = "myprofile.php";});
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
