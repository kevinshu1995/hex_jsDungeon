"use strict";

function getTime() {
  var location = document.querySelectorAll('.location');
  var dateText = document.querySelectorAll('.date');
  var timeText = document.querySelectorAll('.time');
  var timezone = {
    'NEW YORK': 'America/New_York',
    'LONDON': 'Europe/London',
    'BANGKOK': 'Asia/Bangkok',
    'TAIWAN': 'Asia/Taipei',
    'SYDNEY': 'Australia/Sydney'
  };
  location.forEach(function (item, index) {
    timeText[index].textContent = currentTime(timezone[item.textContent]).time;
    dateText[index].textContent = "".concat(currentTime(timezone[item.textContent]).date, " ").concat(currentTime(timezone[item.textContent]).year);
  });
}

function currentTime(timeZone) {
  var locale = 'en-US';
  var options_YYYY = {
    timeZone: timeZone,
    year: 'numeric'
  };
  var options_HHMM = {
    timeZone: timeZone,
    hour12: false,
    hour: 'numeric',
    minute: '2-digit'
  };
  var options_MMDD = {
    timeZone: timeZone,
    month: 'short',
    day: 'numeric'
  };
  return {
    year: new Date().toLocaleString(locale, options_YYYY),
    date: new Date().toLocaleString(locale, options_MMDD),
    time: new Date().toLocaleString(locale, options_HHMM)
  };
}

getTime();
window.setInterval('getTime();', 1000);
//# sourceMappingURL=js004.js.map
