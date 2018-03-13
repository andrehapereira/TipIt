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
   document.getElementById('reportUser').innerHTML = '<button id="btnAdd" type="button" class="btn btn-success" name="'+ user.id +'" onClick="addTip()">ADD TIP</button><button style="margin-left:2%; margin-right:2%;" type="button" class="btn btn-primary" name="'+ user.id +'">Edit Profile</button>';
  });
  $.ajax({
    url: "http://localhost:8800/api/tips/owner/" + c
 }).then(function(data) {
    data.forEach(element => {
      var newElement = document.createElement('div');
      newElement.className = "tip";
      newElement.innerHTML = '<div  style="width:50%; display:inline-block;"><span>'+ element.description+'</span></div><button type="button" class="btn" style="margin-left:3%;" onclick="editTip('+ element.id +')">Edit</button><button type="button" class="btn" style="margin-left:1%;" onclick="removeTip(' + element.id + ')">Remove</button>';
      document.getElementById('userTips').appendChild(newElement);
    });
  });
});


function addTip() {
  var userID = document.getElementById("btnAdd").getAttribute("name");
  $.ajax({
    url: 'http://localhost:8800/api/users/id/' + userID
 }).then(function(data) {
   var user = data [0];
   window.location.href = 'addtip.php?user=' + user.username;
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
