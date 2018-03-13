function goBack() {
  window.history.back();
}

function save() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("user");
  console.log(c);
  var description = document.getElementById("basicDesc").value;
  var price = document.getElementById("price").value;
  var full_desc = document.getElementById("fullDesc").value;
  var jsonData = JSON.stringify({
    owner: c,
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
}).then(function() {window.location.href = "myprofile.php?user=" + c;});
}
