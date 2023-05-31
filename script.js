function toggleScroll() {
    var element = document.getElementById("site");
    element.classList.toggle("stop-scrolling");
}

// FAQ expandable dropdown
function myFunction() {
  var x = document.getElementById("expandable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
