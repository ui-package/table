"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortManagerInterface = function () {
  function SortManagerInterface() {
    _classCallCheck(this, SortManagerInterface);
  }

  _createClass(SortManagerInterface, [{
    key: "getSortedEntities",
    value: function getSortedEntities(entities) {}
  }, {
    key: "by",
    value: function by(field) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    }
  }]);

  return SortManagerInterface;
}();

exports.default = SortManagerInterface;