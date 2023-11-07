'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModel = document.querySelectorAll('.show-modal');

const openModal = function () {
  //// dont using .hidden inside remove(), pls keep in mind
  //// remove the hidden class to open the hidden element (trick!)
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++) {
  //open window
  btnOpenModel[i].addEventListener('click', openModal);
}

//close window with click "x", closeModal # not closeMoal(), becuase we want closeModal function operate once we click!!
btnCloseModal.addEventListener('click', closeModal);
//close window with click "overlay"
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Backspace' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
