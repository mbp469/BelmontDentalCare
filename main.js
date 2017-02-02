
var menu = document.querySelector('.menu-icon');
var items = document.querySelector('.menu-items');
var nav = document.querySelector('.nav-box');
var toggleMenu = function() {
  if(nav.classList.contains('active')){
    nav.classList.remove('active');
    items.classList.add('squish');
  }
  else {
    nav.classList.add('active');
    items.classList.remove('squish');
  }
};
menu.addEventListener('click',toggleMenu);
