!function (e) {
  var t = {};

  function i(s) {
    if (t[s]) return t[s].exports;
    var r = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, s) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) i.d(s, r, function (t) {
      return e[t];
    }.bind(null, r));
    return s;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 4);
}({
  4: function (e, t, i) {
    "use strict";

    function s(e) {
      return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }

    function r(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (i) {
        void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i]);
      });
    }

    i.r(t);
    var a = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ""
      },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return {
          initEvent: function () {}
        };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          }
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function n() {
      var e = "undefined" != typeof document ? document : {};
      return r(e, a), e;
    }

    var o = {
      document: a,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {}
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          }
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
      requestAnimationFrame: function (e) {
        return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
      },
      cancelAnimationFrame: function (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }
    };

    function l() {
      var e = "undefined" != typeof window ? window : {};
      return r(e, o), e;
    }

    function d(e) {
      return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function p(e, t, i) {
      return (p = u() ? Reflect.construct : function (e, t, i) {
        var s = [null];
        s.push.apply(s, t);
        var r = new (Function.bind.apply(e, s))();
        return i && h(r, i.prototype), r;
      }).apply(null, arguments);
    }

    function c(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
        var i;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, s);
        }

        function s() {
          return p(e, arguments, d(this).constructor);
        }

        return s.prototype = Object.create(e.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), h(s, e);
      })(e);
    }

    var v = function (e) {
      var t, i;

      function s(t) {
        var i, s, r;
        return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(i), r = s.__proto__, Object.defineProperty(s, "__proto__", {
          get: function () {
            return r;
          },
          set: function (e) {
            r.__proto__ = e;
          }
        }), i;
      }

      return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
    }(c(Array));

    function f(e) {
      void 0 === e && (e = []);
      var t = [];
      return e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e);
      }), t;
    }

    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }

    function g(e, t) {
      var i = l(),
          s = n(),
          r = [];
      if (!t && e instanceof v) return e;
      if (!e) return new v(r);

      if ("string" == typeof e) {
        var a = e.trim();

        if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
          var o = "div";
          0 === a.indexOf("<li") && (o = "ul"), 0 === a.indexOf("<tr") && (o = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (o = "tr"), 0 === a.indexOf("<tbody") && (o = "table"), 0 === a.indexOf("<option") && (o = "select");
          var d = s.createElement(o);
          d.innerHTML = a;

          for (var h = 0; h < d.childNodes.length; h += 1) r.push(d.childNodes[h]);
        } else r = function (e, t) {
          if ("string" != typeof e) return [e];

          for (var i = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1) i.push(s[r]);

          return i;
        }(e.trim(), t || s);
      } else if (e.nodeType || e === i || e === s) r.push(e);else if (Array.isArray(e)) {
        if (e instanceof v) return e;
        r = e;
      }

      return new v(function (e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);

        return t;
      }(r));
    }

    g.fn = v.prototype;
    var y = "resize scroll".split(" ");

    function w(e) {
      return function () {
        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];

        if (void 0 === i[0]) {
          for (var r = 0; r < this.length; r += 1) y.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : g(this[r]).trigger(e));

          return this;
        }

        return this.on.apply(this, [e].concat(i));
      };
    }

    w("click"), w("blur"), w("focus"), w("focusin"), w("focusout"), w("keyup"), w("keydown"), w("keypress"), w("submit"), w("change"), w("mousedown"), w("mousemove"), w("mouseup"), w("mouseenter"), w("mouseleave"), w("mouseout"), w("mouseover"), w("touchstart"), w("touchend"), w("touchmove"), w("resize"), w("scroll");
    var b = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, s);
        }), this;
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, s);
        }), this;
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return m(this, function (e) {
          return s.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          s.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);

        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);

        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;

        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;

        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

        var s = t[0],
            r = t[1],
            a = t[2],
            n = t[3];

        function o(e) {
          var t = e.target;

          if (t) {
            var i = e.target.dom7EventData || [];
            if (i.indexOf(e) < 0 && i.unshift(e), g(t).is(r)) a.apply(t, i);else for (var s = g(t).parents(), n = 0; n < s.length; n += 1) g(s[n]).is(r) && a.apply(s[n], i);
          }
        }

        function l(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
        }

        "function" == typeof t[1] && (s = t[0], a = t[1], n = t[2], r = void 0), n || (n = !1);

        for (var d, h = s.split(" "), u = 0; u < this.length; u += 1) {
          var p = this[u];
          if (r) for (d = 0; d < h.length; d += 1) {
            var c = h[d];
            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []), p.dom7LiveListeners[c].push({
              listener: a,
              proxyListener: o
            }), p.addEventListener(c, o, n);
          } else for (d = 0; d < h.length; d += 1) {
            var v = h[d];
            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[v] || (p.dom7Listeners[v] = []), p.dom7Listeners[v].push({
              listener: a,
              proxyListener: l
            }), p.addEventListener(v, l, n);
          }
        }

        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

        var s = t[0],
            r = t[1],
            a = t[2],
            n = t[3];
        "function" == typeof t[1] && (s = t[0], a = t[1], n = t[2], r = void 0), n || (n = !1);

        for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
          var u = this[h],
              p = void 0;
          if (!r && u.dom7Listeners ? p = u.dom7Listeners[d] : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length) for (var c = p.length - 1; c >= 0; c -= 1) {
            var v = p[c];
            a && v.listener === a || a && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === a ? (u.removeEventListener(d, v.proxyListener, n), p.splice(c, 1)) : a || (u.removeEventListener(d, v.proxyListener, n), p.splice(c, 1));
          }
        }

        return this;
      },
      trigger: function () {
        for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];

        for (var r = i[0].split(" "), a = i[1], n = 0; n < r.length; n += 1) for (var o = r[n], d = 0; d < this.length; d += 1) {
          var h = this[d];

          if (e.CustomEvent) {
            var u = new e.CustomEvent(o, {
              detail: a,
              bubbles: !0,
              cancelable: !0
            });
            h.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), h.dispatchEvent(u), h.dom7EventData = [], delete h.dom7EventData;
          }
        }

        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return e && t.on("transitionend", function i(s) {
          s.target === this && (e.call(this, s), t.off("transitionend", i));
        }), this;
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
              t = n(),
              i = this[0],
              s = i.getBoundingClientRect(),
              r = t.body,
              a = i.clientTop || r.clientTop || 0,
              o = i.clientLeft || r.clientLeft || 0,
              d = i === e ? e.scrollY : i.scrollTop,
              h = i === e ? e.scrollX : i.scrollLeft;
          return {
            top: s.top + d - a,
            left: s.left + h - o
          };
        }

        return null;
      },
      css: function (e, t) {
        var i,
            s = l();

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1) for (var r in e) this[i].style[r] = e[r];

            return this;
          }

          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;

          return this;
        }

        return this;
      },
      each: function (e) {
        return e ? (this.forEach(function (t, i) {
          e.apply(t, [t, i]);
        }), this) : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;

        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;

        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;

        return this;
      },
      is: function (e) {
        var t,
            i,
            s = l(),
            r = n(),
            a = this[0];
        if (!a || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (a.matches) return a.matches(e);
          if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
          if (a.msMatchesSelector) return a.msMatchesSelector(e);

          for (t = g(e), i = 0; i < t.length; i += 1) if (t[i] === a) return !0;

          return !1;
        }

        if (e === r) return a === r;
        if (e === s) return a === s;

        if (e.nodeType || e instanceof v) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === a) return !0;

          return !1;
        }

        return !1;
      },
      index: function () {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);

          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return g([]);

        if (e < 0) {
          var i = t + e;
          return g(i < 0 ? [] : [this[i]]);
        }

        return g([this[e]]);
      },
      append: function () {
        for (var e, t = n(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

          for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
            var r = t.createElement("div");

            for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild);
          } else if (e instanceof v) for (var a = 0; a < e.length; a += 1) this[s].appendChild(e[a]);else this[s].appendChild(e);
        }

        return this;
      },
      prepend: function (e) {
        var t,
            i,
            s = n();

        for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
          var r = s.createElement("div");

          for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
        } else if (e instanceof v) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);else this[t].insertBefore(e, this[t].childNodes[0]);

        return this;
      },
      next: function (e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e) ? g([this[0].nextElementSibling]) : g([]) : this[0].nextElementSibling ? g([this[0].nextElementSibling]) : g([]) : g([]);
      },
      nextAll: function (e) {
        var t = [],
            i = this[0];
        if (!i) return g([]);

        for (; i.nextElementSibling;) {
          var s = i.nextElementSibling;
          e ? g(s).is(e) && t.push(s) : t.push(s), i = s;
        }

        return g(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && g(t.previousElementSibling).is(e) ? g([t.previousElementSibling]) : g([]) : t.previousElementSibling ? g([t.previousElementSibling]) : g([]);
        }

        return g([]);
      },
      prevAll: function (e) {
        var t = [],
            i = this[0];
        if (!i) return g([]);

        for (; i.previousElementSibling;) {
          var s = i.previousElementSibling;
          e ? g(s).is(e) && t.push(s) : t.push(s), i = s;
        }

        return g(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? g(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));

        return g(t);
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? g(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;

        return g(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), r = 0; r < s.length; r += 1) t.push(s[r]);

        return g(t);
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].children, r = 0; r < s.length; r += 1) e && !g(s[r]).is(e) || t.push(s[r]);

        return g(t);
      },
      filter: function (e) {
        return g(m(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

        return this;
      }
    };
    Object.keys(b).forEach(function (e) {
      g.fn[e] = b[e];
    });
    var C,
        T,
        S,
        x = g;

    function E(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function M() {
      return Date.now();
    }

    function P(e) {
      return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
    }

    function L() {
      for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
        var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (null != i) for (var s = Object.keys(Object(i)), r = 0, a = s.length; r < a; r += 1) {
          var n = s[r],
              o = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== o && o.enumerable && (P(e[n]) && P(i[n]) ? L(e[n], i[n]) : !P(e[n]) && P(i[n]) ? (e[n] = {}, L(e[n], i[n])) : e[n] = i[n]);
        }
      }

      return e;
    }

    function k(e, t) {
      Object.keys(t).forEach(function (i) {
        P(t[i]) && Object.keys(t[i]).forEach(function (s) {
          "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
        }), e[i] = t[i];
      });
    }

    function z() {
      return C || (C = function () {
        var e = l(),
            t = n();
        return {
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
          passiveListener: function () {
            var t = !1;

            try {
              var i = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                }
              });
              e.addEventListener("testPassiveListener", null, i);
            } catch (e) {}

            return t;
          }(),
          gestures: "ongesturestart" in e
        };
      }()), C;
    }

    function O(e) {
      return void 0 === e && (e = {}), T || (T = function (e) {
        var t = (void 0 === e ? {} : e).userAgent,
            i = z(),
            s = l(),
            r = s.navigator.platform,
            a = t || s.navigator.userAgent,
            n = {
          ios: !1,
          android: !1
        },
            o = s.screen.width,
            d = s.screen.height,
            h = a.match(/(Android);?[\s\/]+([\d.]+)?/),
            u = a.match(/(iPad).*OS\s([\d_]+)/),
            p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            c = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === r,
            f = "MacIntel" === r;
        return !u && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (u || c || p) && (n.os = "ios", n.ios = !0), n;
      }(e)), T;
    }

    function I() {
      return S || (S = function () {
        var e,
            t = l();
        return {
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
      }()), S;
    }

    var A = {
      name: "resize",
      create: function () {
        var e = this;
        L(e, {
          resize: {
            observer: null,
            createObserver: function () {
              e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
                var i = e.width,
                    s = e.height,
                    r = i,
                    a = s;
                t.forEach(function (t) {
                  var i = t.contentBoxSize,
                      s = t.contentRect,
                      n = t.target;
                  n && n !== e.el || (r = s ? s.width : (i[0] || i).inlineSize, a = s ? s.height : (i[0] || i).blockSize);
                }), r === i && a === s || e.resize.resizeHandler();
              }), e.resize.observer.observe(e.el));
            },
            removeObserver: function () {
              e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
            },
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function (e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
        },
        destroy: function (e) {
          var t = l();
          e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
        }
      }
    };

    function B() {
      return (B = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }

        return e;
      }).apply(this, arguments);
    }

    var D = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var i = l(),
            s = this,
            r = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
          if (1 !== e.length) {
            var t = function () {
              s.emit("observerUpdate", e[0]);
            };

            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
          } else s.emit("observerUpdate", e[0]);
        });
        r.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), s.observer.observers.push(r);
      },
      init: function () {
        if (this.support.observer && this.params.observer) {
          if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren
          }), this.observer.attach(this.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
        G = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function () {
        k(this, {
          observer: B({}, D, {
            observers: []
          })
        });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        }
      }
    };

    function N(e) {
      var t = n(),
          i = l(),
          s = this.touchEventsData,
          r = this.params,
          a = this.touches;

      if (!this.animating || !r.preventInteractionOnTransition) {
        var o = e;
        o.originalEvent && (o = o.originalEvent);
        var d = x(o.target);
        if ("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!s.isTouchEvent && "button" in o && o.button > 0)) if (!s.isTouched || !s.isMoved) if (!!r.noSwipingClass && "" !== r.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = x(e.path[0])), r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
          a.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, a.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
          var h = a.currentX,
              u = a.currentY,
              p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
              c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;

          if (p && (h <= c || h >= i.innerWidth - c)) {
            if ("prevent" !== p) return;
            e.preventDefault();
          }

          if (L(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), a.startX = h, a.startY = u, s.touchStartTime = M(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var v = !0;
            d.is(s.formElements) && (v = !1), t.activeElement && x(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var f = v && this.allowTouchMove && r.touchStartPreventDefault;
            !r.touchStartForcePreventDefault && !f || d[0].isContentEditable || o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }

    function H(e) {
      var t = n(),
          i = this.touchEventsData,
          s = this.params,
          r = this.touches,
          a = this.rtlTranslate,
          o = e;

      if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
              d = "touchmove" === o.type ? l.pageX : o.pageX,
              h = "touchmove" === o.type ? l.pageY : o.pageY;
          if (o.preventedByNestedSwiper) return r.startX = d, void (r.startY = h);
          if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (L(r, {
            startX: d,
            startY: h,
            currentX: d,
            currentY: h
          }), i.touchStartTime = M()));
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
            if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
          } else if (d < r.startX && this.translate <= this.maxTranslate() || d > r.startX && this.translate >= this.minTranslate()) return;
          if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && x(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

          if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
            r.currentX = d, r.currentY = h;
            var u = r.currentX - r.startX,
                p = r.currentY - r.startY;

            if (!(this.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) < this.params.threshold)) {
              var c;
              if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + p * p >= 25 && (c = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
              if (i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                var v = this.isHorizontal() ? u : p;
                r.diff = v, v *= s.touchRatio, a && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                var f = !0,
                    m = s.resistanceRatio;

                if (s.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                  if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                }

                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: r[this.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: r[this.isHorizontal() ? "currentX" : "currentY"],
                  time: M()
                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
    }

    function V(e) {
      var t = this,
          i = t.touchEventsData,
          s = t.params,
          r = t.touches,
          a = t.rtlTranslate,
          n = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid,
          d = e;
      if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
      s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      var h,
          u = M(),
          p = u - i.touchStartTime;
      if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = M(), E(function () {
        t.destroyed || (t.allowClick = !0);
      }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
      if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
        if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var c = i.velocities.pop(),
                v = i.velocities.pop(),
                f = c.position - v.position,
                m = c.time - v.time;
            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || M() - c.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;

          t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
          var g = 1e3 * s.freeModeMomentumRatio,
              y = t.velocity * g,
              w = t.translate + y;
          a && (w = -w);
          var b,
              C,
              T = !1,
              S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), b = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), s.loop && s.centeredSlides && (C = !0);else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), b = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), s.loop && s.centeredSlides && (C = !0);else if (s.freeModeSticky) {
            for (var x, P = 0; P < l.length; P += 1) if (l[P] > -w) {
              x = P;
              break;
            }

            w = -(w = Math.abs(l[x] - w) < Math.abs(l[x - 1] - w) || "next" === t.swipeDirection ? l[x] : l[x - 1]);
          }

          if (C && t.once("transitionEnd", function () {
            t.loopFix();
          }), 0 !== t.velocity) {
            if (g = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), s.freeModeSticky) {
              var L = Math.abs((a ? -w : w) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
              g = L < k ? s.speed : L < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();

          s.freeModeMomentumBounce && T ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
              t.setTranslate(b), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              });
            }, 0));
          })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses();
        } else {
          if (s.freeModeSticky) return void t.slideToClosest();
          s.freeMode && t.emit("_freeModeNoMomentumRelease");
        }

        (!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (var z = 0, O = t.slidesSizesGrid[0], I = 0; I < o.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          var A = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[I + A] ? h >= o[I] && h < o[I + A] && (z = I, O = o[I + A] - o[I]) : h >= o[I] && (z = I, O = o[o.length - 1] - o[o.length - 2]);
        }

        var B = (h - o[z]) / O,
            D = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

        if (p > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (B >= s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z)), "prev" === t.swipeDirection && (B > 1 - s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(z + D) : t.slideTo(z) : ("next" === t.swipeDirection && t.slideTo(z + D), "prev" === t.swipeDirection && t.slideTo(z));
        }
      }
    }

    function $() {
      var e = this.params,
          t = this.el;

      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
            s = this.allowSlidePrev,
            r = this.snapGrid;
        this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
      }
    }

    function j(e) {
      this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
    }

    function _() {
      var e = this.wrapperEl,
          t = this.rtlTranslate;
      this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
      var i = this.maxTranslate() - this.minTranslate();
      (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
    }

    var F = !1;

    function R() {}

    var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };

    function q(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    var X = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i];
            s.params && L(e, s.params);
          });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i],
                r = e[i] || {};
            s.on && t.on && Object.keys(s.on).forEach(function (e) {
              t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(r);
          });
        }
      },
      eventsEmitter: {
        on: function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          var r = i ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t);
          }), s;
        },
        once: function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;

          function r() {
            s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;

            for (var i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];

            t.apply(s, a);
          }

          return r.__emitterProxy = t, s.on(e, r, i);
        },
        onAny: function (e, t) {
          if ("function" != typeof e) return this;
          var i = t ? "unshift" : "push";
          return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
        },
        offAny: function (e) {
          if (!this.eventsAnyListeners) return this;
          var t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off: function (e, t) {
          var i = this;
          return i.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, r) {
              (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1);
            });
          }), i) : i;
        },
        emit: function () {
          var e,
              t,
              i,
              s = this;
          if (!s.eventsListeners) return s;

          for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];

          "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = s) : (e = a[0].events, t = a[0].data, i = a[0].context || s), t.unshift(i);
          var o = Array.isArray(e) ? e : e.split(" ");
          return o.forEach(function (e) {
            s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
              s.apply(i, [e].concat(t));
            }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(function (e) {
              e.apply(i, t);
            });
          }), s;
        }
      },
      update: {
        updateSize: function () {
          var e,
              t,
              i = this.$el;
          e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), L(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t
          }));
        },
        updateSlides: function () {
          var e = this,
              t = function (t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          },
              i = function (e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          },
              s = l(),
              r = e.params,
              a = e.$wrapperEl,
              n = e.size,
              o = e.rtlTranslate,
              d = e.wrongRTL,
              h = e.virtual && r.virtual.enabled,
              u = h ? e.virtual.slides.length : e.slides.length,
              p = a.children("." + e.params.slideClass),
              c = h ? e.virtual.slides.length : p.length,
              v = [],
              f = [],
              m = [],
              g = r.slidesOffsetBefore;

          "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
          var y = r.slidesOffsetAfter;
          "function" == typeof y && (y = r.slidesOffsetAfter.call(e));
          var w = e.snapGrid.length,
              b = e.slidesGrid.length,
              C = r.spaceBetween,
              T = -g,
              S = 0,
              x = 0;

          if (void 0 !== n) {
            var E, M;
            "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * n), e.virtualSize = -C, o ? p.css({
              marginLeft: "",
              marginTop: ""
            }) : p.css({
              marginRight: "",
              marginBottom: ""
            }), r.slidesPerColumn > 1 && (E = Math.floor(c / r.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / r.slidesPerColumn) * r.slidesPerColumn, "auto" !== r.slidesPerView && "row" === r.slidesPerColumnFill && (E = Math.max(E, r.slidesPerView * r.slidesPerColumn)));

            for (var P, k, z, O = r.slidesPerColumn, I = E / O, A = Math.floor(c / r.slidesPerColumn), B = 0; B < c; B += 1) {
              M = 0;
              var D = p.eq(B);

              if (r.slidesPerColumn > 1) {
                var G = void 0,
                    N = void 0,
                    H = void 0;

                if ("row" === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                  var V = Math.floor(B / (r.slidesPerGroup * r.slidesPerColumn)),
                      $ = B - r.slidesPerColumn * r.slidesPerGroup * V,
                      j = 0 === V ? r.slidesPerGroup : Math.min(Math.ceil((c - V * O * r.slidesPerGroup) / O), r.slidesPerGroup);
                  G = (N = $ - (H = Math.floor($ / j)) * j + V * r.slidesPerGroup) + H * E / O, D.css({
                    "-webkit-box-ordinal-group": G,
                    "-moz-box-ordinal-group": G,
                    "-ms-flex-order": G,
                    "-webkit-order": G,
                    order: G
                  });
                } else "column" === r.slidesPerColumnFill ? (H = B - (N = Math.floor(B / O)) * O, (N > A || N === A && H === O - 1) && (H += 1) >= O && (H = 0, N += 1)) : N = B - (H = Math.floor(B / I)) * I;

                D.css(t("margin-top"), 0 !== H && r.spaceBetween && r.spaceBetween + "px");
              }

              if ("none" !== D.css("display")) {
                if ("auto" === r.slidesPerView) {
                  var _ = s.getComputedStyle(D[0], null),
                      F = D[0].style.transform,
                      R = D[0].style.webkitTransform;

                  if (F && (D[0].style.transform = "none"), R && (D[0].style.webkitTransform = "none"), r.roundLengths) M = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);else {
                    var W = i(_, "width"),
                        q = i(_, "padding-left"),
                        X = i(_, "padding-right"),
                        Y = i(_, "margin-left"),
                        U = i(_, "margin-right"),
                        K = _.getPropertyValue(_, "box-sizing");

                    if (K && "border-box" === K) M = W + Y + U;else {
                      var J = D[0],
                          Q = J.clientWidth;
                      M = W + q + X + Y + U + (J.offsetWidth - Q);
                    }
                  }
                  F && (D[0].style.transform = F), R && (D[0].style.webkitTransform = R), r.roundLengths && (M = Math.floor(M));
                } else M = (n - (r.slidesPerView - 1) * C) / r.slidesPerView, r.roundLengths && (M = Math.floor(M)), p[B] && (p[B].style[t("width")] = M + "px");

                p[B] && (p[B].swiperSlideSize = M), m.push(M), r.centeredSlides ? (T = T + M / 2 + S / 2 + C, 0 === S && 0 !== B && (T = T - n / 2 - C), 0 === B && (T = T - n / 2 - C), Math.abs(T) < .001 && (T = 0), r.roundLengths && (T = Math.floor(T)), x % r.slidesPerGroup == 0 && v.push(T), f.push(T)) : (r.roundLengths && (T = Math.floor(T)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && v.push(T), f.push(T), T = T + M + C), e.virtualSize += M + C, S = M, x += 1;
              }
            }

            if (e.virtualSize = Math.max(e.virtualSize, n) + y, o && d && ("slide" === r.effect || "coverflow" === r.effect) && a.css({
              width: e.virtualSize + r.spaceBetween + "px"
            }), r.setWrapperSize) a.css(((k = {})[t("width")] = e.virtualSize + r.spaceBetween + "px", k));
            if (r.slidesPerColumn > 1) if (e.virtualSize = (M + r.spaceBetween) * E, e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween, a.css(((z = {})[t("width")] = e.virtualSize + r.spaceBetween + "px", z)), r.centeredSlides) {
              P = [];

              for (var Z = 0; Z < v.length; Z += 1) {
                var ee = v[Z];
                r.roundLengths && (ee = Math.floor(ee)), v[Z] < e.virtualSize + v[0] && P.push(ee);
              }

              v = P;
            }

            if (!r.centeredSlides) {
              P = [];

              for (var te = 0; te < v.length; te += 1) {
                var ie = v[te];
                r.roundLengths && (ie = Math.floor(ie)), v[te] <= e.virtualSize - n && P.push(ie);
              }

              v = P, Math.floor(e.virtualSize - n) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - n);
            }

            if (0 === v.length && (v = [0]), 0 !== r.spaceBetween) {
              var se,
                  re = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              p.filter(function (e, t) {
                return !r.cssMode || t !== p.length - 1;
              }).css(((se = {})[re] = C + "px", se));
            }

            if (r.centeredSlides && r.centeredSlidesBounds) {
              var ae = 0;
              m.forEach(function (e) {
                ae += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var ne = (ae -= r.spaceBetween) - n;
              v = v.map(function (e) {
                return e < 0 ? -g : e > ne ? ne + y : e;
              });
            }

            if (r.centerInsufficientSlides) {
              var oe = 0;

              if (m.forEach(function (e) {
                oe += e + (r.spaceBetween ? r.spaceBetween : 0);
              }), (oe -= r.spaceBetween) < n) {
                var le = (n - oe) / 2;
                v.forEach(function (e, t) {
                  v[t] = e - le;
                }), f.forEach(function (e, t) {
                  f[t] = e + le;
                });
              }
            }

            L(e, {
              slides: p,
              snapGrid: v,
              slidesGrid: f,
              slidesSizesGrid: m
            }), c !== u && e.emit("slidesLengthChange"), v.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
              i = [],
              s = 0;
          if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
            if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
              i.push(e);
            });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var r = this.activeIndex + t;
              if (r > this.slides.length) break;
              i.push(this.slides.eq(r)[0]);
            }
          } else i.push(this.slides.eq(this.activeIndex)[0]);

          for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
            var a = i[t].offsetHeight;
            s = a > s ? a : s;
          }

          s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this.params,
              i = this.slides,
              s = this.rtlTranslate;

          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var r = -e;
            s && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

            for (var a = 0; a < i.length; a += 1) {
              var n = i[a],
                  o = (r + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

              if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                var l = -(r - n.swiperSlideOffset),
                    d = l + this.slidesSizesGrid[a];
                (l >= 0 && l < this.size - 1 || d > 1 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(a), i.eq(a).addClass(t.slideVisibleClass));
              }

              n.progress = s ? -o : o;
            }

            this.visibleSlides = x(this.visibleSlides);
          }
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = this && this.translate && this.translate * t || 0;
          }

          var i = this.params,
              s = this.maxTranslate() - this.minTranslate(),
              r = this.progress,
              a = this.isBeginning,
              n = this.isEnd,
              o = a,
              l = n;
          0 === s ? (r = 0, a = !0, n = !0) : (a = (r = (e - this.minTranslate()) / s) <= 0, n = r >= 1), L(this, {
            progress: r,
            isBeginning: a,
            isEnd: n
          }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), a && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !a || l && !n) && this.emit("fromEdge"), this.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
              t = this.slides,
              i = this.params,
              s = this.$wrapperEl,
              r = this.activeIndex,
              a = this.realIndex,
              n = this.virtual && i.virtual.enabled;
          t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
          var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
          var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
              i = this.rtlTranslate ? this.translate : -this.translate,
              s = this.slidesGrid,
              r = this.snapGrid,
              a = this.params,
              n = this.activeIndex,
              o = this.realIndex,
              l = this.snapIndex,
              d = e;

          if (void 0 === d) {
            for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);

            a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }

          if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
            var u = Math.min(a.slidesPerGroupSkip, d);
            t = u + Math.floor((d - u) / a.slidesPerGroup);
          }

          if (t >= r.length && (t = r.length - 1), d !== n) {
            var p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            L(this, {
              snapIndex: t,
              realIndex: p,
              previousIndex: n,
              activeIndex: d
            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== p && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
          } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
              i = this.params,
              s = x(e.target).closest("." + i.slideClass)[0],
              r = !1;
          if (s) for (var a = 0; a < this.slides.length; a += 1) if (this.slides[a] === s) {
            r = !0, t = a;
            break;
          }
          if (!s || !r) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
          this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(x(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t, i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
              i = this.rtlTranslate,
              s = this.translate,
              r = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;

          var a = function (e, t) {
            void 0 === t && (t = "x");
            var i,
                s,
                r,
                a = l(),
                n = a.getComputedStyle(e, null);
            return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
              return e.replace(",", ".");
            }).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
          }(r[0], e);

          return i && (a = -a), a || 0;
        },
        setTranslate: function (e, t) {
          var i = this.rtlTranslate,
              s = this.params,
              r = this.$wrapperEl,
              a = this.wrapperEl,
              n = this.progress,
              o = 0,
              l = 0;
          this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
          var d = this.maxTranslate() - this.minTranslate();
          (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, r) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
          var a = this,
              n = a.params,
              o = a.wrapperEl;
          if (a.animating && n.preventInteractionOnTransition) return !1;
          var l,
              d = a.minTranslate(),
              h = a.maxTranslate();

          if (l = s && e > d ? d : s && e < h ? h : e, a.updateProgress(l), n.cssMode) {
            var u,
                p = a.isHorizontal();
            if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -l;else if (o.scrollTo) o.scrollTo(((u = {})[p ? "left" : "top"] = -l, u.behavior = "smooth", u));else o[p ? "scrollLeft" : "scrollTop"] = -l;
            return !0;
          }

          return 0 === t ? (a.setTransition(0), a.setTranslate(l), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(l), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
            a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"));
          }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
              s = this.params,
              r = this.previousIndex;

          if (!s.cssMode) {
            s.autoHeight && this.updateAutoHeight();
            var a = t;

            if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), e && i !== r) {
              if ("reset" === a) return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
              s = this.previousIndex,
              r = this.params;

          if (this.animating = !1, !r.cssMode) {
            this.setTransition(0);
            var a = t;

            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
              if ("reset" === a) return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function (e, t, i, s) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");

          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
            e = r;
          }

          var a = this,
              n = e;
          n < 0 && (n = 0);
          var o = a.params,
              l = a.snapGrid,
              d = a.slidesGrid,
              h = a.previousIndex,
              u = a.activeIndex,
              p = a.rtlTranslate,
              c = a.wrapperEl;
          if (a.animating && o.preventInteractionOnTransition) return !1;
          var v = Math.min(a.params.slidesPerGroupSkip, n),
              f = v + Math.floor((n - v) / a.params.slidesPerGroup);
          f >= l.length && (f = l.length - 1), (u || o.initialSlide || 0) === (h || 0) && i && a.emit("beforeSlideChangeStart");
          var m,
              g = -l[f];
          if (a.updateProgress(g), o.normalizeSlideIndex) for (var y = 0; y < d.length; y += 1) {
            var w = -Math.floor(100 * g),
                b = Math.floor(100 * d[y]),
                C = Math.floor(100 * d[y + 1]);
            void 0 !== d[y + 1] ? w >= b && w < C - (C - b) / 2 ? n = y : w >= b && w < C && (n = y + 1) : w >= b && (n = y);
          }

          if (a.initialized && n !== u) {
            if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
            if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (u || 0) !== n) return !1;
          }

          if (m = n > u ? "next" : n < u ? "prev" : "reset", p && -g === a.translate || !p && g === a.translate) return a.updateActiveIndex(n), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(g), "reset" !== m && (a.transitionStart(i, m), a.transitionEnd(i, m)), !1;

          if (o.cssMode) {
            var T,
                S = a.isHorizontal(),
                x = -g;
            if (p && (x = c.scrollWidth - c.offsetWidth - x), 0 === t) c[S ? "scrollLeft" : "scrollTop"] = x;else if (c.scrollTo) c.scrollTo(((T = {})[S ? "left" : "top"] = x, T.behavior = "smooth", T));else c[S ? "scrollLeft" : "scrollTop"] = x;
            return !0;
          }

          return 0 === t ? (a.setTransition(0), a.setTranslate(g), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, m), a.transitionEnd(i, m)) : (a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, m), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
            a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, m));
          }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0;
        },
        slideToLoop: function (e, t, i, s) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var r = e;
          return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, s);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
              r = this.animating,
              a = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
          }

          return this.slideTo(this.activeIndex + a, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
              r = this.animating,
              a = this.snapGrid,
              n = this.slidesGrid,
              o = this.rtlTranslate;

          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
          }

          function l(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }

          var d,
              h = l(o ? this.translate : -this.translate),
              u = a.map(function (e) {
            return l(e);
          }),
              p = (a[u.indexOf(h)], a[u.indexOf(h) - 1]);
          return void 0 === p && s.cssMode && a.forEach(function (e) {
            !p && h >= e && (p = e);
          }), void 0 !== p && (d = n.indexOf(p)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
        },
        slideReset: function (e, t, i) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
          var r = this.activeIndex,
              a = Math.min(this.params.slidesPerGroupSkip, r),
              n = a + Math.floor((r - a) / this.params.slidesPerGroup),
              o = this.rtlTranslate ? this.translate : -this.translate;

          if (o >= this.snapGrid[n]) {
            var l = this.snapGrid[n];
            o - l > (this.snapGrid[n + 1] - l) * s && (r += this.params.slidesPerGroup);
          } else {
            var d = this.snapGrid[n - 1];
            o - d <= (this.snapGrid[n] - d) * s && (r -= this.params.slidesPerGroup);
          }

          return r = Math.max(r, 0), r = Math.min(r, this.slidesGrid.length - 1), this.slideTo(r, e, t, i);
        },
        slideToClickedSlide: function () {
          var e,
              t = this,
              i = t.params,
              s = t.$wrapperEl,
              r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
              a = t.clickedIndex;

          if (i.loop) {
            if (t.animating) return;
            e = parseInt(x(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(a);
            })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(a);
            })) : t.slideTo(a);
          } else t.slideTo(a);
        }
      },
      loop: {
        loopCreate: function () {
          var e = this,
              t = n(),
              i = e.params,
              s = e.$wrapperEl;
          s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var r = s.children("." + i.slideClass);

          if (i.loopFillGroupWithBlank) {
            var a = i.slidesPerGroup - r.length % i.slidesPerGroup;

            if (a !== i.slidesPerGroup) {
              for (var o = 0; o < a; o += 1) {
                var l = x(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                s.append(l);
              }

              r = s.children("." + i.slideClass);
            }
          }

          "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
          var d = [],
              h = [];
          r.each(function (t, i) {
            var s = x(t);
            i < e.loopedSlides && h.push(t), i < r.length && i >= r.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
          });

          for (var u = 0; u < h.length; u += 1) s.append(x(h[u].cloneNode(!0)).addClass(i.slideDuplicateClass));

          for (var p = d.length - 1; p >= 0; p -= 1) s.prepend(x(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          this.emit("beforeLoopFix");
          var e,
              t = this.activeIndex,
              i = this.slides,
              s = this.loopedSlides,
              r = this.allowSlidePrev,
              a = this.allowSlideNext,
              n = this.snapGrid,
              o = this.rtlTranslate;
          this.allowSlidePrev = !0, this.allowSlideNext = !0;
          var l = -n[t] - this.getTranslate();
          if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
            e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
          }
          this.allowSlidePrev = r, this.allowSlideNext = a, this.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
              t = this.params,
              i = this.slides;
          e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function (e) {
          if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
            var t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
          }
        },
        unsetGrabCursor: function () {
          this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
              i = this.params;
          if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);
          i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
        },
        prependSlide: function (e) {
          var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
          t.loop && this.loopDestroy();
          var r = s + 1;

          if ("object" == typeof e && "length" in e) {
            for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);

            r = s + e.length;
          } else i.prepend(e);

          t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(r, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this.$wrapperEl,
              s = this.params,
              r = this.activeIndex;
          s.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
          var a = this.slides.length;
          if (e <= 0) this.prependSlide(t);else if (e >= a) this.appendSlide(t);else {
            for (var n = r > e ? r + 1 : r, o = [], l = a - 1; l >= e; l -= 1) {
              var d = this.slides.eq(l);
              d.remove(), o.unshift(d);
            }

            if ("object" == typeof t && "length" in t) {
              for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);

              n = r > e ? r + t.length : r;
            } else i.append(t);

            for (var u = 0; u < o.length; u += 1) i.append(o[u]);

            s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
          t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
          var r,
              a = s;

          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) r = e[n], this.slides[r] && this.slides.eq(r).remove(), r < a && (a -= 1);

            a = Math.max(a, 0);
          } else r = e, this.slides[r] && this.slides.eq(r).remove(), r < a && (a -= 1), a = Math.max(a, 0);

          t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);

          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function () {
          var e = n(),
              t = this.params,
              i = this.touchEvents,
              s = this.el,
              r = this.wrapperEl,
              a = this.device,
              o = this.support;
          this.onTouchStart = N.bind(this), this.onTouchMove = H.bind(this), this.onTouchEnd = V.bind(this), t.cssMode && (this.onScroll = _.bind(this)), this.onClick = j.bind(this);
          var l = !!t.nested;
          if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, l), e.addEventListener(i.end, this.onTouchEnd, !1);else {
            if (o.touch) {
              var d = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                passive: !1,
                capture: l
              } : l), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), F || (e.addEventListener("touchstart", R), F = !0);
            }

            (t.simulateTouch && !a.ios && !a.android || t.simulateTouch && !o.touch && a.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && r.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : this.on("observerUpdate", $, !0);
        },
        detachEvents: function () {
          var e = n(),
              t = this.params,
              i = this.touchEvents,
              s = this.el,
              r = this.wrapperEl,
              a = this.device,
              o = this.support,
              l = !!t.nested;
          if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, l), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
            if (o.touch) {
              var d = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, l), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
            }

            (t.simulateTouch && !a.ios && !a.android || t.simulateTouch && !o.touch && a.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, l), e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && r.removeEventListener("scroll", this.onScroll), this.off(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $);
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
              t = this.initialized,
              i = this.loopedSlides,
              s = void 0 === i ? 0 : i,
              r = this.params,
              a = this.$el,
              n = r.breakpoints;

          if (n && (!n || 0 !== Object.keys(n).length)) {
            var o = this.getBreakpoint(n, this.params.breakpointsBase, this.el);

            if (o && this.currentBreakpoint !== o) {
              var l = o in n ? n[o] : void 0;
              l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = l[e];
                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var d = l || this.originalParams,
                  h = r.slidesPerColumn > 1,
                  u = d.slidesPerColumn > 1;
              h && !u ? (a.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && u && (a.addClass(r.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(r.containerModifierClass + "multirow-column"), this.emitContainerClasses());
              var p = d.direction && d.direction !== r.direction,
                  c = r.loop && (d.slidesPerView !== r.slidesPerView || p);
              p && t && this.changeDirection(), L(this.params, d), L(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev
              }), this.currentBreakpoint = o, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e, t, i) {
          if (void 0 === t && (t = "window"), e && ("container" !== t || i)) {
            var s = !1,
                r = l(),
                a = "window" === t ? r.innerWidth : i.clientWidth,
                n = "window" === t ? r.innerHeight : i.clientHeight,
                o = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var t = parseFloat(e.substr(1));
                return {
                  value: n * t,
                  point: e
                };
              }

              return {
                value: e,
                point: e
              };
            });
            o.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });

            for (var d = 0; d < o.length; d += 1) {
              var h = o[d],
                  u = h.point;
              h.value <= a && (s = u);
            }

            return s || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
              t = this.isLocked,
              i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
        }
      },
      classes: {
        addClasses: function () {
          var e,
              t,
              i,
              s = this.classNames,
              r = this.params,
              a = this.rtl,
              n = this.$el,
              o = this.device,
              l = this.support,
              d = (e = ["initialized", r.direction, {
            "pointer-events": l.pointerEvents && !l.touch
          }, {
            "free-mode": r.freeMode
          }, {
            autoheight: r.autoHeight
          }, {
            rtl: a
          }, {
            multirow: r.slidesPerColumn > 1
          }, {
            "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
          }, {
            android: o.android
          }, {
            ios: o.ios
          }, {
            "css-mode": r.cssMode
          }], t = r.containerModifierClass, i = [], e.forEach(function (e) {
            "object" == typeof e ? Object.entries(e).forEach(function (e) {
              var s = e[0];
              e[1] && i.push(t + s);
            }) : "string" == typeof e && i.push(t + e);
          }), i);
          s.push.apply(s, d), n.addClass([].concat(s).join(" ")), this.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this.$el,
              t = this.classNames;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
      },
      images: {
        loadImage: function (e, t, i, s, r, a) {
          var n,
              o = l();

          function d() {
            a && a();
          }

          x(e).parent("picture")[0] || e.complete && r ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
        },
        preloadImages: function () {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        Y = {},
        U = function () {
      function e() {
        for (var t, i, s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];

        if (1 === r.length && r[0].constructor && r[0].constructor === Object ? i = r[0] : (t = r[0], i = r[1]), i || (i = {}), i = L({}, i), t && !i.el && (i.el = t), i.el && x(i.el).length > 1) {
          var n = [];
          return x(i.el).each(function (t) {
            var s = L({}, i, {
              el: t
            });
            n.push(new e(s));
          }), n;
        }

        var o = this;
        o.support = z(), o.device = O({
          userAgent: i.userAgent
        }), o.browser = I(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach(function (e) {
          var t = o.modules[e];

          if (t.params) {
            var s = Object.keys(t.params)[0],
                r = t.params[s];
            if ("object" != typeof r || null === r) return;
            if (!(s in i) || !("enabled" in r)) return;
            !0 === i[s] && (i[s] = {
              enabled: !0
            }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
              enabled: !1
            });
          }
        });
        var l,
            d,
            h = L({}, W);
        return o.useParams(h), o.params = L({}, h, Y, i), o.originalParams = L({}, o.params), o.passedParams = L({}, i), o.params && o.params.on && Object.keys(o.params.on).forEach(function (e) {
          o.on(e, o.params.on[e]);
        }), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = x, L(o, {
          el: t,
          classNames: [],
          slides: x(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function () {
            return "horizontal" === o.params.direction;
          },
          isVertical: function () {
            return "vertical" === o.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
            start: l[0],
            move: l[1],
            end: l[2],
            cancel: l[3]
          }, o.touchEventsDesktop = {
            start: d[0],
            move: d[1],
            end: d[2]
          }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: M(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o;
      }

      var t,
          i,
          s,
          r = e.prototype;
      return r.emitContainerClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, r.getSlideClasses = function (e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }, r.emitSlidesClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = [];
          e.slides.each(function (i) {
            var s = e.getSlideClasses(i);
            t.push({
              slideEl: i,
              classNames: s
            }), e.emit("_slideClass", i, s);
          }), e.emit("_slideClasses", t);
        }
      }, r.slidesPerViewDynamic = function () {
        var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            r = this.activeIndex,
            a = 1;

        if (e.centeredSlides) {
          for (var n, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !n && (a += 1, (o += t[l].swiperSlideSize) > s && (n = !0));

          for (var d = r - 1; d >= 0; d -= 1) t[d] && !n && (a += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
        } else for (var h = r + 1; h < t.length; h += 1) i[h] - i[r] < s && (a += 1);

        return a;
      }, r.update = function () {
        var e = this;

        if (e && !e.destroyed) {
          var t = e.snapGrid,
              i = e.params;
          i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }

        function s() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, r.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var i = this.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), this.emit("changeDirection"), t && this.update()), this;
      }, r.mount = function (e) {
        if (this.mounted) return !0;
        var t,
            i = x(e || this.params.el);
        return !!(e = i[0]) && (e.swiper = this, e && e.shadowRoot && e.shadowRoot.querySelector ? (t = x(e.shadowRoot.querySelector("." + this.params.wrapperClass))).children = function (e) {
          return i.children(e);
        } : t = i.children("." + this.params.wrapperClass), L(this, {
          $el: i,
          el: e,
          $wrapperEl: t,
          wrapperEl: t[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
          rtlTranslate: "horizontal" === this.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
          wrongRTL: "-webkit-box" === t.css("display")
        }), !0);
      }, r.init = function (e) {
        return this.initialized || !1 === this.mount(e) || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit")), this;
      }, r.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var i,
            s = this,
            r = s.params,
            a = s.$el,
            n = s.$wrapperEl,
            o = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttr("style"), n.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
          try {
            i[e] = null;
          } catch (e) {}

          try {
            delete i[e];
          } catch (e) {}
        })), s.destroyed = !0), null;
      }, e.extendDefaults = function (e) {
        L(Y, e);
      }, e.installModule = function (t) {
        e.prototype.modules || (e.prototype.modules = {});
        var i = t.name || Object.keys(e.prototype.modules).length + "_" + M();
        e.prototype.modules[i] = t;
      }, e.use = function (t) {
        return Array.isArray(t) ? (t.forEach(function (t) {
          return e.installModule(t);
        }), e) : (e.installModule(t), e);
      }, t = e, s = [{
        key: "extendedDefaults",
        get: function () {
          return Y;
        }
      }, {
        key: "defaults",
        get: function () {
          return W;
        }
      }], (i = null) && q(t.prototype, i), s && q(t, s), e;
    }();

    Object.keys(X).forEach(function (e) {
      Object.keys(X[e]).forEach(function (t) {
        U.prototype[t] = X[e][t];
      });
    }), U.use([A, G]);
    var K = U;

    function J() {
      return (J = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }

        return e;
      }).apply(this, arguments);
    }

    var Q = {
      update: function () {
        var e = this.rtl,
            t = this.params.pagination;

        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i,
              s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              r = this.pagination.$el,
              a = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > a - 1 && (i -= a), i < 0 && "bullets" !== this.params.paginationType && (i = a + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var n,
                o,
                l,
                d = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, l = ((o = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) d.each(function (e) {
              var s = x(e),
                  r = s.index();
              r === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= n && r <= o && s.addClass(t.bulletActiveClass + "-main"), r === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === o && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
            });else {
              var h = d.eq(i),
                  u = h.index();

              if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var p = d.eq(n), c = d.eq(o), v = n; v <= o; v += 1) d.eq(v).addClass(t.bulletActiveClass + "-main");

                if (this.params.loop) {
                  if (u >= d.length - t.dynamicMainBullets) {
                    for (var f = t.dynamicMainBullets; f >= 0; f -= 1) d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");

                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                  } else p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                } else p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              }
            }

            if (t.dynamicBullets) {
              var m = Math.min(d.length, t.dynamicMainBullets + 4),
                  g = (this.pagination.bulletSize * m - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                  y = e ? "right" : "left";
              d.css(this.isHorizontal() ? y : "top", g + "px");
            }
          }

          if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(a))), "progressbar" === t.type) {
            var w;
            w = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var b = (i + 1) / a,
                C = 1,
                T = 1;
            "horizontal" === w ? C = b : T = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + C + ") scaleY(" + T + ")").transition(this.params.speed);
          }

          "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, a)), this.emit("paginationRender", r[0])) : this.emit("paginationUpdate", r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;

        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              i = this.pagination.$el,
              s = "";

          if ("bullets" === e.type) {
            var r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
            this.params.freeMode && !this.params.loop && r > t && (r = t);

            for (var a = 0; a < r; a += 1) e.renderBullet ? s += e.renderBullet.call(this, a, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";

            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass.replace(/ /g, "."));
          }

          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
            t = e.params.pagination;

        if (t.el) {
          var i = x(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass.replace(/ /g, "."), function (t) {
            t.preventDefault();
            var i = x(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i);
          }), L(e.pagination, {
            $el: i,
            el: i[0]
          }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;

        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass.replace(/ /g, "."));
        }
      }
    },
        Z = {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (e) {
            return e;
          },
          formatFractionTotal: function (e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function () {
        k(this, {
          pagination: J({
            dynamicBulletIndex: 0
          }, Q)
        });
      },
      on: {
        init: function (e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function (e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function (e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function (e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function (e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function (e) {
          e.pagination.destroy();
        },
        click: function (e, t) {
          var i = t.target;

          if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !x(i).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
          }
        }
      }
    };

    function ee() {
      return (ee = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }

        return e;
      }).apply(this, arguments);
    }

    var te = {
      run: function () {
        var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
        }, i);
      },
      start: function () {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
      },
      stop: function () {
        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
      },
      pause: function (e) {
        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = n();
        "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
      },
      onTransitionEnd: function (e) {
        this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
      }
    },
        ie = {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function () {
        k(this, {
          autoplay: ee({}, te, {
            running: !1,
            paused: !1
          })
        });
      },
      on: {
        init: function (e) {
          e.params.autoplay.enabled && (e.autoplay.start(), n().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
        },
        beforeTransitionStart: function (e, t, i) {
          e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
        },
        sliderFirstMove: function (e) {
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        touchEnd: function (e) {
          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
        },
        destroy: function (e) {
          e.autoplay.running && e.autoplay.stop(), n().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
        }
      }
    };

    function se() {
      return (se = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }

        return e;
      }).apply(this, arguments);
    }

    var re = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
            s = i.params.lazy;

        if (void 0 !== e && 0 !== i.slides.length) {
          var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
              a = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
          !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || a.push(r[0]), 0 !== a.length && a.each(function (e) {
            var a = x(e);
            a.addClass(s.loadingClass);
            var n = a.attr("data-background"),
                o = a.attr("data-src"),
                l = a.attr("data-srcset"),
                d = a.attr("data-sizes"),
                h = a.parent("picture");
            i.loadImage(a[0], o || n, l, d, !1, function () {
              if (null != i && i && (!i || i.params) && !i.destroyed) {
                if (n ? (a.css("background-image", 'url("' + n + '")'), a.removeAttr("data-background")) : (l && (a.attr("srcset", l), a.removeAttr("data-srcset")), d && (a.attr("sizes", d), a.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                  var t = x(e);
                  t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                }), o && (a.attr("src", o), a.removeAttr("data-src"))), a.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                  var e = r.attr("data-swiper-slide-index");

                  if (r.hasClass(i.params.slideDuplicateClass)) {
                    var u = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(u.index(), !1);
                  } else {
                    var p = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(p.index(), !1);
                  }
                }

                i.emit("lazyImageReady", r[0], a[0]), i.params.autoHeight && i.updateAutoHeight();
              }
            }), i.emit("lazyImageLoad", r[0], a[0]);
          });
        }
      },
      load: function () {
        var e = this,
            t = e.$wrapperEl,
            i = e.params,
            s = e.slides,
            r = e.activeIndex,
            a = e.virtual && i.virtual.enabled,
            n = i.lazy,
            o = i.slidesPerView;

        function l(e) {
          if (a) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (s[e]) return !0;

          return !1;
        }

        function d(e) {
          return a ? x(e).attr("data-swiper-slide-index") : x(e).index();
        }

        if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
          var i = a ? x(t).attr("data-swiper-slide-index") : x(t).index();
          e.lazy.loadInSlide(i);
        });else if (o > 1) for (var h = r; h < r + o; h += 1) l(h) && e.lazy.loadInSlide(h);else e.lazy.loadInSlide(r);
        if (n.loadPrevNext) if (o > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          for (var u = n.loadPrevNextAmount, p = o, c = Math.min(r + p + Math.max(u, p), s.length), v = Math.max(r - Math.max(p, u), 0), f = r + o; f < c; f += 1) l(f) && e.lazy.loadInSlide(f);

          for (var m = v; m < r; m += 1) l(m) && e.lazy.loadInSlide(m);
        } else {
          var g = t.children("." + i.slideNextClass);
          g.length > 0 && e.lazy.loadInSlide(d(g));
          var y = t.children("." + i.slidePrevClass);
          y.length > 0 && e.lazy.loadInSlide(d(y));
        }
      },
      checkInViewOnLoad: function () {
        var e = l();

        if (this && !this.destroyed) {
          var t = this.params.lazy.scrollingElement ? x(this.params.lazy.scrollingElement) : x(e),
              i = t[0] === e,
              s = i ? e.innerWidth : t[0].offsetWidth,
              r = i ? e.innerHeight : t[0].offsetHeight,
              a = this.$el.offset(),
              n = !1;
          this.rtlTranslate && (a.left -= this.$el[0].scrollLeft);

          for (var o = [[a.left, a.top], [a.left + this.width, a.top], [a.left, a.top + this.height], [a.left + this.width, a.top + this.height]], d = 0; d < o.length; d += 1) {
            var h = o[d];

            if (h[0] >= 0 && h[0] <= s && h[1] >= 0 && h[1] <= r) {
              if (0 === h[0] && 0 === h[1]) continue;
              n = !0;
            }
          }

          n ? (this.lazy.load(), t.off("scroll", this.lazy.checkInViewOnLoad)) : this.lazy.scrollHandlerAttached || (this.lazy.scrollHandlerAttached = !0, t.on("scroll", this.lazy.checkInViewOnLoad));
        }
      }
    },
        ae = {
      name: "lazy",
      params: {
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function () {
        k(this, {
          lazy: se({
            initialImageLoaded: !1
          }, re)
        });
      },
      on: {
        beforeInit: function (e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function (e) {
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
        },
        scroll: function (e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function (e) {
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function (e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function (e) {
          e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
        }
      }
    };
    K.use([Z, ie, ae]);
    new K(".swiper-container", {
      lazy: !0,
      autoplay: {
        stopOnLastSlide: !0
      },
      breakpoints: {
        slidesPerView: 1,
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
    new function (e = {}) {
      this.el_dropdowns = document.querySelectorAll(".dropdown"), this.el_dropdownsList = document.querySelectorAll(".dropdown-list"), this.init = function () {
        this.dropdowns();
      }, this.dropdowns = function () {
        this.el_dropdowns.length <= 0 || this.el_dropdownsList <= 0 || this.el_dropdowns.forEach(e => {
          e.addEventListener("click", function (e) {
            [...this.children].find(e => e.classList.contains("dropdown-list")).classList.toggle("dropdown-show");
          });
        });
      };
    }().init();
  }
});