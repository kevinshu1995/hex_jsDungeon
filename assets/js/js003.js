!function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }

  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
      return e[t];
    }.bind(null, a));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 3);
}({
  3: function (e, t) {
    new class {
      constructor(e) {
        this.el_btnWrap = e, this.calculate_objects = [], this.current_Numbers_array = [], this.answer = null, this.is_done_calculating = !1;
      }

      init() {
        document.querySelector(this.el_btnWrap) && document.querySelector(this.el_btnWrap).addEventListener("click", this.count.bind(this));
      }

      get formula() {
        return 0 === this.calculate_objects.length ? "" : this.calculate_objects.map(e => `${e.number.join("")} ${this.format_marks(e.act)} `).join("");
      }

      get current_nums() {
        return this.current_Numbers_array.join("");
      }

      get get_answer() {
        return this.answer;
      }

      update_elements() {
        this.update_formula_element(), this.update_answer_element();
      }

      update_formula_element() {
        document.getElementById("current_formula").textContent = this.formula;
      }

      update_answer_element() {
        const e = document.getElementById("current_answer");
        "" === this.current_nums && null === this.get_answer ? e.textContent = "" : e.textContent = "" === this.current_nums ? this.get_answer : this.current_nums;
      }

      format_marks(e) {
        return {
          division: "÷",
          times: "×",
          plus: "+",
          minus: "-",
          equal: "="
        }[e];
      }

      get_number(e = "") {
        const t = [...this.current_Numbers_array];

        switch (e) {
          case "0":
          case "d-0":
            return 0 === t.length || "0" === t[0] || "0" === e ? ["0"] : [...t, "0", "0"];

          default:
            return 1 === t.length && "0" === t[0] ? [e] : [...t, e];
        }
      }

      get_point(e = []) {
        return 0 === e.length ? ["0", "."] : void 0 === e.find(e => "." === e) ? [...e, "."] : [...e];
      }

      get_new_calculate_objects(e = "") {
        const t = this.current_Numbers_array;
        return {
          act: e,
          number: "." === t[t.length - 1] ? this.delete_last_in_ary(t) : t
        };
      }

      before_adding_number_to_current_num() {
        this.detect_equal_and_delete(), this.is_done_calculating = !1;
      }

      set_formula_and_clear_current_num(e = "") {
        const t = this;
        0 !== t.get_new_calculate_objects(e).number.length && (t.calculate_objects = [...t.calculate_objects, t.get_new_calculate_objects(e)]), t.current_Numbers_array = [];
      }

      detect_equal_and_delete() {
        this.is_done_calculating && (this.current_Numbers_array = [], this.calculate_objects = [], this.answer = null);
      }

      delete_last_in_ary(e) {
        const t = [...e];
        return t.pop(), t;
      }

      return_answer_string() {
        const e = [...this.calculate_objects],
              t = e => Number(e);

        return e.reduce((e, r, n, a) => {
          if (!(n > 0)) return t(r.number.join(""));

          switch (a[n - 1].act) {
            case "division":
              return t(e) / t(r.number.join(""));

            case "times":
              return t(e) * t(r.number.join(""));

            case "plus":
              return t(e) + t(r.number.join(""));

            case "minus":
              return t(e) - t(r.number.join(""));

            default:
              throw "抓不到正確的運算符號 (+, -, *, /,)";
          }
        }, 0);
      }

      count(e) {
        if (void 0 === e.target.dataset.action) return;
        const t = this,
              r = e.target.dataset.action;

        switch (r) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "d-0":
            t.before_adding_number_to_current_num(), t.current_Numbers_array = t.get_number(r);
            break;

          case "point":
            t.before_adding_number_to_current_num(), t.current_Numbers_array = t.get_point(t.current_Numbers_array);
            break;

          case "division":
          case "times":
          case "plus":
          case "minus":
            t.set_formula_and_clear_current_num(r);
            break;

          case "ac":
            t.calculate_objects = [], t.current_Numbers_array = [], t.answer = null;
            break;

          case "delete":
            t.current_Numbers_array = t.delete_last_in_ary(t.current_Numbers_array);
            break;

          case "equal":
            t.set_formula_and_clear_current_num(r), t.answer = t.return_answer_string(), t.is_done_calculating = !0;
        }

        this.update_elements();
      }

    }(".btnsWrap").init();
  }
});