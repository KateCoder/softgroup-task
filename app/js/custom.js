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
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
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
    
    
    
    $('#top-slider').on('slide.bs.carousel', function () {
        
      $('.item.active .cv').animate({left: "-50px"}, 400, "linear");
    });
    
     $('#top-slider').on('slid.bs.carousel', function () {
        var slideWidth = $('.item.active').width();
        var cvWidth = $('.item.active .cv').width(); 
        var buttonWidth = $('.item.active .request a').outerWidth();
        var left = slideWidth/2 - buttonWidth/2 - cvWidth - 5;
        left += "px";
      $('.item.active .cv').animate({left: left}, 400, "linear");
    });

});