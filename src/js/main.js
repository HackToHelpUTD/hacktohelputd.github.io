submitForm = () => {
    $('form[name="mc-embedded-subscribe-form"]').submit();
    $('input[type="email"], textarea').val("");
};

const homeNavBarAtTop =
    "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top pb-5";
const homeNavBarBelow =
    "navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm";
const logoPath = "./src/imgs/logo";

getLogoLight = () => {
    return logoPath + "light.png";
};

getLogoDark = () => {
    return logoPath + "dark.png";
};

window.onload = () => {
    window.navBar = $("#hnavBar");
    window.navState = null;
    window.addEventListener("scroll", function(e) {
        const navHeight = window.navBar.height();
        const navBottom = $(window).scrollTop() + navHeight;
        const backGroundHeight = $(".officer-backdrop").height();
        if (navBottom > backGroundHeight) {
            if (window.navState !== 0) {
                navBar.removeClass();
                navBar.addClass(homeNavBarBelow);
                $("#navlogo").attr("src", getLogoDark());
                window.navState = 0;
            }
        } else if (window.navState !== 1) {
            navBar.removeClass();
            window.navState = 1;
            navBar.addClass(homeNavBarAtTop);
            $("#navlogo").attr("src", getLogoLight());
        }
    });
};