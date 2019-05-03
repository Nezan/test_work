import $ from 'jquery';
import Masonry from 'masonry-layout';


// init masonry
let elem = document.querySelector('.tabs__grid');
let msnry = new Masonry(elem, {
  itemSelector: '.tabs__elem',
  columnWidth: 373,
  gutter: 28,
});

// tab action
$(document).ready(function(){
  $('.tabs__item').on('click', function(){
    $('.tabs__item').removeClass('tabs__item-active');
    $(this).addClass('tabs__item-active');
  })
});
