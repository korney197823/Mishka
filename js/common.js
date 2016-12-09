'use strict';

var button = document.querySelector('.menu__toggle');
var menu = document.querySelector('.menu');

button.addEventListener('click', function () {
  menu.classList.toggle('menu--close');
});
