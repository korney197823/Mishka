'use strict';

var button = document.querySelector('.btn-toggle');
var menu = document.querySelector('.menu');

button.addEventListener('click', function () {
  menu.classList.toggle('menu--close');
});
