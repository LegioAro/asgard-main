//header

function headerScroll() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0 && !header.classList.contains('header--scroll')) {
    header.classList.add('header--scroll');
  } else if (window.pageYOffset <= 0 && header.classList.contains('header--scroll')) {
    header.classList.remove('header--scroll');
  }
}
headerScroll();

window.addEventListener('scroll', function () {
  headerScroll();
});

//burger

function isBurger() {
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const burgerBtn = document.querySelector('.burger__btn');
  const burgerBtnClose = document.querySelector('.burger__btn-close');

  burgerBtn.addEventListener('click', () => {
    burger.classList.add('burger--active');
    body.classList.add('lock');
  });

  burgerBtnClose.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    body.classList.remove('lock');
  });
}
isBurger();

//resize window

isResize('.header__content', '.header__wrapper', '.burger', 850);

window.addEventListener('resize', () => {
  isResize('.header__content', '.header__wrapper', '.burger', 850);
});
