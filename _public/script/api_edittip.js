
$(document).ready(function() {
  var username = getCookie('user');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var param = url.searchParams.get("id");
  $.ajax({
    url: "http://localhost:8800/api/tips/id/" + param
 }).then(function(data) {
   var tip = data [0];
   console.log(tip);
   if (!tip) {
     alert('This tip doesnt exist!');
     window.location.href = 'myprofile.php';
   }

   if (tip.owner != username) {
     alert('You dont own this tip, please, try to edit a tip you own!');
     window.location.href = 'myprofile.php';
   }
  document.getElementById('basicDesc').value = tip.description;
   document.getElementById('price').value = parseFloat(tip.price);
   document.getElementById('fullDesc').value = tip.full_description;
  });
});

function goBack() {
  window.history.back();
}

function save() {
  var owner = getCookie('user');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var param = url.searchParams.get("id");
  var description = document.getElementById("basicDesc").value;
  var price = document.getElementById("price").value;
  var full_desc = document.getElementById("fullDesc").value;
  var jsonData = JSON.stringify({
    owner: owner,
    description: description,
    price: price,
    full_description: full_desc
  });
  $.ajax({
    url: "http://localhost:8800/api/tips/update/" + param,
    type: "PUT",
    dataType: "json",
    data: jsonData,
    contentType: "application/json"
}).then(function() {window.location.href = "myprofile.php?user=" + owner;});
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
