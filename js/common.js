'use strict';

var button = document.querySelector('.menu__toggle');
var menu = document.querySelector('.menu__item');
//var menu = menu.classList.remove('menu__item--logo');
console.log(menu);
button.addEventListener('click', function () {
  menu.classList.toggle('menu__item--close');
});
