$(document).ready(function () {
  var windowWidth = $(window).width();

  $(".main_banner .category li").eq(0).children("a").addClass("on");
  $(".row1 .tit-tap>div").eq(0).children("a").addClass("on");
  $(".row2 .category li").eq(0).children("a").addClass("on");

  var swiper = new Swiper(".main_banner .swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mb-swiper-pagination",
      clickable: true,
    }
  });

  $("header .nav_button").on("click", function () {
    $("header nav").addClass("nav-open");
    $("header nav .nav_bg").show();
  });

  $("header nav .main_gnb_wrapper button, header nav .nav_bg").on("click", function () {
    $("header nav").removeClass("nav-open");
    $("header nav").removeClass("sub-open");
    $("header nav .nav_bg").hide();
  });

  $("nav .main_gnb li").on("click", function () {
    var i = $(this).index();
    $(".sub_box").eq(i).css("display", "block").siblings().css("display", "none");
    $("header nav").addClass("sub-open");
  })

  $("nav .sub_gnb_wrapper button").on("click", function () {
    $("header nav").removeClass("sub-open");
  })

  $(".main_banner .category li").on("click", function () {
    var i = $(this).index();
    $(this).children("a").addClass("on").parent().siblings().children("a").removeClass("on");
    $(".main_banner .swiper").eq(i).show();
    $(".main_banner .swiper").eq(i).siblings().hide();

    swiper.map(function (slider) {
      slider.slideTo(0, 0);
    })
  });

  var swiperRow1 = new Swiper(".row1_swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      680: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".row1-swiper-button-next",
      prevEl: ".row1-swiper-button-prev",
    },
    pagination: {
      el: ".row1-swiper-pagination",
      type: "progressbar"
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    
  });

  $(".row1 .tit-tap>div").on("click", function() {
    var i = $(this).index();
    $(this).children("a").addClass("on").parent().siblings().children("a").removeClass("on");
    $(".row1 .row1_swiper").eq(i).show();
    $(".row1 .row1_swiper").eq(i).siblings(".row1_swiper").hide();
  });

  var swiperRow2 = new Swiper(".row2_swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      680: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".row2-swiper-button-next",
      prevEl: ".row2-swiper-button-prev",
    },
    pagination: {
      el: ".row2-swiper-pagination",
      type: "progressbar"
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  });

  $(".row2 .category li").on("click", function () {
    var i = $(this).index();
    $(this).children("a").addClass("on").parent().siblings().children("a").removeClass("on");
    $(".row2 .row2_swiper").eq(i).show();
    $(".row2 .row2_swiper").eq(i).siblings(".row2_swiper").hide();
  });

  var swiperBn1 = new Swiper(".banner1_swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    loop: true
  });

  var swiperRow3Opt = {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      680: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    pagination: {
      el: ".row3-swiper-pagination",
      type: "progressbar"
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  }

  var swiperRow3 = new Swiper(".row3_swiper", swiperRow3Opt);

  function setSwiperRow3(){
    windowWidth = $(window).width();
    
    if(windowWidth >= 1080 && swiperRow3){
      swiperRow3.destroy();
      swiperRow3 = null;
    } else if(windowWidth < 1080 && !swiperRow3){
      swiperRow3 = new Swiper(".row3_swiper", swiperRow3Opt);
    };
  }

  $(window).on("resize", function () {
    setSwiperRow3();
  });

  var swiperRow4 = new Swiper(".row4_swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      680: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      850: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".row4-swiper-button-next",
      prevEl: ".row4-swiper-button-prev",
    },
    pagination: {
      el: ".row4-swiper-pagination",
      type: "progressbar"
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  });

  var swiperRow6_1 = new Swiper(".row6_1_swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      580: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".row6-1-swiper-pagination",
      type: "progressbar"
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  });

  var swiperRow6_2_Opt = {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      680: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1080: {
        slidesPerView: 4
      }
    },
    pagination: {
      el: ".row6-2-swiper-pagination",
      type: "progressbar"
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  }

  var swiperRow6_2 = new Swiper(".row6_2_swiper", swiperRow6_2_Opt);

  function setSwiperRow6_2(){
    windowWidth = $(window).width();
    
    if(windowWidth >= 1080 && swiperRow6_2){
      swiperRow6_2.destroy();
      swiperRow6_2 = null;
    } else if(windowWidth < 1080 && !swiperRow6_2){
      swiperRow6_2 = new Swiper(".row6_2_swiper", swiperRow6_2_Opt);
    };
  }

  $(window).on("resize", function () {
    setSwiperRow6_2();
  });

  function init(){
    setSwiperRow6_2();
    setSwiperRow3();
    //...
  }

  init();

});