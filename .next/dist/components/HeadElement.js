"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\components\\HeadElement.js";


var HeadElement = function (_React$Component) {
  (0, _inherits3.default)(HeadElement, _React$Component);

  function HeadElement() {
    (0, _classCallCheck3.default)(this, HeadElement);

    return (0, _possibleConstructorReturn3.default)(this, (HeadElement.__proto__ || (0, _getPrototypeOf2.default)(HeadElement)).apply(this, arguments));
  }

  (0, _createClass3.default)(HeadElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector("body").style.background = "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 50)51.2%, rgb(0, 0, 0) 98.6%)";
      var lastKnownScrollPosition = 0;
      window.addEventListener("scroll", function () {
        console.log(lastKnownScrollPosition);
        lastKnownScrollPosition = window.scrollY;
        if (lastKnownScrollPosition > 20) {
          document.querySelector(".footer").style.display = "none";
        } else {
          document.querySelector(".footer").style.display = "block";
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("link", {
        async: true,
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    }
  }]);

  return HeadElement;
}(_react2.default.Component);

exports.default = HeadElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRFbGVtZW50LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiYmFja2dyb3VuZCIsImxhc3RLbm93blNjcm9sbFBvc2l0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxZIiwiZGlzcGxheSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozt3Q0FDZ0IsQUFDbEI7ZUFBQSxBQUFTLGNBQVQsQUFBdUIsUUFBdkIsQUFBK0IsTUFBL0IsQUFBcUMsYUFBckMsQUFDRSxBQUNGO1VBQUksMEJBQUosQUFBOEIsQUFDOUI7YUFBQSxBQUFPLGlCQUFQLEFBQXdCLFVBQVUsWUFBTSxBQUN0QztnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2tDQUEwQixPQUExQixBQUFpQyxBQUNqQztZQUFJLDBCQUFKLEFBQThCLElBQUksQUFDaEM7bUJBQUEsQUFBUyxjQUFULEFBQXVCLFdBQXZCLEFBQWtDLE1BQWxDLEFBQXdDLFVBQXhDLEFBQWtELEFBQ25EO0FBRkQsZUFFTyxBQUNMO21CQUFBLEFBQVMsY0FBVCxBQUF1QixXQUF2QixBQUFrQyxNQUFsQyxBQUF3QyxVQUF4QyxBQUFrRCxBQUNuRDtBQUNGO0FBUkQsQUFTRDs7Ozs2QkFFUSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBRUk7QUFGSjtBQUFBLE9BQUE7ZUFFSSxBQUVFO2FBRkYsQUFFTSxBQUNKO2NBSEYsQUFHTzs7b0JBSFA7c0JBSE4sQUFDRSxBQUVJLEFBUVA7QUFSTztBQUNFOzs7OztFQXJCYyxnQixBQUFNLEFBK0JoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91c2VyL0Rlc2t0b3AvV2FsbEl0In0=