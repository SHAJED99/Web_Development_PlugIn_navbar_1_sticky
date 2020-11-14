function sticky_navbar(header) {
    var main_class = $(header);



    var distance = (main_class.offset().top - $('body').offset().top);
    main_function();

    $(window).scroll(main_function);

    function main_function() {
        var scroll = $(window).scrollTop();

        if (scroll > distance) {
            main_class.addClass('header_sticky');
            $(header + '.header_sticky').css({
                'position': 'fixed',
                'z-index': '9999',
                'width': '100%',
            });
        } else {
            $(header + '.header_sticky').css({
                'position': 'sticky',
                'z-index': '9999',
                'width': 'inherit',
            })
            main_class.removeClass('header_sticky');
        }
    }
}
