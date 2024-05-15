$(document).ready(function() {

  // javascript to handle the scroll on the static header
  const headerSection = $("#header");
  const headerHeight = headerSection.outerHeight(); // Get header height

  // Define the threshold for animation (in pixels)
  const scrollThreshold = 50;

  $(window).scroll(function() {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > headerHeight) {
      headerSection.addClass("scrolled");
    } else {
      headerSection.removeClass("scrolled");
    }
  });

  // javascript to handle the menu toggle
  const menuToggle = $("#navbar_toggle");
  const menuList = $(".navbar_container");
  const overlay = $("#overlay");

  menuToggle.click(function() {
    toggleMenu();
  });

  function toggleMenu() {
    menuList.toggleClass("active");
    overlay.toggleClass("active");
    menuToggle.attr("aria-expanded", menuList.hasClass("active"));

    const menuIcon = menuToggle.find(".material-symbols-outlined");
    menuIcon.text(menuList.hasClass("active") ? "close" : "menu");
    menuIcon.css("color", menuList.hasClass("active") ? "white" : "");
  }

});
