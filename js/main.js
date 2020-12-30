$(window).on('load', function () {
   $(function () {
      if ($(window).width() < 768) {
         let lastOrder = $('.startFiniss-wrapper .item-info').length
         $('.startFiniss-wrapper .item-info:nth-child(2)').css('order', `-${lastOrder}`);
      }
   })
})

jQuery(function ($) {
   /**-------------------------------------------------
    *Fixed HEader
    *----------------------------------------------------**/



   var WindowHeight = jQuery(window).height();

   var load_element = 0;

   //position of element
   var scroll_position = jQuery('.buildstudio-funfact').offset().top + 1500;
   var screen_height = jQuery(window).height();
   var activation_offset = 0;
   var max_scroll_height = jQuery('body').height() + screen_height;
   var scroll_activation_point = scroll_position - (screen_height * activation_offset);
   $(window).on('scroll', function (e) {
      var y_scroll_pos = window.pageYOffset;
      var element_in_view = y_scroll_pos > scroll_activation_point;
      var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

      if (element_in_view || has_reached_bottom_of_page) {
         jQuery('body').addClass("bildstudio-navColor");
      } else {
         jQuery('body').removeClass("bildstudio-navColor");
      }
   });




   $(window).on('scroll', function () {
      /**Fixed header**/
      if ($(window).scrollTop() > 250) {
         $('.header').addClass('sticky fade_down_effect');
      } else {
         $('.header').removeClass('sticky fade_down_effect');
      }
      let buildstudioOffsetTop = $('#buildstudio-team').offset().top - 400;
      let buildstudioHeight = $('#buildstudio-team').height();
      let expected = buildstudioOffsetTop + buildstudioHeight;
      $(function () {
         if ($(this).scrollTop() > (buildstudioOffsetTop)) {
            $('#bildstudio-sidebar').addClass('section-touched');
         }
         if ($(this).scrollTop() > expected || $(this).scrollTop() < buildstudioOffsetTop) {
            $('#bildstudio-sidebar').removeClass('section-touched');
         }
      });
   });






   /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   $('#bildstudio-sidebar ul li a').on('click', function (e) {
      var href = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(href).offset().top
      }, '300');
      e.preventDefault();
   });



   // slider
   $('.features-sliderWrapper').owlCarousel({
      loop: true,
      margin: 15,
      items: 1,
      center: true,
      pagination: true,
      paginationNumbers: true,
      nav: true,
      smartSpeed: 1200,
      navText: ["<img src='./img/angleleft.png' class='img-fluid' />", "<img src='./img/angle-right.png' class='img-fluid' />"],
      responsive: {
         0: {
            stagePadding: 0,
            margin: 50,
            nav: true,
            dots: false,
         },
         600: {
            stagePadding: 0,
            margin: 0,
         },
         992: {
            stagePadding: 0,
            margin: 0,
            nav: true,
            dots: true,
         },
         1200: {
            stagePadding: 250,
            margin: 125,

         },
         1400: {
            stagePadding: 400,
            margin: 200,
         }
      }
   })


   $('.features-slider').owlCarousel({
      loop: true,
      margin: 15,
      items: 1,
      center: true,
      pagination: true,
      paginationNumbers: true,
      nav: true,
      smartSpeed: 1200,
      navText: ["<img src='./img/angleleft.png' class='img-fluid' />", "<img src='./img/angle-right.png' class='img-fluid' />"],
      responsive: {
         0: {
            stagePadding: 0,
            margin: 50,
            nav: false,
         },
         600: {
            stagePadding: 0,
            margin: 0,
            nav: false,
         },
         992: {
            stagePadding: 0,
            margin: 0,
            nav: false,
         },
         1200: {
            stagePadding: 200,
            margin: 100,
            nav: true,
         },
         1300: {
            stagePadding: 350,
            margin: 175,
            nav: true,
         }
      }
   })


   /*==========================================================
     funfact 
     ======================================================================*/
   var skl = true;
   $('.ts-funfact').appear();

   $('.ts-funfact').on('appear', function () {
      if (skl) {
         $('.counterUp').each(function () {
            var $this = $(this);
            jQuery({
               Counter: 0
            }).animate({
               Counter: $this.attr('data-counter')
            }, {
               duration: 8000,
               easing: 'swing',
               step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 99999) {
                     while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '');
                     }
                  }
                  $this.html(num);
               }
            });
         });
         $('.counterUptwo').each(function () {
            var $this = $(this);
            jQuery({
               Counter: 0
            }).animate({
               Counter: $this.attr('data-counter')
            }, {
               duration: 4000,
               easing: 'swing',
               step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 99999) {
                     while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '');
                     }
                  }
                  $this.html(num);
               }
            });
         });
         $('.counterUpthree').each(function () {
            var $this = $(this);
            jQuery({
               Counter: 0
            }).animate({
               Counter: $this.attr('data-counter')
            }, {
               duration: 4000,
               easing: 'swing',
               step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 99999) {
                     while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '');
                     }
                  }
                  $this.html(num);
               }
            });
         });
         $('.counterUpFour').each(function () {
            var $this = $(this);
            jQuery({
               Counter: 0
            }).animate({
               Counter: $this.attr('data-counter')
            }, {
               duration: 4000,
               easing: 'swing',
               step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 99999) {
                     while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '');
                     }
                  }
                  $this.html(num);
               }
            });
         });
         skl = false;
      }
   });


   /*=============================================================
          speaker popup
   =========================================================================*/

   $('.ts-image-popup').magnificPopup({
      type: 'inline',
      closeOnContentClick: false,
      midClick: true,
      callbacks: {
         beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
         }
      },
      zoom: {
         enabled: true,
         duration: 500, // don't foget to change the duration also in CSS
      },
      mainClass: 'mfp-fade',
   });



   /*=============================================================
            video popup
      =========================================================================*/

   $('.bltd-video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
   });


   /*==========================================================
   wow animated
    ======================================================================*/
   var wow = new WOW({
      animateClass: 'animated',
      mobile: false
   });
   wow.init();


   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".BackTo").fadeIn('slow');
      } else {
         $(".BackTo").fadeOut('slow');
      }
   });

   $(".BackTo").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
   });

   // $("body, html").on("click", ".BackTo", function (e) {
   //    e.preventDefault();
   //    $('html, body').animate({
   //       scrollTop: 0
   //    }, 100);
   // });


});