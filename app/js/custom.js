$(document).ready(function(){
    $('.sub-menu-toggle').hover(
        function() {
            $('.aside-menu').fadeIn();
        },
        function() {
             $('.aside-menu').delay(300).fadeOut();
        }
    );
    
  $('.clients-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: false,
      draggable: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 625,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  ]
  });
    
});