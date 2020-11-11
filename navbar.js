function sticky_navbar(header) {
    var main_class = $(header);
    var distance = (main_class.offset().top - $('body').scrollTop());
    main_function();

    $(window).scroll(main_function);

    function main_function() {
        var scroll = $(window).scrollTop();

        if (scroll > distance) {
            main_class.addClass('header_sticky');
        } else {
            main_class.removeClass('header_sticky');
        }
    }
}
