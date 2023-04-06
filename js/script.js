$(function () {

   $('.bottom_designing_slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // fade:true,
      speed: 200
   });

   $('.offers_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 200,
      responsive: [{
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               variableWidth: false,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.offers_white_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 200,
      responsive: [{
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               variableWidth: false,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.decision_slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 200,
      responsive: [{
            breakpoint: 1600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.reviews_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 200,
      responsive: [{
            breakpoint: 1400,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.customers_slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               variableWidth: false,
               variableWidth: false,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               variableWidth: false,
               variableWidth: false,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.quality_slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      variableWidth: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 200,
      responsive: [{
            breakpoint: 1400,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.racks_content_left_big_slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 200,
      fade: true,
      asNavFor: ".racks_content_left_slider"
   });

   $('.racks_content_left_slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 200,
      asNavFor: ".racks_content_left_big_slider",
      responsive: [{
         breakpoint: 576,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         }
      }]
   });

   $('.implementation_installation_slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 200,
      responsive: [{
         breakpoint: 576,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      }]
   });

   $('.implemented_project_slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 200,
      responsive: [{
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   });


   $('.company_title').click(function (event) {
      $(this).toggleClass('active');
      $('.company_text').toggleClass('company_text_active');
   });

   $('.about_product_title').click(function (event) {
      $(this).toggleClass('active');
      $('.about_product_text').toggleClass('about_product_text_active');
   });

   $('.burger').click(function (event) {
      $(this).toggleClass('burger_active');
      $('.header_list').toggleClass('header_list_active');
      $('.header_text').toggleClass('header_text_active');
   });

   $('.more_arrow').on('click', function () {
      let inp_val = $(this).parent().find('input').val();
      inp_val = parseInt(inp_val);
      inp_val++;
      $(this).parent().find('input').val(inp_val);
   });
   $('.less_arrow').on('click', function () {
      let inp_val = $(this).parent().find('input').val();
      if (inp_val < 2) {

      } else {
         inp_val = parseInt(inp_val);
         inp_val--;
         $(this).parent().find('input').val(inp_val);
      }
   });

   $('.products_list_catalog_point_crumb_rack').click(function (event) {
      if ($('.products_list_catalog').hasClass('one')) {
         $('.products_list_catalog_point_crumb_rack').not($(this)).removeClass('active');
         $('.products_internal_list_rack').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });

   $('.more_answers_right_block_title').click(function (event) {
      if ($('.more_answers_right_block').hasClass('one')) {
         $('.more_answers_right_block_title').not($(this)).removeClass('active');
         $('.more_answers_right_block_text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });

   $('.products_list_burger').click(function (event) {
      $(this).toggleClass('products_list_burger_active');
      $('.products_list_catalog').toggleClass('products_list_catalog_active');
   });

   $('.contacts_title').click(function (event) {
      if ($('.contacts_text').hasClass('one')) {
         $('.contacts_title').not($(this)).removeClass('active');
         $('.contacts_item_text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });

   $('.top_designing_catalog').click(function (event) {
      $('.overlay').toggleClass('active');

      if ($('.overlay').hasClass('active')) {
         $('.top_designing_catalog').html('<img src="img/catalog_off.png" alt="">Каталог продукції</div>');
      } else {
         $(this).html('<img src="img/catalog_on.png" alt="">Каталог продукції</div>');
      }
   });

   $('.top_products_catalog').click(function (event) {
      $('.products_overlay').toggleClass('products_active');

      if ($('.products_overlay').hasClass('products_active')) {
         $('.top_products_catalog').html('<img src="img/catalog_off.png" alt="">Каталог продукції</div>');
      } else {
         $(this).html('<img src="img/catalog_on.png" alt="">Каталог продукції</div>');
      }
   });

   $('.customer_info').click(function (event) {
      $(this).toggleClass('customer_info_active');
      $('.customers_info_active').toggleClass('info_active');
   });

   $('.language').click(function (event) {
      $(this).toggleClass('language_active');
      $('.language_more').toggleClass('language_more_active');
   });

   $('.top_designing_phone').click(function (event) {
      $(this).toggleClass('top_designing_phone_active');
      $('.top_designing_phone_more').toggleClass('top_designing_phone_active');
   });

   $('.tabs-wrapper').each(function () {
      let ths = $(this);
      ths.find('.tab-item').not(':first').hide();
      ths.find('.tab').click(function () {
         ths.find('.tab').removeClass('tabs-wrapper_active').eq($(this).index()).addClass('tabs-wrapper_active');
         ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('tabs-wrapper_active');
   });

   $('.popup_btn').click(function (event) {
      $('.popups_wrapper').addClass('popups_active');
   });

   $('.close_popup').click(function (event) {
      $('.popups_wrapper').removeClass('popups_active');
   });

   $('.search').click(function (event) {
      $('.search_input').toggleClass('search_input_active');
   });

   

})