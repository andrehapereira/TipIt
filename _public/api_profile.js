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
   document.getElementById('userName').innerHTML = user.username;
   document.getElementById('userPic').innerHTML = '<img src="' + user.picurl + '" style="width:100%;"/>';
   document.getElementById('profileDesc').innerHTML = '<p><span>Description:</span></p><p>' + user.description + '</p>';
   document.getElementById('reportUser').innerHTML = '<button type="button" class="btn btn-danger" name="'+ user.id +'">Report</button>';
  });
  $.ajax({
    url: "http://localhost:8800/api/tips/owner/" + c
 }).then(function(data) {
    data.forEach(element => {
      var newElement = document.createElement('div');
      newElement.className = "tip";
      newElement.innerHTML = '<span>'+ element.description+'</span><button type="button" class="btn" name="'+ element.id +'">Buy</button>';
      document.getElementById('userTips').appendChild(newElement);
    });
  });
});
