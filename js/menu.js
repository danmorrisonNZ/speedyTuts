window.onload = function(){
  var menuIcon = document.getElementById("hamburger-menu")
  var menu = document.getElementById("menu")
  menuIcon.onclick = function(){
    menu.classList.toggle('menu-active');
  }
}
