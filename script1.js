var navbar = document.getElementById("navbar")

function menuTap(){
    if (navbar.style.height === "75px") {
        navbar.style.height = "fit-content";
      } else {
        navbar.style.height = "75px";
      }
}