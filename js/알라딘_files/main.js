$(document).ready(function(){
  
  var swiper = new Swiper(".swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
  });

  $(".main_banner .category li").on("click", function(){
    var i = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".main_banner .swiper").eq(i).show();
    $(".main_banner .swiper").eq(i).siblings().hide();
  });

  var windowWidth = $(window).width();

  $(window).on("resize", function(){
    windowWidth = $(window).width();

  });
  if(windowWidth >= 900){
    $("header .nav_button").on("click", function(){
      $("header nav").animate({
        "right" : "0"
      });
      $("header nav .nav_bg").css({
        "display" : "block"
      });
    });
  
    $("header nav .nav_bg").on("click", function(){
      $("header nav").animate({
        "right" : "-570px"
      }, function(){
        $("header nav .nav_bg").css({
          "display" : "none"
        });
      });
    });
  
    $(".main_gnb li").on("click", function(){
      var i = $(this).index();
      
      $(".sub_box_wrap .sub_box").eq(i)
    });
  } else{
    $("header .nav_button").on("click", function(){
      $("header nav").animate({
        "right" : "-100%"
      })
    })
  }
  
  
    

});