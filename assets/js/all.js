"use strict";

var navList = document.getElementById('js-navList');
var navBar = document.getElementById('js-navBar'); // event

showNavByWidth();
window.addEventListener('resize', showNavByWidth);
navBar.addEventListener('click', showNavByClick);

function showNavByWidth() {
  var width = window.outerWidth;

  if (width < 768) {
    navList.setAttribute("style", "display: none;");
    navBar.setAttribute("style", "display: block;");
  } else {
    navList.setAttribute("style", "display: flex;");
    navBar.setAttribute("style", "display: none;");
  }
}

function showNavByClick() {
  var getStyle = navList.getAttribute("style");
  console.log(getStyle);

  if (getStyle.indexOf("display: none;")) {
    navList.setAttribute("style", "display: none; width: auto;");
  } else {
    navList.setAttribute("style", "display: block; width: 100%;");
  }
}
//# sourceMappingURL=all.js.map
