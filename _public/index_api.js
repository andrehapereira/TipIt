var user = [];

$(document).ready(function() {
    $.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
     for (var i = 0; i < 5; i++ ) {
       if (data[i] === null || data[i] === undefined) {
         return;
       }
       var newElement = document.createElement('div');
       newElement.className = "tipper";
//        newElement.innerHTML = "<div class='tipcontainer' onClick='createProfile(user[" + counter + "])'>" +
       newElement.innerHTML = "<a href='profile.php?user=" + data[i].username + "'> <div class='tipcontainer'>" +
       "<div class='nameContainer'>" + data[i].username + "</div>" +
       "<div class='profilepic'><img src='" + data[i].picurl + "'/></div>" +
       "<div class='descContainer'>" + data[i].description + "</div>" +
       "</div></a>";
       document.getElementById('topTippers').appendChild(newElement);
     }
    });

    $.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
     var counter = 0;
    data.forEach(element => {
    counter++;
  });
    document.getElementById('userCount').innerHTML = "Tippers: " + counter;
    });

});


function createProfile(user) {
	console.log(user);
	var doc = document.implementation.createHTMLDocument("New Document");
	var p = doc.createElement("p");
	p.innerHTML = "This is a new paragraph.";

	try {
		doc.body.appendChild(p);
		console.log("created");
	} catch(e) {
		console.log(e);
	}
}
