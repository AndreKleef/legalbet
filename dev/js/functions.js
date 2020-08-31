let burgerButton = document.querySelector('.burger'),
    burgerAdditional = document.querySelector('.page-header__additional'),
    burgerMenu = document.querySelector('.page-header__nav'),

    contentButton = document.querySelector('.content__button'),
    contentBlock = document.querySelector('.content__block');

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('activeburger');
  burgerAdditional.classList.toggle('openmenu-right');
  burgerMenu.classList.toggle('openmenu-left');
});

contentButton.addEventListener('click', function() {
  contentButton.classList.toggle('active');
  contentBlock.classList.toggle('open');
});
