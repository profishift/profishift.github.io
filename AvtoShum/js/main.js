jQuery(function(i){"use strict";i(".nav_content").on("click","a",function(e){e.preventDefault();e=i(this).attr("href"),e=i(e).offset().top;i(this).parent().addClass("active").siblings().removeClass("link-active"),i("body,html").animate({scrollTop:e-30},1e3)}),i(".toggle_menu").click(function(){return i(this).toggleClass("active"),i(".wrap_menu").toggleClass("active"),i(".contacts_head").toggleClass("active"),i("body").toggleClass("deactive"),!1}),i(".wrap_information .link_more").click(function(){return i(this).hide(),i(this).parent().find(".step_service").addClass("active"),i(this).parent().find(".item_step").addClass("active"),!1}),i(".js-searchFormTrigger").click(function(){return i(".searchForm").addClass("_expanded"),!1}),i(".js-searchFormTrigger").click(function(){i(".searchForm").addClass("_expanded")}),i(document).on("click",function(e){i(".searchForm").removeClass("_expanded"),e.stopPropagation()}),i(".title_form_mob").click(function(){return i(this).addClass("active"),i(".form_tariff").addClass("active"),i("body").addClass("deactive"),i(".btn_top").hide(),!1}),i(".close_fixed").click(function(){return i(".title_form_mob").removeClass("active"),i(".form_tariff").removeClass("active"),i("body").removeClass("deactive"),i(".btn_top").show(),!1}),i("img.svg").each(function(){var t=jQuery(this),s=t.attr("id"),i=t.attr("class"),e=t.attr("src");jQuery.get(e,function(e){e=jQuery(e).find("svg");void 0!==s&&(e=e.attr("id",s)),void 0!==i&&(e=e.attr("class",i+" replaced-svg")),e=e.removeAttr("xmlns:a"),t.replaceWith(e)},"xml")}),i(".carousel_banner").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3}),i(".carousel_service").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:910,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".carousel_work").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:860,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".carousel_testimonials").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,responsive:[{breakpoint:520,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".carousel_advantage").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3});var o=i(".gallery_service").slick({dots:!0,arrows:!0,infinite:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3});i(window).width()<800&&i(".menu_fixed ul").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:700,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:560,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:460,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:400,settings:{slidesToShow:1,slidesToScroll:1}}]}),i("body").on("click",".btn_top",function(){return i("html, body").animate({scrollTop:0},1e3),!1}),i(".tabs_tariff .tab").click(function(){var e=i(".tabs_tariff .tab"),t=i(".content_tariff .inner_tariff"),s=i('.check_tariff input[name="tariff"]');return e.removeClass("active"),t.removeClass("active"),i(this).addClass("active"),i(".item_content").removeClass("active"),i(".item_content").eq(i(this).index()).addClass("active"),t.eq(i(this).index()).addClass("active"),s.eq(i(this).index()).prop("checked",!0),o.slick("refresh"),!1}),i(".inner_tariff").click(function(){var e=i(".inner_tariff"),t=i(".content_tariff .inner_tariff"),s=i('.check_tariff input[name="tariff"]');return e.removeClass("active"),t.removeClass("active"),i(this).addClass("active"),i(".item_content").removeClass("active"),i(".item_content").eq(i(this).index()).addClass("active"),i(".tabs_tariff .tab").removeClass("active"),i(".tabs_tariff .tab").eq(i(this).index()).addClass("active"),t.eq(i(this).index()).addClass("active"),s.eq(i(this).index()).prop("checked",!0),o.slick("refresh"),!1}),i(".check_tariff").click(function(){i(".tabs_tariff .tab").removeClass("active"),i(".inner_tariff").removeClass("active"),i(".tabs_tariff .tab").eq(i(this).index()).addClass("active"),i(".inner_tariff").eq(i(this).index()).addClass("active"),i(".item_content").removeClass("active"),i(".item_content").eq(i(this).index()).addClass("active"),o.slick("refresh")}),i(".tabs_tariff .tab").hover(function(){i(this).addClass("hovered"),i(".inner_tariff").eq(i(this).index()).addClass("hovered")},function(){i(this).removeClass("hovered"),i(".inner_tariff").eq(i(this).index()).removeClass("hovered")}),i(".inner_tariff").hover(function(){i(this).addClass("hovered"),i(".tab").eq(i(this).index()).addClass("hovered")},function(){i(this).removeClass("hovered"),i(".tab").eq(i(this).index()).removeClass("hovered")});var s,e=i(".menu_fixed"),a=e.outerHeight()+180,r=e.find("a"),l=r.map(function(){var e=i(i(this).attr("href"));if(e.length)return e});r.click(function(e){var t=i(this).attr("href"),t="#"===t?0:i(t).offset().top-a+1;i("html, body").stop().animate({scrollTop:t},300),e.preventDefault()}),i(window).scroll(function(){var e=i(this).scrollTop()+a,t=l.map(function(){if(i(this).offset().top<e)return this}),t=(t=t[t.length-1])&&t.length?t[0].id:"";s!==t&&(s=t,r.parent().removeClass("active").end().filter("[href='#"+t+"']").parent().addClass("active"))}),i(".statistik").viewportChecker({callbackFunction:function(e,t){i("#lines1").animateNumber({number:90},1500),i("#lines2").animateNumber({number:70},1500)}}),i('input[type="tel"]').mask("+7 (999) 999-99-99")}),$(window).scroll(function(){$(this).scrollTop()>$(this).height()?$(".scroll_top").addClass("active"):$(".scroll_top").removeClass("active")});var hHeight,h=document.querySelector(".tariff_fixed"),b=document.querySelector(".breadcrumbs");function onScroll(){window.addEventListener("scroll",function(){var e=window.pageYOffset;197<e?(h.classList.add("scroll"),h.style.height="-110%",h.style.transition="top .5s"):h.classList.remove("scroll");155<e?(h.style.top="0",h.style.transition="top .5s"):h.style.top="-110%"})}window.onload=function(){onScroll()};