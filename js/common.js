'use strict';

var menuButton = document.querySelector('.menu__toggle');
var menu = document.querySelector('.menu__item');
//var menu = menu.classList.remove('menu__item--logo');
console.log(menu);
menuButton.addEventListener('click', function () {
  menu.classList.toggle('menu__item--close');
});

//Modal window

var openModalBtn = document.querySelector('.modal--open');
var closeModalBtn = document.querySelector('.modal--close');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal__content');

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal, false);
