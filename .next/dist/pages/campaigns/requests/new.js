"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\pages\\campaigns\\requests\\new.js?entry";


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "",
      description: "",
      recipient: "",
      loading: false,
      errorMessage: "",
      convert: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;

                console.log(accounts, "ACCOUNT");
                _context.next = 11;
                return campaign.methods.createRequest(description, value, recipient).send({ from: accounts[0] });

              case 11:

                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:

                _this.setState({ loading: false });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("h2", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Create a Request"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("label", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.TextArea, {
        placeholder: "Tell us more",
        style: { minHeight: 200 },
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("label", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Value in Wei"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        icon: "ethereum",
        iconPosition: "left",
        label: "wei",
        labelPosition: "right",
        size: "huge",
        onChange: function onChange(event) {
          return _this3.setState({
            convert: _web2.default.utils.fromWei(event.target.value, "ether"),
            value: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), this.state.convert.length > 1 ? _react2.default.createElement(_semanticUiReact.Label, { icon: "ethereum", color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "exchange", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), " ", this.state.convert, " ethers") : null), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement("label", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Address of the Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Create!"), _react2.default.createElement(_semanticUiReact.Button, { color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement("a", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Cancel! ")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt("return", { address: address });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiVGV4dEFyZWEiLCJMYWJlbCIsIkljb24iLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiUmVxdWVzdE5ldyIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJjb252ZXJ0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJjb2xvciIsIm1pbkhlaWdodCIsInRhcmdldCIsInV0aWxzIiwiZnJvbVdlaSIsImxlbmd0aCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjthQUFRLEFBQ0MsQUFDUDttQkFGTSxBQUVPLEFBQ2I7aUJBSE0sQUFHSyxBQUNYO2VBSk0sQUFJRyxBQUNUO29CQUxNLEFBS1EsQUFDZDtlLEFBTk0sQUFNRztBQU5ILEFBQ04sYSxBQWNGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtrRUFBQTs7c0VBQUE7b0JBQUE7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