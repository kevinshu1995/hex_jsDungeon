"use strict";

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function (e) {
  console.log(e);
});
xhr.open('GET', 'https://opendata.epa.gov.tw/api/v1/ATM00679');
xhr.send();
//# sourceMappingURL=js005.js.map
