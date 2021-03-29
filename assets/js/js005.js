!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var s = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
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
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) n.d(o, s, function (t) {
      return e[t];
    }.bind(null, s));
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}({
  5: function (e, t, n) {
    "use strict";

    n.r(t);
    const o = new function () {
      const e = {
        error: {
          el: document.getElementById("errorText")
        },
        success: {
          el: document.getElementById("successText")
        },
        requesting: {
          el: document.getElementById("requestingText")
        },
        backDrop: {
          el: document.getElementById("messageBackdrop")
        }
      },
            t = Object.keys(e),
            n = t => e[t].el.classList;

      this.clearHandler = () => {
        t.forEach(e => {
          n(e).contains("hidden") || n(e).add("hidden");
        }), e.backDrop.el.style.display = "none";
      }, this.successHandler = () => {
        const e = this;
        setTimeout(() => {
          e.statusHandler({
            STATUS: "clear"
          });
        }, 3e3);
      }, this.defaultHandler = e => {
        t.forEach(t => {
          t === e ? n(t).remove("hidden") : n(t).contains("hidden") || n(t).add("hidden");
        });
      }, this.statusHandler = (e = {
        STATUS: STATUS
      }) => {
        "clear" === e.STATUS ? this.clearHandler() : this.defaultHandler(e.STATUS), "success" === e.STATUS && this.successHandler();
      };
    }();
    new function () {
      const e = this;
      let t = null;
      this.init = () => {
        e.getData().then(n => {
          console.log("response data", n), t = e.get_filteredCounties(n.records), e.setDom_fillSelectOptions(), o.statusHandler({
            STATUS: "success"
          });
        }), document.getElementById("county").addEventListener("change", function (t) {
          e.fillCountyData(t);
        }), document.getElementById("selectedCountySiteList").addEventListener("click", function (t) {
          e.switchCurrentDisplayCountySite(t);
        });
      }, this.getData = async function () {
        return await fetch("https://fast-retreat-58038.herokuapp.com/air").then(e => e.json()).catch(e => {
          console.error(e), o.statusHandler({
            STATUS: "error"
          });
        });
      }, this.fillCountyData = n => {
        const o = n.target.value;
        if (!o || !t) return;
        const s = t[o].sort((e, t) => t.AQI - e.AQI);
        e.set_county(o), e.setTextContent_selectedCountySite(t[o][0]), e.setDom_SelectedList(s), e.setTextContent_selectedCounty(t[o][0]);
      }, this.switchCurrentDisplayCountySite = n => {
        const o = t[document.getElementById("county").value],
              s = n.target.closest("[data-siteid]");

        if (s) {
          const t = o.find(e => e.SiteId === s.dataset.siteid);
          e.setTextContent_selectedCountySite(t);
        }
      }, this.get_filteredCounties = (e = {}) => e.reduce((e, t) => {
        const n = t.County;
        return void 0 === e[n] ? e[n] = [t] : e[n].push(t), e;
      }, {}), this.setDom_fillSelectOptions = () => {
        if (!t) return;
        const e = Object.keys(t),
              n = document.getElementById("county"),
              o = document.createDocumentFragment();
        e.forEach(e => {
          const t = document.createElement("option");
          [t.textContent, t.value] = [e, e], o.appendChild(t);
        }), n.appendChild(o);
      }, this.set_county = e => {
        document.getElementById("current_county").textContent = e;
      }, this.setDom_SelectedList = (t = []) => {
        const n = document.createDocumentFragment();
        t.forEach(t => {
          const o = document.createElement("div");
          o.classList.add("col", "mb-4", "w-full", "sm:w-1/2"), o.dataset.siteid = t.SiteId;
          const s = document.createElement("div");
          s.classList.add("countyWrap", "border-2");
          const c = document.createElement("h4");
          c.classList.add("countyWrap__county"), c.textContent = t.SiteName;
          const r = document.createElement("p");
          r.classList.add("countyWrap__value", e.get_BgClass(t.AQI)), r.textContent = t.AQI, s.appendChild(c), s.appendChild(r), o.appendChild(s), n.appendChild(o);
        }), document.getElementById("selectedCountySiteList").innerHTML = "", document.getElementById("selectedCountySiteList").appendChild(n);
      }, this.setTextContent_selectedCounty = (e = {}) => {
        const t = document.getElementById("selectedCounty"),
              n = document.getElementById("current_county"),
              o = document.getElementById("updateTime");
        t.classList.remove("opacity-0"), n.textContent = e.County, o.textContent = e.PublishTime;
      }, this.setTextContent_selectedCountySite = (t = {}) => {
        document.querySelector("#selectedCountySite").classList.remove("opacity-0");
        const n = document.querySelector("#selectedCountySite .countyWrap__county"),
              o = document.querySelector("#selectedCountySite .countyWrap__value"),
              s = document.querySelector("#value_O3"),
              c = document.querySelector("#value_PM10"),
              r = document.querySelector("#value_PM25"),
              l = document.querySelector("#value_CO"),
              u = document.querySelector("#value_SO2"),
              a = document.querySelector("#value_NO2");
        [n.textContent, o.textContent, s.textContent, c.textContent, r.textContent, l.textContent, u.textContent, a.textContent] = [t.SiteName, t.AQI || "-", t.O3 || "-", t.PM10 || "-", t["PM2.5"] || "-", t.CO || "-", t.SO2 || "-", t.NO2 || "-"], o.classList.forEach(e => {
          "countyWrap__value" !== e && o.classList.remove(e);
        }), t.AQI && o.classList.add(e.get_BgClass(t.AQI));
      }, this.get_BgClass = e => {
        const t = [{
          class: "bg-level-1",
          range: [0, 50]
        }, {
          class: "bg-level-2",
          range: [51, 100]
        }, {
          class: "bg-level-3",
          range: [101, 150]
        }, {
          class: "bg-level-4",
          range: [151, 200]
        }, {
          class: "bg-level-5",
          range: [201, 300]
        }, {
          class: "bg-level-6",
          range: [301, 400]
        }].find(t => t.range[0] < e && t.range[1] > e);
        return void 0 === t ? "" : t.class;
      };
    }().init();
  }
});