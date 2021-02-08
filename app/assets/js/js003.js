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
class Calculate {
    constructor(wrap_selector) {
        this.el_btnWrap = wrap_selector
        // * eg: [{ act:'division', number: '10.2' }]
        this.calculate_objects = []
        // * eg: ['1','2','.','2']
        this.current_Numbers_array = []
        this.answer = null
        this.is_done_calculating = false
    }

    init() {
        const vm = this
        if (document.querySelector(vm.el_btnWrap))
            document
                .querySelector(vm.el_btnWrap)
                .addEventListener('click', vm.count.bind(vm))
    }

    // return Array
    // 顯示在最上方的公式，不包含現在正在加值的數字
    get formula() {
        if (this.calculate_objects.length === 0) return ''
        return this.calculate_objects
            .map(
                (item) =>
                    `${item.number.join('')} ${this.format_marks(item.act)} `
            )
            .join('')
    }

    get current_nums() {
        return this.current_Numbers_array.join('')
    }

    get get_answer() {
        return this.answer
    }

    update_elements() {
        this.update_formula_element()
        this.update_answer_element()
    }

    update_formula_element() {
        const el_formula = document.getElementById('current_formula')
        el_formula.textContent = this.formula
    }

    update_answer_element() {
        const el_answer = document.getElementById('current_answer')
        if (this.current_nums === '' && this.get_answer === null)
            el_answer.textContent = ''
        else
            el_answer.textContent =
                this.current_nums === '' ? this.get_answer : this.current_nums
    }

    format_marks(key) {
        const mark = {
            division: '÷',
            times: '×',
            plus: '+',
            minus: '-',
            equal: '=',
        }
        return mark[key]
    }

    /**
     *  * 若傳入 0 || d-0 則判斷是否直接在 current_Numbers_array push 0 || 00
     *  * 若非，則取代 current_Numbers_array 第一個 0，或是 push 新數字
     *  @param {String} num
     *  @return {Array}
     */
    get_number(num = '') {
        const result = [...this.current_Numbers_array]
        switch (num) {
            case '0':
            case 'd-0':
                if (result.length === 0) return ['0']
                if (result[0] === '0') return ['0']
                if (num === '0') return ['0']
                return [...result, '0', '0']
            default:
                if (result.length === 1) if (result[0] === '0') return [num]
                return [...result, num]
        }
    }

    /**
     *  * 判斷 original = [] 是否有小數點
     *      * 1. 長度為 0               => return 0.
     *      * 2. 長度不為0 && 沒有"."    => push "."
     *      * 3. 都不是就直接回傳原值
     *
     *  @param  {array} original
     *  @return {array}
     */
    get_point(original = []) {
        const point = () => original.find((item) => item === '.')
        if (original.length === 0) return ['0', '.']
        if (point() === undefined) return [...original, '.']
        return [...original]
    }

    get_new_calculate_objects(mark = '') {
        const current_nums = this.current_Numbers_array
        const new_numbers =
            current_nums[current_nums.length - 1] === '.'
                ? this.delete_last_in_ary(current_nums)
                : current_nums
        return {
            act: mark,
            number: new_numbers,
        }
    }

    before_adding_number_to_current_num() {
        const vm = this
        vm.detect_equal_and_delete()
        vm.is_done_calculating = false
    }

    // * 若回傳目前輸入值的物件裡的數字陣列長度不為 0，則加入儲存計算公式的物件
    // * 並且清除目前輸入值的陣列 (this.current_Numbers_array)
    set_formula_and_clear_current_num(mark = '') {
        const vm = this
        if (vm.get_new_calculate_objects(mark)['number'].length !== 0)
            vm.calculate_objects = [
                ...vm.calculate_objects,
                vm.get_new_calculate_objects(mark),
            ]
        vm.current_Numbers_array = []
    }

    detect_equal_and_delete() {
        if (this.is_done_calculating) {
            this.current_Numbers_array = []
            this.calculate_objects = []
            this.answer = null
        }
    }

    delete_last_in_ary(ary) {
        const result = [...ary]
        result.pop()
        return result
    }

    return_answer_string() {
        const target = [...this.calculate_objects]
        const num = (string) => Number(string)
        return target.reduce((accum, currentValue, currentIndex, array) => {
            if (currentIndex > 0) {
                switch (array[currentIndex - 1].act) {
                    case 'division':
                        return num(accum) / num(currentValue.number.join(''))
                    case 'times':
                        return num(accum) * num(currentValue.number.join(''))
                    case 'plus':
                        return num(accum) + num(currentValue.number.join(''))
                    case 'minus':
                        return num(accum) - num(currentValue.number.join(''))
                    default:
                        throw '抓不到正確的運算符號 (+, -, *, /,)'
                }
            } else return num(currentValue.number.join(''))
        }, 0)
    }

    count(e) {
        if (e.target.dataset.action === undefined) return
        const vm = this
        const action = e.target.dataset.action
        switch (action) {
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
                vm.before_adding_number_to_current_num()
                vm.current_Numbers_array = vm.get_number(action)
                break
            case 'point':
                vm.before_adding_number_to_current_num()
                vm.current_Numbers_array = vm.get_point(
                    vm.current_Numbers_array
                )
                break
            case 'division':
            case 'times':
            case 'plus':
            case 'minus':
                vm.set_formula_and_clear_current_num(action)
                break
            case 'ac':
                vm.calculate_objects = []
                vm.current_Numbers_array = []
                vm.answer = null
                break
            case 'delete':
                vm.current_Numbers_array = vm.delete_last_in_ary(
                    vm.current_Numbers_array
                )
                break
            case 'equal':
                vm.set_formula_and_clear_current_num(action)
                vm.answer = vm.return_answer_string()
                vm.is_done_calculating = true
                break
        }
        this.update_elements()
    }
}

const cal = new Calculate('.btnsWrap').init()
