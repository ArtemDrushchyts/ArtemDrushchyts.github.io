$(document).ready(function () {
  $('.advantages__slaider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
  });
});

window.addEventListener('DOMContentLoaded', function() {
  let mainBtn = document.getElementsByClassName('main-btn')[0];
  let overlay = document.getElementsByClassName('overlay')[0];
  let close = document.getElementsByClassName('popup-close')[0];
  let popup = document.getElementsByClassName('popup')[0];

  mainBtn.addEventListener('click', () => {

    overlay.style.display = 'block';
    overlay.classList.add('animateSlade');
    document.body.style.overflow = 'hidden';

  });

  close.addEventListener('click', () => {
    overlay.classList.remove('animateSlade');
    overlay.style.display = 'none';
    document.body.style.overflow = '';

  })

});
