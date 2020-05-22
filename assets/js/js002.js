"use strict";

window.setInterval('getTime();', 500);

function getTime() {
  var time = new Date();
  var hour = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  handSet(hour, mins, secs);
}

function handSet(hour, mins, secs) {
  // console.log(hour, mins, secs);
  var secHand = document.getElementById('secHand');
  var minHand = document.getElementById('minHand');
  var hourHand = document.getElementById('hourHand'); //秒針

  var secVal = secs * 6;
  secHand.style.transform = "rotate( ".concat(secVal, "deg)"); //分針

  var minVal = mins * 6 + secs / 10;
  minHand.style.transform = "rotate( ".concat(minVal, "deg)"); //時針

  if (hour > 12) {
    hour = hour - 12;
  }

  var hourVal = hour * 30 + mins * 0.5;
  hourHand.style.transform = "rotate( ".concat(hourVal, "deg)");
}
//# sourceMappingURL=js002.js.map
