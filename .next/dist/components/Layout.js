"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _HeadElement = require("./HeadElement");

var _HeadElement2 = _interopRequireDefault(_HeadElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/harshparmar/MyProj/BlockFunds/components/Layout.js";

//
exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_HeadElement2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children, _react2.default.createElement("div", {
    className: "footer",
    style: { position: "fixed", bottom: "15px", width: "inherit" },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiRm9vdGVyIiwiSGVhZEVsZW1lbnQiLCJwcm9wcyIsImNoaWxkcmVuIiwicG9zaXRpb24iLCJib3R0b20iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7Ozs7OztBQUN4QixBQUNBO2tCQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFGRixBQUVFLEFBQ0M7QUFERDtBQUFBLFlBRkYsQUFHUyxBQUNQLDBCQUFBLGNBQUE7ZUFBQSxBQUNZLEFBQ1Y7V0FBTyxFQUFFLFVBQUYsQUFBWSxTQUFTLFFBQXJCLEFBQTZCLFFBQVEsT0FGOUMsQUFFUyxBQUE0Qzs7Z0JBRnJEO2tCQUFBLEFBSUU7QUFKRjtBQUNFLHFCQUdBLEFBQUM7O2dCQUFEO2tCQVROLEFBQ0UsQUFJRSxBQUlFLEFBSVA7QUFKTztBQUFBO0FBVlIiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYXJzaHBhcm1hci9NeVByb2ovQmxvY2tGdW5kcyJ9