
$(document).ready(function() {
    $.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
	  data.forEach(element => {
        var newElement = document.createElement('div');
        newElement.className = "tipper";
//        newElement.innerHTML = "<div class='tipcontainer' onClick='createProfile(user[" + counter + "])'>" +
        newElement.innerHTML = "<a href='profile.php?user=" + element.username + "'> <div class='tipcontainer'>" +
        "<div class='nameContainer'>" + element.username + "</div>" +
        "<div class='profilepic'><img src='" + element.picurl + "'/></div>" +
        "<div class='descContainer'>" + element.description + "</div>" +
        "</div></a>";
        document.getElementById('tippersContainer').appendChild(newElement);
	  });
  });

});
