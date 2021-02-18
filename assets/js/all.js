"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dropdown = new Dropdown();

window.onload = function () {
  dropdown.init();
};

function Dropdown() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.el_dropdowns = document.querySelectorAll('.dropdown');
  this.el_dropdownsList = document.querySelectorAll('.dropdown-list');

  this.init = function () {
    this.dropdowns();
  };

  this.dropdowns = function () {
    if (this.el_dropdowns.length <= 0 || this.el_dropdownsList <= 0) return;
    this.el_dropdowns.forEach(function (el_dropdown) {
      el_dropdown.addEventListener('click', function (e) {
        ;

        _toConsumableArray(this.children).find(function (child) {
          return child.classList.contains('dropdown-list');
        }).classList.toggle('block');
      });
    });
  };
}
//# sourceMappingURL=all.js.map
