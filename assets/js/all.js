"use strict";

var navList = document.getElementById('js-navList');
var navBar = document.getElementById('js-navBar'); // event
// showNavByWidth();
// window.addEventListener("resize", showNavByWidth);
// navBar.addEventListener("click", showNavByClick);

$(document).foundation();

function showNavByWidth() {
  var width = window.outerWidth;

  if (width < 768) {
    navList.setAttribute('style', 'display: none;');
    navBar.setAttribute('style', 'display: block;');
  } else {
    navList.setAttribute('style', 'display: flex;');
    navBar.setAttribute('style', 'display: none;');
  }
}

function showNavByClick() {
  var getStyle = navList.getAttribute('style');
  console.log(getStyle);

  if (getStyle.indexOf('display: none;')) {
    navList.setAttribute('style', 'display: none; width: auto;');
  } else {
    navList.setAttribute('style', 'display: block; width: 100%;');
  }
} // * animate


var hover_card_enter = $('.hover--card--enter');
$(function () {
  hover_card_enter.on({
    mouseleave: function mouseleave() {
      animate_hoverCard_slide($(this));
    }
  });
});

function animate_hoverCard_slide(vm) {
  vm.removeClass('hover--card--end').addClass('hover--card--end');
}
//# sourceMappingURL=all.js.map
