jQuery(function(o){"use strict";o(".nav_content").on("click","a",function(s){s.preventDefault();s=o(this).attr("href"),s=o(s).offset().top;o(this).parent().addClass("active").siblings().removeClass("link-active"),o("body,html").animate({scrollTop:s-30},1e3)}),o(".toggle_menu").click(function(){return o(this).toggleClass("active"),o(".wrap_menu").toggleClass("active"),o(".contacts_head").toggleClass("active"),o("body").toggleClass("deactive"),!1}),o(".js-searchFormTrigger").click(function(){return o(".searchForm").addClass("_expanded"),!1}),o(".js-searchFormTrigger").click(function(){o(".searchForm").addClass("_expanded")}),o(document).on("click",function(s){o(".searchForm").removeClass("_expanded"),s.stopPropagation()}),o("img.svg").each(function(){var e=jQuery(this),o=e.attr("id"),t=e.attr("class"),s=e.attr("src");jQuery.get(s,function(s){s=jQuery(s).find("svg");void 0!==o&&(s=s.attr("id",o)),void 0!==t&&(s=s.attr("class",t+" replaced-svg")),s=s.removeAttr("xmlns:a"),e.replaceWith(s)},"xml")}),o(".carousel_banner").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3}),o(".carousel_service").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:910,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),o(".carousel_work").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:860,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]}),o(".carousel_testimonials").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,responsive:[{breakpoint:520,settings:{slidesToShow:1,slidesToScroll:1}}]}),o(".carousel_advantage").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3}),o(".gallery_service").slick({dots:!0,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),o("body").on("click",".btn_top",function(){return o("html, body").animate({scrollTop:0},1e3),!1}),o(".tabs_tariff .tab").click(function(){var s=o(".tabs_tariff .tab"),e=o(".content_tariff .inner_tariff");return s.removeClass("active"),e.removeClass("active"),o(this).addClass("active"),e.eq(o(this).index()).addClass("active"),!1}),o(".statistik").viewportChecker({callbackFunction:function(s,e){o("#lines1").animateNumber({number:90},1500),o("#lines2").animateNumber({number:70},1500)}}),o('input[type="tel"]').mask("+7 (999) 999-99-99")}),$(window).scroll(function(){$(this).scrollTop()>$(this).height()?$(".scroll_top").addClass("active"):$(".scroll_top").removeClass("active")});var hHeight,h=document.querySelector(".main_head");function onScroll(){window.addEventListener("scroll",function(){99<window.pageYOffset?h.classList.add("scroll"):h.classList.remove("scroll")})}window.onload=function(){onScroll()};