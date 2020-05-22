window.setInterval('getTime();', 500);

function getTime() {
  let time = new Date();
  let hour = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  handSet(hour, mins, secs)
}
function handSet(hour, mins, secs) {
  // console.log(hour, mins, secs);
  let secHand = document.getElementById('secHand');
  let minHand = document.getElementById('minHand');
  let hourHand = document.getElementById('hourHand');
  //秒針
  let secVal = secs * 6;
  secHand.style.transform = `rotate( ${secVal}deg)`
  //分針
  let minVal = mins * 6 + secs / 10;
  minHand.style.transform = `rotate( ${minVal}deg)`
  //時針
  if (hour > 12) {
    hour = hour - 12
  }
  let hourVal = hour * 30 + mins * 0.5;
  hourHand.style.transform = `rotate( ${hourVal}deg)`
}