// ハンバーガーメニュー
var hamburger = $('.header__hamburgerMenu');

$('.header__menuBtn').on('click', function () {
  hamburger.toggleClass('header__hamburgerMenu--active');
});

// カルーセル
$('.price-gallery__slick').slick({
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

// アコーディオン
$('.faq-faq__answer').hide();
$('.faq-faq__question .faq-faq__questionBtn .faq-faq__questionBtnMinus').hide();
$('.faq-faq__question').on('click', function (e) {

  var content = $(this).next();
  var arrowup = $(this).children().children('.faq-faq__questionBtnMinus');
  var arrowdown = $(this).children().children('.faq-faq__questionBtnPlus');

  content.slideToggle();
  arrowup.slideToggle(0);
  arrowdown.slideToggle(0);

});
