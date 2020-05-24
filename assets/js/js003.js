"use strict";

var btns = document.querySelector('.btnsWrap');
var currNum = document.querySelector('.currNum');
var currSent = document.querySelector('.currSent');
var numStr = '';
var Ans = ''; //運算式

var cal = [];
btns.addEventListener('click', count);

function count(e) {
  //判斷點擊是否為LI
  if (e.target.nodeName === 'LI') {
    //字串轉為數字
    var valNum = Number(e.target.textContent); //點擊的字串

    var valStr = e.target.textContent; //判斷點擊若為數字或'.'則繼續執行

    if (!isNaN(valNum) || valStr == '.') {
      if (Ans !== '') {
        currSent.innerHTML = '';
        Ans = '';
      } //findComma -> 若有'.'則回傳'.'


      var findComma = numStr.split('').find(function (item) {
        return item === ".";
      }); //若已經包含'.'且按的是'.'，則不繼續執行

      if (findComma === "." && valStr === '.') {
        return;
      }

      if (Number(valStr) === 0 && numStr == 0) {
        numStr = '0';
      } else {
        //加入點擊按鈕進入numStr
        numStr = numStr += valStr;
      }

      currNum.innerHTML = numStr;
    } else if (valStr == 'AC') {
      //判斷點擊'AC'，清除輸入欄
      numStr = '';
      currNum.innerHTML = '';
      currNum.innerHTML = numStr;
    } else if (valStr === '÷' || valStr === '×' || valStr === '+' || valStr === '−') {
      //加入陣列
      if (numStr === '') {
        cal[cal.length - 1] = valStr;
      } else {
        cal.push(Number(numStr), valStr); //清空輸入區

        currNum.innerHTML = '';
      } //呈現運算區


      var str = '';
      cal.forEach(function (val) {
        str += ' ' + val;
      });
      currSent.innerHTML = str;
      numStr = '';
    } else if (valStr == '=') {
      //再做一次
      if (numStr !== '') {
        cal.push(Number(numStr)); //清空輸入區

        currNum.innerHTML = '';
      } //呈現運算區


      var _str = '';
      cal.forEach(function (val) {
        _str += ' ' + val;
      });
      currSent.innerHTML = _str;
      numStr = '';
      cal.forEach(function (item, index) {
        switch (item) {
          case "×":
            cal[index] = '*';
            break;

          case "÷":
            cal[index] = '/';
            break;

          case "+":
            cal[index] = '+';
            break;

          case "-":
            cal[index] = '-';
            break;
        }
      });
      Ans = eval(cal.join(''));
      cal = [];
      currNum.innerHTML = Ans;
    }
  } //判斷點擊刪除鍵


  if (e.target.textContent == "delete" || e.target.nodeName == 'I') {
    var ary = numStr.split('');
    ary.splice(-1, 1);
    numStr = ary.join('');
    currNum.innerHTML = numStr;
  }
}
//# sourceMappingURL=js003.js.map
