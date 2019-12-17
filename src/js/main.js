function submitForm() {
    $('form[name="mc-embedded-subscribe-form"]').submit();
    $('input[type="email"], textarea').val('');
}

const homeNavBarAtTop = 'navbar navbar-expand-lg navbar-dark bg-transparent fixed-top pb-5';
const homeNavBarBelow = 'navbar navbar-expand-lg navbar-dark fixed-top about-nav';
window.addEventListener('scroll', function(e) {
    const navBar = $('#hnavBar');
    const navHeight = navBar.height()
    const navBottom = $(window).scrollTop() + navHeight;

    navBar.removeClass();
    if (navBottom > 800) {
        navBar.addClass(homeNavBarBelow);
    } else {
        navBar.addClass(homeNavBarAtTop);
    }
})