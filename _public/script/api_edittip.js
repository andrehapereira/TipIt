var owner;
$(document).ready(function() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var param = url.searchParams.get("id");
  console.log(param);
  $.ajax({
    url: "http://localhost:8800/api/tips/id/" + param
 }).then(function(data) {
   var tip = data [0];
   owner = tip.owner;
  document.getElementById('basicDesc').value = tip.description;
   document.getElementById('price').value = parseFloat(tip.price);
   document.getElementById('fullDesc').value = tip.full_description;
  });
});

function goBack() {
  window.history.back();
}

function save() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var param = url.searchParams.get("id");
  console.log(param);
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
