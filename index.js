console.log ('hello world')
function mobileMenu() {
    if (document.getElementById("mainMenu").style.display == "block") {
      document.getElementById("mainMenu").style.display = "none";
    } else {
      document.getElementById("mainMenu").style.display = "block";
    }
  }
   document.getElementById("openMenu").addEventListener("click", mobileMenu);
   document.getElementById("closeMenu").addEventListener("click", mobileMenu);

