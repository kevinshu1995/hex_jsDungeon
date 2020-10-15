let btns = document.querySelector('.btnsWrap')
let currNum = document.querySelector('.currNum')
let currSent = document.querySelector('.currSent')

//現在剛按下去的按鈕(大字、白色的那個)， eg: a+b=c  也就是b
let numStr = ''
//基本上只會短暫的在按"="後有值，function結束就會清除
let Ans = ''
//就是藍色的那個計算式
let cal = []

//判斷如果有按過 "=" 則為ture，進入function清除計算欄後 checkEqual 變回 false
let checkEqual = false
function clearCalculation() {
    if (!checkEqual) return
    currSent.innerHTML = ''
    checkEqual = false
}

btns.addEventListener('click', count)

function count(e) {
    //判斷點擊是否為LI
    if (e.target.nodeName !== 'LI') return

    //字串轉為數字
    let valNum = Number(e.target.textContent)
    //點擊的字串
    let valStr = e.target.textContent

    calculate(valNum, valStr)

    //判斷點擊刪除鍵
    if (e.target.textContent == 'delete' || e.target.nodeName == 'I') {
        let ary = numStr.split('')
        ary.splice(-1, 1)
        numStr = ary.join('')
        currNum.innerHTML = numStr
    }
}

function calculate(valNum, valStr) {
    //判斷點擊若為數字或'.'則繼續執行
    if (!isNaN(valNum) || valStr == '.') {
        // 判斷是否刪除運算式
        clearCalculation()
        if (Ans !== '') {
            currSent.innerHTML = ''
            Ans = ''
        }

        //findComma -> 若有'.'則回傳'.'
        let findComma = numStr.split('').find(function (item) {
            return item === '.'
        })

        //若vlaStr已經包含'.'且按的是'.'，則不繼續執行
        if (findComma === '.' && valStr === '.') return

        //避免000.00的狀況發生
        if (Number(valStr) === 0 && numStr == 0 && findComma !== '.') {
            numStr = '0'
        } else {
            //加入點擊按鈕進入numStr
            numStr = numStr += valStr
        }
        currNum.innerHTML = numStr
    } else if (valStr == 'AC') {
        //判斷點擊'AC'，清除輸入欄
        numStr = ''
        Ans = ''
        cal = []
        currNum.innerHTML = ''
        currSent.innerHTML = ''
    } else if (
        valStr === '÷' ||
        valStr === '×' ||
        valStr === '+' ||
        valStr === '−'
    ) {
        //加入陣列
        if (cal.length === 0 && !numStr) return
        if (numStr === '') {
            cal[cal.length - 1] = valStr
        } else {
            cal.push(Number(numStr), valStr)
            //清空輸入區
            currNum.innerHTML = ''
        }
        //呈現運算區
        let str = ''
        cal.forEach(function (val) {
            str += ' ' + val
        })
        currSent.innerHTML = str
        numStr = ''
    } else if (valStr == '=') {
        // 沒有算式就不執行
        if (cal.length === 0) return

        //再做一次
        if (numStr !== '') {
            cal.push(Number(numStr))
            //清空輸入區
            currNum.innerHTML = ''
        }

        //呈現運算式子
        let str = ''
        cal.forEach(function (val) {
            str += ' ' + val
        })
        currSent.innerHTML = str
        numStr = ''

        //把符號轉為JS看的懂的運算符號
        cal.forEach(function (item, index) {
            switch (item) {
                case '×':
                    cal[index] = '*'
                    break
                case '÷':
                    cal[index] = '/'
                    break
                case '+':
                    cal[index] = '+'
                    break
                case '−':
                    cal[index] = '-'
                    break
            }
        })

        Ans = eval(cal.join(''))
        currNum.innerHTML = Ans
        Ans = ''
        cal = []
        checkEqual = true
    }
}
