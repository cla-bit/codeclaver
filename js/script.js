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

  // accordion javascript

  const accordionContent = $(".accordion_content");

  accordionContent.each(function(index, item) {
    const accordionHeader = $(item).find(".accordion_header");
    const accordionItem = $(item).find(".accordion_item");
    const accordionIcon = $(item).find(".material-symbols-outlined");

    accordionHeader.click(function() {
      $(item).toggleClass("open");

      if ($(item).hasClass("open")) {
        accordionItem.css("height", accordionItem.prop("scrollHeight") + "px")
        accordionIcon.text($(item).hasClass("open") ? "expand_circle_up" : "expand_circle_down");
      } else {
        accordionItem.css("height", "0px");
        accordionIcon.text("expand_circle_down");
      }

      // close other accordion item efficiently

      accordionContent.not(item).removeClass("open");
      accordionContent.not(item).find(".accordion_item").css("height", "0px");
      accordionContent.not(item).find(".material-symbols-outlined").text("expand_circle_down");

    });
  });
  // function removeOpen(index) {
  //   accordionContent.each(function(item2, index2) {
  //     if (index !== index2) {
  //       $(item2).removeClass("open");

  //       const innerItem = $(item2).find(".accordion_item");
  //       innerItem.css("height", "0px");
  //       accordionIcon.text("expand_circle_down");
  //     }
  //   })
  // }

});
