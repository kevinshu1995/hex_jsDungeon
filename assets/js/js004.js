!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
      return e[t];
    }.bind(null, o));
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 3);
}({
  3: function (e, t) {
    function n() {
      let e = document.querySelectorAll(".location"),
          t = document.querySelectorAll(".date"),
          n = document.querySelectorAll(".time"),
          o = {
        "NEW YORK": "America/New_York",
        LONDON: "Europe/London",
        BANGKOK: "Asia/Bangkok",
        TAIWAN: "Asia/Taipei",
        SYDNEY: "Australia/Sydney"
      };
      e.forEach((e, u) => {
        n[u].textContent = r(o[e.textContent]).time, t[u].textContent = `${r(o[e.textContent]).date} ${r(o[e.textContent]).year}`;
      });
    }

    function r(e) {
      let t = {
        timeZone: e,
        year: "numeric"
      },
          n = {
        timeZone: e,
        hour12: !1,
        hour: "numeric",
        minute: "2-digit"
      },
          r = {
        timeZone: e,
        month: "short",
        day: "numeric"
      };
      return {
        year: new Date().toLocaleString("en-US", t),
        date: new Date().toLocaleString("en-US", r),
        time: new Date().toLocaleString("en-US", n)
      };
    }

    n(), window.setInterval(n, 1e3);
  }
});