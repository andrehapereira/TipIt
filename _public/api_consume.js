var user = [];

$(document).ready(function() {
    $.ajax({
      url: "http://localhost:8800/api/users"
   }).then(function(data) {
	   var counter = 0;
	  data.forEach(element => {
		user.push(element)
        var newElement = document.createElement('div');
        newElement.className = "tipper";
//        newElement.innerHTML = "<div class='tipcontainer' onClick='createProfile(user[" + counter + "])'>" +
        newElement.innerHTML = "<a href='profile.html?user=" + element.username + "'> <div class='tipcontainer'>" +
        "<div class='nameContainer'>" + element.username + "</div>" +
        "<div class='profilepic'><img src='" + element.picurl + "'/></div>" +
        "<div class='descContainer'>" + element.description + "</div>" +
        "</div></a>";
        document.getElementById('globalContainer').appendChild(newElement);
		counter++;
	  });
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
