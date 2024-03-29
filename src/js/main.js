submitForm = () => {
  $('form[name="mc-embedded-subscribe-form"]').submit();
  $('input[type="email"], textarea').val("");
};

const homeNavBarAtTop =
  "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top";
const homeNavBarBelow =
  "navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm";
const logoPath = "./src/imgs/logo";

const getLogoLight = () => {
  return logoPath + "light.png";
};

const getLogoDark = () => {
  return logoPath + "dark.png";
};
const setSplashTextDisplay = () => {
  if (!$("#splashtext").is(":hidden")) {
    $("#splashtext").hide("slide", { direction: "down" }, 250);
  } else {
    $("#splashtext").show("slide", { direction: "down" }, 250);
  }
};
const setNavToggleClick = () => {
  $("#navToggler").click(function() {
    setSplashTextDisplay();
    scrollCheck();
  });
};
const scrollCheck = () => {
  const navHeight = window.navBar.height();
  const navBottom = $(window).scrollTop() + navHeight;
  const backGroundHeight = $("#backdrop").height();
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
};
$(window).resize(function() {
  //display splash text if person is resizing may need to just auto show splash text
  if ($("#navToggler").is(":hidden")) {
    $("#splashtext").show();
  }
});
$(document).ready(() => {
  window.navBar = $("#hnavBar");
  window.navState = null;

  window.splashtext = $("#splashtext");
  setNavToggleClick();
  window.addEventListener("scroll", function(e) {
    scrollCheck();
  });
});
