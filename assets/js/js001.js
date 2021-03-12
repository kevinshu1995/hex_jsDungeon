!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var l = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var l in t) n.d(r, l, function (e) {
      return t[e];
    }.bind(null, l));
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e) {
  let n = document.getElementById("mainList"),
      r = "";

  function l(t) {
    for (let e = 0; e < 9; e++) r += `<li>${t}x${e + 1}=${t * (e + 1)}</li>`;
  }

  !function () {
    let t = '\n    <li class="l-card-title">\n    \t<h1>九九乘法表</h1>\n    \t<h2>MULTIPLICATION CHART</h2>\n    </li>\n    ';

    for (let e = 0; e < 8; e++) l(e + 2), t += `<li class="l-card">\n     \t\t\t\t\t<ul class="l-card__wrap">\n        \t\t\t\t\t<li class="l-card__title">${e + 2}</li>\n        \t\t\t\t\t${r}\n      \t\t\t\t\t</ul>\n    \t\t\t\t</li>`, r = "";

    n.innerHTML = t || "";
  }();
}]);