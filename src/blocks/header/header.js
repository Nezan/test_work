import $ from "jquery";
$(document).ready(function () {

  // hover menus
  $('.nav__item-submenu').hover(function () {
    $('.nav__submenu-first').slideToggle();
  });
  $('.nav__subitem').hover(function () {
    let submenu = $(this).data('menu');
    $(submenu).slideToggle();
  });
  
  // animate search
  $('.search-form__link').on('click', function () {
    $('.search-form__control').toggleClass('search-form__control-visible');
    $(this).toggleClass('search-form__link-visited');
  })

  // mobile button
  $('.nav__button').on('click', function () {
    $('.nav__list').toggleClass('nav__list-visible');
  });

  // fixed navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar__top').addClass('navbar__top-fixed');
     } else{
        $('.navbar__top').removeClass('navbar__top-fixed');
      }
  });
});

