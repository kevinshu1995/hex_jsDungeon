"use strict";

var mainList = document.getElementById('mainList');
var chartNum = 8;
var strInner = '';
updateList();

function updateList() {
  //title
  var strOut = "\n    <li class=\"l-card-title\">\n    \t<h1>\u4E5D\u4E5D\u4E58\u6CD5\u8868</h1>\n    \t<h2>MULTIPLICATION CHART</h2>\n    </li>\n    ";

  for (var i = 0; i < chartNum; i++) {
    innerList(i + 2);
    strOut += "<li class=\"l-card\">\n     \t\t\t\t\t<ul class=\"l-card__wrap\">\n        \t\t\t\t\t<li class=\"l-card__title\">".concat(i + 2, "</li>\n        \t\t\t\t\t").concat(strInner, "\n      \t\t\t\t\t</ul>\n    \t\t\t\t</li>");
    strInner = '';
  }

  mainList.innerHTML = strOut || '';
}

function innerList(num) {
  for (var j = 0; j < 9; j++) {
    strInner += "<li>".concat(num, "x").concat(j + 1, "=").concat(num * (j + 1), "</li>");
  }
}
//# sourceMappingURL=js001.js.map
