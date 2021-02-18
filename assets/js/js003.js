"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Calculate = /*#__PURE__*/function () {
  function Calculate(wrap_selector) {
    _classCallCheck(this, Calculate);

    this.el_btnWrap = wrap_selector; // * eg: [{ act:'division', number: '10.2' }]

    this.calculate_objects = []; // * eg: ['1','2','.','2']

    this.current_Numbers_array = [];
    this.answer = null;
    this.is_done_calculating = false;
  }

  _createClass(Calculate, [{
    key: "init",
    value: function init() {
      var vm = this;
      if (document.querySelector(vm.el_btnWrap)) document.querySelector(vm.el_btnWrap).addEventListener('click', vm.count.bind(vm));
    } // return Array
    // 顯示在最上方的公式，不包含現在正在加值的數字

  }, {
    key: "formula",
    get: function get() {
      var _this = this;

      if (this.calculate_objects.length === 0) return '';
      return this.calculate_objects.map(function (item) {
        return "".concat(item.number.join(''), " ").concat(_this.format_marks(item.act), " ");
      }).join('');
    }
  }, {
    key: "current_nums",
    get: function get() {
      return this.current_Numbers_array.join('');
    }
  }, {
    key: "get_answer",
    get: function get() {
      return this.answer;
    }
  }, {
    key: "update_elements",
    value: function update_elements() {
      this.update_formula_element();
      this.update_answer_element();
    }
  }, {
    key: "update_formula_element",
    value: function update_formula_element() {
      var el_formula = document.getElementById('current_formula');
      el_formula.textContent = this.formula;
    }
  }, {
    key: "update_answer_element",
    value: function update_answer_element() {
      var el_answer = document.getElementById('current_answer');
      if (this.current_nums === '' && this.get_answer === null) el_answer.textContent = '';else el_answer.textContent = this.current_nums === '' ? this.get_answer : this.current_nums;
    }
  }, {
    key: "format_marks",
    value: function format_marks(key) {
      var mark = {
        division: '÷',
        times: '×',
        plus: '+',
        minus: '-',
        equal: '='
      };
      return mark[key];
    }
    /**
     *  * 若傳入 0 || d-0 則判斷是否直接在 current_Numbers_array push 0 || 00
     *  * 若非，則取代 current_Numbers_array 第一個 0，或是 push 新數字
     *  @param {String} num
     *  @return {Array}
     */

  }, {
    key: "get_number",
    value: function get_number() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var result = _toConsumableArray(this.current_Numbers_array);

      switch (num) {
        case '0':
        case 'd-0':
          if (result.length === 0) return ['0'];
          if (result[0] === '0') return ['0'];
          if (num === '0') return ['0'];
          return [].concat(_toConsumableArray(result), ['0', '0']);

        default:
          if (result.length === 1) if (result[0] === '0') return [num];
          return [].concat(_toConsumableArray(result), [num]);
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

  }, {
    key: "get_point",
    value: function get_point() {
      var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var point = function point() {
        return original.find(function (item) {
          return item === '.';
        });
      };

      if (original.length === 0) return ['0', '.'];
      if (point() === undefined) return [].concat(_toConsumableArray(original), ['.']);
      return _toConsumableArray(original);
    }
  }, {
    key: "get_new_calculate_objects",
    value: function get_new_calculate_objects() {
      var mark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var current_nums = this.current_Numbers_array;
      var new_numbers = current_nums[current_nums.length - 1] === '.' ? this.delete_last_in_ary(current_nums) : current_nums;
      return {
        act: mark,
        number: new_numbers
      };
    }
  }, {
    key: "before_adding_number_to_current_num",
    value: function before_adding_number_to_current_num() {
      var vm = this;
      vm.detect_equal_and_delete();
      vm.is_done_calculating = false;
    } // * 若回傳目前輸入值的物件裡的數字陣列長度不為 0，則加入儲存計算公式的物件
    // * 並且清除目前輸入值的陣列 (this.current_Numbers_array)

  }, {
    key: "set_formula_and_clear_current_num",
    value: function set_formula_and_clear_current_num() {
      var mark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var vm = this;
      if (vm.get_new_calculate_objects(mark)['number'].length !== 0) vm.calculate_objects = [].concat(_toConsumableArray(vm.calculate_objects), [vm.get_new_calculate_objects(mark)]);
      vm.current_Numbers_array = [];
    }
  }, {
    key: "detect_equal_and_delete",
    value: function detect_equal_and_delete() {
      if (this.is_done_calculating) {
        this.current_Numbers_array = [];
        this.calculate_objects = [];
        this.answer = null;
      }
    }
  }, {
    key: "delete_last_in_ary",
    value: function delete_last_in_ary(ary) {
      var result = _toConsumableArray(ary);

      result.pop();
      return result;
    }
  }, {
    key: "return_answer_string",
    value: function return_answer_string() {
      var target = _toConsumableArray(this.calculate_objects);

      var num = function num(string) {
        return Number(string);
      };

      return target.reduce(function (accum, currentValue, currentIndex, array) {
        if (currentIndex > 0) {
          switch (array[currentIndex - 1].act) {
            case 'division':
              return num(accum) / num(currentValue.number.join(''));

            case 'times':
              return num(accum) * num(currentValue.number.join(''));

            case 'plus':
              return num(accum) + num(currentValue.number.join(''));

            case 'minus':
              return num(accum) - num(currentValue.number.join(''));

            default:
              throw '抓不到正確的運算符號 (+, -, *, /,)';
          }
        } else return num(currentValue.number.join(''));
      }, 0);
    }
  }, {
    key: "count",
    value: function count(e) {
      if (e.target.dataset.action === undefined) return;
      var vm = this;
      var action = e.target.dataset.action;

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
          vm.before_adding_number_to_current_num();
          vm.current_Numbers_array = vm.get_number(action);
          break;

        case 'point':
          vm.before_adding_number_to_current_num();
          vm.current_Numbers_array = vm.get_point(vm.current_Numbers_array);
          break;

        case 'division':
        case 'times':
        case 'plus':
        case 'minus':
          vm.set_formula_and_clear_current_num(action);
          break;

        case 'ac':
          vm.calculate_objects = [];
          vm.current_Numbers_array = [];
          vm.answer = null;
          break;

        case 'delete':
          vm.current_Numbers_array = vm.delete_last_in_ary(vm.current_Numbers_array);
          break;

        case 'equal':
          vm.set_formula_and_clear_current_num(action);
          vm.answer = vm.return_answer_string();
          vm.is_done_calculating = true;
          break;
      }

      this.update_elements();
    }
  }]);

  return Calculate;
}();

var cal = new Calculate('.btnsWrap').init();
//# sourceMappingURL=js003.js.map
