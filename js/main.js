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

isResize('.header__content', '.header__wrapper', '.burger', 950);

window.addEventListener('resize', () => {
  isResize('.header__content', '.header__wrapper', '.burger', 950);
});

//cover video addaptive

// const coverVideo = document.querySelector('.cover__video');
// if (coverVideo) {
//   if (document.documentElement.clientWidth <= 768) {
//     coverVideo.src = 'video/mob.mp4';
//   } else {
//     coverVideo.src = 'video/video.mp4';
//   }
// }
const coverVideoDesc = document.querySelector('.cover__video-desc');
const coverVideoMob = document.querySelector('.cover__video-mob');

if (coverVideoDesc && coverVideoMob) {
  if (document.documentElement.clientWidth <= 550) {
    coverVideoDesc.classList.remove('visible');
    coverVideoMob.classList.add('visible');
  } else {
    coverVideoDesc.classList.add('visible');
    coverVideoMob.classList.remove('visible');
  }
}

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();

//review

const reviewBtns = document.querySelectorAll('*[data-review-btn]');
const review = document.querySelector('*[data-review-img]');

if (reviewBtns && review) {
  const reviewImg = review.querySelector('.review__img');
  const reviewZoomBtns = review.querySelectorAll('.review__btn');
  if (reviewBtns.length > 0 && reviewImg) {
    reviewBtns.forEach((reviewBtn) => {
      reviewBtn.addEventListener('click', () => {
        review.classList.remove('review--scale');
        const sourceBigImg = reviewBtn.getAttribute('data-review-big');
        reviewImg.setAttribute('src', sourceBigImg);
      });
    });
  }

  if (reviewZoomBtns.length > 0) {
    reviewZoomBtns.forEach((zoomBtn) => {
      zoomBtn.addEventListener('click', () => {
        if (zoomBtn.hasAttribute('data-review-zoom')) {
          let zoomBtnAttr = zoomBtn.getAttribute('data-review-zoom');

          if (zoomBtnAttr === 'plus') {
            review.classList.add('review--scale');
          } else if (zoomBtnAttr === 'minus') {
            review.classList.remove('review--scale');
          }
        }
      });
    });
  }

  if (window.innerHeight > 1024) {
  }

  review.onmousedown = () => {
    let pageX = 0;
    let pageY = 0;

    document.onmousemove = (e) => {
      if (pageX !== 0) {
        review.scrollLeft = review.scrollLeft + (pageX - e.pageX);
      }
      if (pageY !== 0) {
        review.scrollTop = review.scrollTop + (pageY - e.pageY);
      }
      pageX = e.pageX;
      pageY = e.pageY;
    };

    review.onmouseup = () => {
      document.onmousemove = null;
      review.onmouseup = null;
    };

    review.ondragstart = () => {
      return false;
    };
  };
}
