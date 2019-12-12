$(document).ready(function () {
  $('.advantages__slaider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
  });


  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
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

  });

  window.addEventListener('scroll', function(e) {
    let nav = document.querySelectorAll('[id^="nav"]');
    for (let i = 0; i < nav.length; i++) {
      document.querySelector('a[href="#' + nav[i].id + '"]');
    }
  }, false);

  let linkNav = document.querySelectorAll('[href^="#"]'),
      V = 0.3;
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = function(){
      let w = window.pageYOffset,
          hash = this.href.replace(/[^#]*(.*)/, '$1'),
          t = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
        window.scrollTo(0,r);
        if (r != w + t) {requestAnimationFrame(step);} else {location.hash = hash;}
      }
      return false;
    };
  }

});
