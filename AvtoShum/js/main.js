jQuery(function(o){"use strict";o(".nav_content").on("click","a",function(e){e.preventDefault();e=o(this).attr("href"),e=o(e).offset().top;o(this).parent().addClass("active").siblings().removeClass("link-active"),o("body,html").animate({scrollTop:e-30},1e3)}),o(".toggle_menu").click(function(){return o(this).toggleClass("active"),o(".wrap_menu").toggleClass("active"),o(".contacts_head").toggleClass("active"),o("body").toggleClass("deactive"),!1}),o(".wrap_information .link_more").click(function(){return o(this).hide(),o(this).parent().find(".step_service").addClass("active"),o(this).parent().find(".item_step").addClass("active"),!1}),o(".js-searchFormTrigger").click(function(){return o(".searchForm").addClass("_expanded"),!1}),o(".js-searchFormTrigger").click(function(){o(".searchForm").addClass("_expanded")}),o(document).on("click",function(e){o(".searchForm").removeClass("_expanded"),e.stopPropagation()}),o("img.svg").each(function(){var s=jQuery(this),o=s.attr("id"),i=s.attr("class"),e=s.attr("src");jQuery.get(e,function(e){e=jQuery(e).find("svg");void 0!==o&&(e=e.attr("id",o)),void 0!==i&&(e=e.attr("class",i+" replaced-svg")),e=e.removeAttr("xmlns:a"),s.replaceWith(e)},"xml")}),o(".carousel_banner").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3}),o(".carousel_service").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:910,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),o(".carousel_work").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:860,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]}),o(".carousel_testimonials").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,responsive:[{breakpoint:520,settings:{slidesToShow:1,slidesToScroll:1}}]}),o(".carousel_advantage").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3}),o(".gallery_service").slick({dots:!0,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),o("body").on("click",".btn_top",function(){return o("html, body").animate({scrollTop:0},1e3),!1}),o(".tabs_tariff .tab").click(function(){var e=o(".tabs_tariff .tab"),s=o(".content_tariff .inner_tariff");return e.removeClass("active"),s.removeClass("active"),o(this).addClass("active"),s.eq(o(this).index()).addClass("active"),!1}),o(".statistik").viewportChecker({callbackFunction:function(e,s){o("#lines1").animateNumber({number:90},1500),o("#lines2").animateNumber({number:70},1500)}}),o('input[type="tel"]').mask("+7 (999) 999-99-99")}),$(window).scroll(function(){$(this).scrollTop()>$(this).height()?$(".scroll_top").addClass("active"):$(".scroll_top").removeClass("active")});var hHeight,h=document.querySelector(".main_head");function onScroll(){window.addEventListener("scroll",function(){99<window.pageYOffset?h.classList.add("scroll"):h.classList.remove("scroll")})}window.onload=function(){onScroll()};