$(function () {

  // scroll menu
  if (window.innerWidth > 1276) {
    $(window).scroll(function () {
      var sticky = $('.sticky'),
        adress = $('.adress'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) {
        sticky.addClass('fixed');
        adress.addClass('none');
      }
      else {
        sticky.removeClass('fixed')
        adress.removeClass('none');
      };
    });
  } else {
    $('.sticky').addClass('fixed');
    $('.adress').addClass('none');
  }

  // modal-menu
  $('.header__menu-button').on('click', function () {
    $('.modal-menu').addClass('active');
    $('body').addClass('lock');
  });
  $('.modal-menu').on('click', function () {
    $('.modal-menu').removeClass('active');
    $('body').removeClass('lock');
  });
  $('.click').on('click', function () {
    $('.modal').addClass('activ');
  });
  $('.close').on('click', function () {
    $('.modal').removeClass('activ');
  });

  // uPTop
  $('.back-to-top').click(function () {
    $('body,html').animate({scrollTop: 0}, 800); // 800 - Скорость анимации
  });

  $(window).scroll(function () { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('active');
    } else {
      $('.back-to-top').removeClass('active');
    }
  });

})