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

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/harshparmar/MyProj/BlockFunds/components/HeadElement.js";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZEVsZW1lbnQuanMiXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwibGFzdEtub3duU2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNjcm9sbFkiLCJkaXNwbGF5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7O3dDQUNnQixBQUNsQjtlQUFBLEFBQVMsY0FBVCxBQUF1QixRQUF2QixBQUErQixNQUEvQixBQUFxQyxhQUFyQyxBQUNFLEFBQ0Y7VUFBSSwwQkFBSixBQUE4QixBQUM5QjthQUFBLEFBQU8saUJBQVAsQUFBd0IsVUFBVSxZQUFNLEFBQ3RDO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7a0NBQTBCLE9BQTFCLEFBQWlDLEFBQ2pDO1lBQUksMEJBQUosQUFBOEIsSUFBSSxBQUNoQzttQkFBQSxBQUFTLGNBQVQsQUFBdUIsV0FBdkIsQUFBa0MsTUFBbEMsQUFBd0MsVUFBeEMsQUFBa0QsQUFDbkQ7QUFGRCxlQUVPLEFBQ0w7bUJBQUEsQUFBUyxjQUFULEFBQXVCLFdBQXZCLEFBQWtDLE1BQWxDLEFBQXdDLFVBQXhDLEFBQWtELEFBQ25EO0FBQ0Y7QUFSRCxBQVNEOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFFSTtBQUZKO0FBQUEsT0FBQTtlQUVJLEFBRUU7YUFGRixBQUVNLEFBQ0o7Y0FIRixBQUdPOztvQkFIUDtzQkFITixBQUNFLEFBRUksQUFRUDtBQVJPO0FBQ0U7Ozs7O0VBckJjLGdCLEFBQU0sQUErQmhDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRFbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYXJzaHBhcm1hci9NeVByb2ovQmxvY2tGdW5kcyJ9