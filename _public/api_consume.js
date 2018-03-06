$(document).ready(function() {
    $.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
      data.forEach(element => {
        console.log(element);
        var newElement = document.createElement('div');
        newElement.className = "tipper";
        newElement.innerHTML = "<a href='profile.html'><div class='tipcontainer'>" +
        "<div class='nameContainer'>" + element.username + "</div>" +
        "<div class='profilepic'><img src='" + element.picurl + "'/></div>" +
        "<div class='descContainer'>" + element.description + "</div>" +
        "</div></a>";
        document.getElementById('globalContainer').appendChild(newElement);
      });
    });
    $.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
      data.forEach(element => {
        console.log(element);
        var newElement = document.createElement('div');
        newElement.className = "tipper";
        newElement.innerHTML = "<a href='profile.html'><div class='tipcontainer'>" +
        "<div class='nameContainer'>" + element.username + "</div>" +
        "<div class='profilepic'><img src='" + element.picurl + "'/></div>" +
        "<div class='descContainer'>" + element.description + "</div>" +
        "</div></a>";
        document.getElementById('globalContainer').appendChild(newElement);
      });
    });
});
