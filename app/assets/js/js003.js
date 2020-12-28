// {
//     act: '加減乘除',
//     number: '10234.8',
// }
class Calculate {
    constructor(){
        this.el_btnWrap = document.querySelector('.btnsWrap')
        this.el_newNumber = document.querySelector('.currNum')
        this.newAction = document.querySelector('.currSent')
        // [{ act:'division', number: '10.2' }]
        this.calculate = []
        // ['1','2','.','2']
        this.current_Number = []
    }
    init(){
        if(this.el_btnWrap)
            this.el_btnWrap.addEventListener('click', this.count.bind(this))
    }
    format_marks(key){
        const mark = {
            'division': '÷',
            'times': '×',
            'plus': '+',
            'minus': '-',
        }
        return mark[key]
    }
    // return Array
    get formula(){
        if(this.calculate.length === 0) return ''
        return this.calculate.map(item => `${item.number} ${this.format_marks(item.act)}` )
    }
    get_number(num = ''){
        const result = []
        if(num === 'd-0') 
            result.push('0', '0') 
        else 
            result.push(num)
        return result
    }
    get_point(original=[]){
        let point = () => original.find(item=> item === '.' )
        let result = [...original]
        if(original.length===0)
            result.push('0','.')
        else
            if( point() === undefined ) result.push('.')
        return result
    }
    get_new_calculate(mark){
        const c_num = this.current_Number
        let new_number = c_num[c_num.length] === '.' ? c_num : ''
        return {       
            act: mark,
            number: new_number,
        }
    }
    clear(target){
        this[target] = []
    }
    delete(action){
        return action    
    }
    equal(action){
        return action    
    }
    count(e) {
        //判斷點擊是否為LI
        let vm = this
        if(e.target.dataset.action === undefined) return 
        let action = e.target.dataset.action
        switch(action){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case 'd-0':
                vm.current_Number = [...vm.current_Number, ...vm.get_number(action)]
                console.log('number',vm.current_Number)
                break;
            case 'point':
                vm.current_Number = vm.get_point(vm.current_Number)
                console.log('number',vm.get_point(vm.current_Number))
                break;
            case 'division':
            case 'times':
            case 'plus':
            case 'minus':
                vm.calculate.push(vm.get_new_calculate(action))
                vm.clear('current_Number')
                console.log('math', vm.current_Number, vm.calculate)
                break;
            case 'ac':
            case 'delete':
                console.log('delete', vm.delete(action))
                break;
            case 'equal':
                console.log('equal', vm.equal(action))
                break;
        }
        console.log(vm.formula)
        // calculate(value)
    
        //判斷點擊刪除鍵
        // if(e.target.classList)
        // if (e.target.textContent == 'delete' || e.target.nodeName == 'I') {
        //     value = numStr.split('').splice(-1, 1).join('')
        //     //innerHTML// currNum.innerHTML = numStr
        // }
    }
}

let cal = new Calculate()
cal.init()

// let btnWrap = document.querySelector('.btnsWrap')
// let currNum = document.querySelector('.currNum')
// let currSent = document.querySelector('.currSent')

// //現在剛按下去的按鈕(大字、白色的那個)， eg: a+b=c  也就是b
// let numStr = ''
// //基本上只會短暫的在按"="後有值，function結束就會清除
// let Ans = ''
// //就是藍色的那個計算式
// let cal = []

// //判斷如果有按過 "=" 則為ture，進入function清除計算欄後 checkEqual 變回 false
// let checkEqual = false
// function clearCalculation() {
//     if (!checkEqual) return
//     currSent.innerHTML = ''
//     checkEqual = false
// }
// let calculation = {
//     dom: {
//         btnWrap: document.querySelector('.btnsWrap'),
//         newNumber: document.querySelector('.currNum'),
//         newAction: document.querySelector('.currSent'),
//     },
//     marks: {
//         'division': '÷',
//         'times': '×',
//         'plus': '+',
//         'minus': '-',
//     },
//     get formula(){
//         return this.return_formula()
//     },
//     calculate: [],
//     temp_calculate: [],
//     // {
//     //     act: '加減乘除',
//     //     number: '10234.8',
//     // }
//     return_formula: function(){
//         let vm = this
//         if(vm.calculate.length === 0) return ''
//         return vm.calculate.map(item => 
//             `${item.number} ${vm.calculation}`
//         )
//     },
//     number: function(action){
//         let cal = this.temp_calculate
//         if(action === 'd-0'){
//             cal.push('0', '0') 
//         }
//         else
//             cal.push(action)
//     },
//     point: function(action){
//         let cal = this.temp_calculate
//         if(cal.length===0){ 
//             cal.push('0','.')
//         }
//         else{
//             let point = cal.find(item=> item === '.' )
//             if( point === undefined ) cal.push('.')
//         }
//     },
//     actions: function(action){
//         this.calculate.push({
//             act: action,
//             number: this.temp_calculate,
//         })
//         this.temp_calculate = []
//     },
//     delete: function(action){
//         return action
//     },
//     equal: function(action){
//         return action
//     },
// }
// btnWrap.addEventListener('click', count)
// * 判斷點誰 => 做甚麼是
/** 
 *  * 變數
 *      * 算式
 *          * 新數字 (進到算式之前先存為字串，判斷小數點)
 *          * 新動作 (加減乘除、=、AC)
 *  * 判斷點誰 => 做甚麼是
 *      * 數字            => 先存為字串
 *      * 'AC'           => 全部刪除
 *      * '加減乘除'      => (當前結果) 與 (新數字，此時存為number) 計算
 *      * '='            => (當前結果) 輸出
 *      * '.'            => 判斷小數點是否位置正確 
 *          * 當前無值 => '0', '.'
 *          * 當前有值 => 
 *              * 舊字串無'.' => '舊字串', '.'
 *              * 舊字串有'.' => '舊字串'
 */
// function count(e) {
//     //判斷點擊是否為LI
//     if(e.target.dataset.action === undefined) return 
//     let action = e.target.dataset.action
//     switch(action){
//         case '0':
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//         case 'd-0':
//             console.log('number',calculation.number(action))
//             break;
//         case 'point':
//             console.log('number',calculation.point(action))
//             break;
//         case 'division':
//         case 'times':
//         case 'plus':
//         case 'minus':
//             console.log('actions', calculation.actions(action))
//             break;
//         case 'ac':
//         case 'delete':
//             console.log('delete', calculation.delete(action))
//             break;
//         case 'equal':
//             console.log('equal', calculation.equal(action))
//             break;
//     }
//     console.log(calculation.formula)
//     // calculate(value)

//     //判斷點擊刪除鍵
//     // if(e.target.classList)
//     // if (e.target.textContent == 'delete' || e.target.nodeName == 'I') {
//     //     value = numStr.split('').splice(-1, 1).join('')
//     //     //innerHTML// currNum.innerHTML = numStr
//     // }
// }
 

// function calculate(valNum, valStr) {
//     //判斷點擊若為數字或'.'則繼續執行
//     if (!isNaN(valNum) || valStr == '.') {
//         // 判斷是否刪除運算式
//         clearCalculation()
//         if (Ans !== '') {
//             currSent.innerHTML = ''
//             Ans = ''
//         }

//         //findComma -> 若有'.'則回傳'.'
//         let findComma = numStr.split('').find(function (item) {
//             return item === '.'
//         })

//         //若vlaStr已經包含'.'且按的是'.'，則不繼續執行
//         if (findComma === '.' && valStr === '.') return

//         //避免000.00的狀況發生
//         if (Number(valStr) === 0 && numStr == 0 && findComma !== '.') {
//             numStr = '0'
//         } else {
//             //加入點擊按鈕進入numStr
//             numStr = numStr += valStr
//         }
//         currNum.innerHTML = numStr
//     } else if (valStr == 'AC') {
//         //判斷點擊'AC'，清除輸入欄
//         numStr = ''
//         Ans = ''
//         cal = []
//         currNum.innerHTML = ''
//         currSent.innerHTML = ''
//     } else if (
//         valStr === '÷' ||
//         valStr === '×' ||
//         valStr === '+' ||
//         valStr === '−'
//     ) {
//         //加入陣列
//         if (cal.length === 0 && !numStr) return
//         if (numStr === '') {
//             cal[cal.length - 1] = valStr
//         } else {
//             cal.push(Number(numStr), valStr)
//             //清空輸入區
//             currNum.innerHTML = ''
//         }
//         //呈現運算區
//         let str = ''
//         cal.forEach(function (val) {
//             str += ' ' + val
//         })
//         currSent.innerHTML = str
//         numStr = ''
//     } else if (valStr == '=') {
//         // 沒有算式就不執行
//         if (cal.length === 0) return

//         //再做一次
//         if (numStr !== '') {
//             cal.push(Number(numStr))
//             //清空輸入區
//             currNum.innerHTML = ''
//         }

//         //呈現運算式子
//         let str = ''
//         cal.forEach(function (val) {
//             str += ' ' + val
//         })
//         currSent.innerHTML = str
//         numStr = ''

//         //把符號轉為JS看的懂的運算符號
//         cal.forEach(function (item, index) {
//             switch (item) {
//                 case '×':
//                     cal[index] = '*'
//                     break
//                 case '÷':
//                     cal[index] = '/'
//                     break
//                 case '+':
//                     cal[index] = '+'
//                     break
//                 case '−':
//                     cal[index] = '-'
//                     break
//             }
//         })

//         Ans = eval(cal.join(''))
//         currNum.innerHTML = Ans
//         Ans = ''
//         cal = []
//         checkEqual = true
//     }
// }
