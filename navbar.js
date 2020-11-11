function sticky_navbar(header, top_position = 10) {
    var main_class = $(header);

    $(window).scroll(function() {
        var scroll = $(window).scrollTop()

        if (scroll > top_position) {
            main_class.addClass('sticky')
        } else {
            main_class.removeClass('sticky')
        }
    })
}