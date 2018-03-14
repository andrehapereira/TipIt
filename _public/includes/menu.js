function openNav() {
  var left = document.getElementById("header").style.left;
  if (left === "0%") {
    document.getElementById("header").style.left = "-100%";
  } else {
    document.getElementById("header").style.left = "0%";
  }
}
