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
  animationInit ();
})



// function inputMask() {
//   Inputmask({
//     mask: '+7 (999) 999-99-99',
//     showMaskOnHover: false
//   }).mask('#phone')
// }


// function sliderInit() {
//   const swiperSlider = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets'
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   })
// }

function animationInit () {
  var heightLine = $('.top-slider__title').offset().top
$(window).scroll(function() {
  if ($(window).scrollTop() > heightLine) {
    $('.seconds__line_progress').addClass("seconds__line_progress_active");
  }
});
}
