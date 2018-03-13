$(document).ready(function() {
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
