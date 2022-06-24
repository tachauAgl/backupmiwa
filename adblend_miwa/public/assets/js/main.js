var hide = 'is-hidden',
    body = $('body');

var scrl_pos;
$.fn.extend({
    toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
    }
});

$(function () {
    $('.c-iconmenu').on('click', function () {
        $(this).toggleClass('is-active');
        $(".l-side").toggleClass('is-open');
        $('#iconMenuTxt').toggleText('MENU', 'CLOSE');

        if (body.hasClass(hide)) {
            body.removeClass(hide);
            window.scrollTo(0, scrl_pos);
        } else {
            scrl_pos = $(window).scrollTop();
            body.addClass(hide).css('top', -scrl_pos);
        }
    });
});

// $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (a) {
//     var e;

//     a.preventDefault(),
//         location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname ? (e = (e = $(this.hash)).length ? e : $("[name=" + this.hash.slice(1) + "]")).length && (a.preventDefault(),
//             $("html, body").animate({
//                 scrollTop: e.offset().top
//             }, 500)) : location = this.href

// });
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            var _topPos = 0;
            if ($(window).width() < 768) {
                _topPos = $('.c-header').outerHeight();
                // console.log(_topPos);
                if (body.hasClass(hide) && $(".l-side").hasClass('is-open')) {
                    body.removeClass(hide);
                    $(".l-side").removeClass('is-open');
                    $('.c-iconmenu').removeClass('is-active');
                }
            }
            $('html, body').animate({ scrollTop: target.offset().top - _topPos }, 800);
        }
    }
});

// scroll to anchor after redirect
(function ($) {
    $(window).on('load', function () {
        var hash = window.location.hash;
        if (hash != null && hash != '' && hash != '#') {

            // setTimeout(function () {
            //     $(window).scrollTop($(hash).offset().top)
            // }, 50)
            if ($(window).width() < 768) {
                $("html, body").animate({ scrollTop: $(hash).offset().top - 80 }, 50)
            } else {
                $("html, body").animate({ scrollTop: $(hash).offset().top}, 50)
            }

        }
    })
})(jQuery);

$(window).on("load", function (e) {
    
    setTimeout(() => {
        $('body').css('opacity', 1);
      }, "300")
});
