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
                console.log(_this.state.recipient, "This is recipient");

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;

                console.log(accounts, "ACCOUNT");
                _context.next = 12;
                return campaign.methods.createRequest(description, value, recipient).send({ from: accounts[0] });

              case 12:

                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 18:

                _this.setState({ loading: false });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 15]]);
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
          lineNumber: 58
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Create a Request"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
          lineNumber: 76
        }
      }), this.state.convert.length > 1 ? _react2.default.createElement(_semanticUiReact.Label, { icon: "ethereum", color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "exchange", __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), " ", this.state.convert, " ethers") : null), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Address of the Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: "black", loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Create!"), _react2.default.createElement(_semanticUiReact.Button, { color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement("a", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiVGV4dEFyZWEiLCJMYWJlbCIsIkljb24iLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiUmVxdWVzdE5ldyIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJjb252ZXJ0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJtaW5IZWlnaHQiLCJ0YXJnZXQiLCJ1dGlscyIsImZyb21XZWkiLCJsZW5ndGgiLCJjb2xvciIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjthQUFRLEFBQ0MsQUFDUDttQkFGTSxBQUVPLEFBQ2I7aUJBSE0sQUFHSyxBQUNYO2VBSk0sQUFJRyxBQUNUO29CQUxNLEFBS1EsQUFDZDtlLEFBTk0sQUFNRztBQU5ILEFBQ04sYSxBQWNGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtrRUFBQTs7c0VBQUE7b0JBQUE7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