let btns = document.querySelector('.btnsWrap');
let currNum = document.querySelector('.currNum');
let currSent = document.querySelector('.currSent');

let numStr = '';
let Ans = '';
//運算式
let cal = [];


btns.addEventListener('click', count);

function count(e) {
	//判斷點擊是否為LI
	if (e.target.nodeName !== 'LI') return

	//字串轉為數字
	let valNum = Number(e.target.textContent);
	//點擊的字串
	let valStr = e.target.textContent;

	calculate(valNum, valStr);

	//判斷點擊刪除鍵
	if (e.target.textContent == "delete" || e.target.nodeName == 'I') {
		let ary = numStr.split('');
		ary.splice(-1, 1);
		numStr = ary.join('');
		currNum.innerHTML = numStr;
	}
}

function calculate(valNum, valStr) {
	//判斷點擊若為數字或'.'則繼續執行
	if (!isNaN(valNum) || valStr == '.') {
		if (Ans !== '') {
			currSent.innerHTML = '';
			Ans = '';
		}
		//findComma -> 若有'.'則回傳'.'
		let findComma = numStr.split('').find(function (item) {
			return item === "."
		});
		//若已經包含'.'且按的是'.'，則不繼續執行
		if (findComma === "." && valStr === '.') return
		if (Number(valStr) === 0 && numStr == 0) {
			numStr = '0';
		} else {
			//加入點擊按鈕進入numStr
			numStr = numStr += valStr;
		}
		currNum.innerHTML = numStr;
	} else if (valStr == 'AC') {  //判斷點擊'AC'，清除輸入欄
		numStr = '';
		Ans = '';
		cal = [];
		currNum.innerHTML = '';
		currSent.innerHTML = '';
	} else if (valStr === '÷' || valStr === '×' || valStr === '+' || valStr === '−') {
		//加入陣列
		if (cal.length === 0 && !numStr) return
		if (numStr === '') {
			cal[cal.length - 1] = valStr;
		} else {
			cal.push(Number(numStr), valStr);
			//清空輸入區
			currNum.innerHTML = '';
		}
		//呈現運算區
		let str = ''
		cal.forEach(function (val) {
			str += ' ' + val
		});
		currSent.innerHTML = str;
		numStr = '';
	} else if (valStr == '=') {

		//再做一次
		if (numStr !== '') {
			cal.push(Number(numStr));
			//清空輸入區
			currNum.innerHTML = '';
		}
		//呈現運算區
		let str = ''
		cal.forEach(function (val) {
			str += ' ' + val
		});
		currSent.innerHTML = str;
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
				case "−":
					cal[index] = '-';
					break;
			}
		});

		Ans = eval(cal.join(''));
		currNum.innerHTML = Ans;
		Ans = ''
		cal = []
	}
}