$(document).ready(() => {
    document.title = pTitle;
    $('.name').html(pTitle);
    $('.this_year').html((new Date()).getFullYear());
    if(parseInt($(window).height()) >= parseInt($('#fullHead').css('max-height'))) {
        $('#fullHead').css('height', $(window).height());
        $(window).on('resize', () => {
            var win = $(this);
            $('#fullHead').css('height', win.height());
        });
    }
    $('#navtobtm').click(ev => {
        ev.preventDefault();
        $('html, body').animate({
            scrollTop: $('#main_content').offset().top-35
        }, 50);
    });
    $('#navigate-to-top').click(ev => {
        ev.preventDefault();
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 50);
    });
    LoadSections();
    $('#loading-block').remove();
});