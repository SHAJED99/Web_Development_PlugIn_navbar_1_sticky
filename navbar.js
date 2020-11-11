function sticky_navbar(header, top_position = 10) {
    var main_class = $(header);
    main_function();

    $(window).scroll(main_function);

    function main_function() {
        var scroll = $(window).scrollTop()

        if (scroll > top_position) {
            main_class.addClass('header_sticky');
        } else {
            main_class.removeClass('header_sticky');
        }
    }
}
