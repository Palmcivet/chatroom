// sign in
$(document).ready(function () {
    /**
     * 0 log in
     * 1 password error
     * 2 register and log in
     */
    $('#form-submit').click(function () {
        if ($('#form-name').val() == '') {
            alert("The name cannot be empty");
        } else if ($('#form-password').val() == '') {
            alert("The password cannot be empty");
        } else {
            $.ajax({
                async: false,
                url: '/register',
                type: 'POST',
                data: {
                    username: $('#form-name').val(),
                    password: $('#form-password').val(),
                },
                jsonpCallback: "callBack",
                success: function handle(msg) {
                    if (msg == 0) {
                        window.location.href = "chatroom.html";
                    } else if (msg == 1) {
                        $('#form-password').val() = "Worng Password";
                    } else {
                        alert("Network Failure")
                    }
                }
            });
        }
    })
})

$(function () {
    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1000);
        event.preventDefault();
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});