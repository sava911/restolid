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


  // text js

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {delta /= 2;}

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  // questions__item
  $(".questions__item-subtext").click(function () {
    $(this).parent().find(".questions__item-text").slideToggle();
    $(this).toggleClass("opened");
    return false;
  });


})

