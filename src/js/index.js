import $ from 'jquery'
import datepicker from 'js-datepicker'
import '@fancyapps/fancybox'
import Inputmask from 'inputmask'
import noUiSlider from 'nouislider'
import 'parsleyjs'
import 'select2'
import Swiper from 'swiper/bundle'
import 'tooltipster'
import './_backend'

$(function () {
  // inputMask()
  // sliderInit ()
  animationInit ()
  tabInit ()
  sliderInit()
})



// function inputMask() {
//   Inputmask({
//     mask: '+7 (999) 999-99-99',
//     showMaskOnHover: false
//   }).mask('#phone')
// }


function sliderInit() {
  const swiperSlider = new Swiper('.comment-icon__list', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: '.comment-icon-button-next',
      prevEl: '.comment-icon-button-prev'
    }
  })
}

function animationInit () {
  var heightLine = $('.top-slider__title').offset().top
$(window).scroll(function() {
  if ($(window).scrollTop() > heightLine) {
    $('.seconds__line_progress').addClass("seconds__line_progress_active");
  }
});
}

function tabInit () {
  $('.what__item').first().find('.what__text').show();
  $('.what__title').on ('click', function () {
    $('.what__text').slideUp()
    $('.what__title').removeClass('what__title_active')
    $(this).next().stop().stop().slideDown()
    $(this).addClass('what__title_active')
  })
}
