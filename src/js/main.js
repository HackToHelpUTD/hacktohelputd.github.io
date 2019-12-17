submitForm = () => {
    $('form[name="mc-embedded-subscribe-form"]').submit();
    $('input[type="email"], textarea').val('');
}

const homeNavBarAtTop = 'navbar navbar-expand-lg navbar-dark bg-transparent fixed-top pb-5';
const homeNavBarBelow = 'navbar navbar-expand-lg navbar-light fixed-top about-nav bg-white';
const logoPath = './src/imgs/logo';

getLogoLight = () => {
    return logoPath + 'light.png';
}

getLogoDark = () => {
    return logoPath + 'dark.png';
}
window.addEventListener('scroll', function(e) {
    const navBar = $('#hnavBar');
    const navHeight = navBar.height()
    const navBottom = $(window).scrollTop() + navHeight;
    navBar.removeClass();
    if (navBottom > 800) {
        navBar.addClass(homeNavBarBelow);
        $('#navlogo').attr('src', getLogoDark());

    } else {
        navBar.addClass(homeNavBarAtTop);
        $('#navlogo').attr('src', getLogoLight());

    }
})