function myFunction(x) {
  x.classList.toggle("change");
}
$('.dropdown-toggle').dropdown()

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function alert(Message sent!) {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}