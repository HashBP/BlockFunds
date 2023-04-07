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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("./../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\pages\\campaigns\\new.js?entry";


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: "",
      title: "",
      aboutCampaign: "",
      errorMessage: "",
      loading: false,
      convert: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this.state.aboutCampaign.length > 1)) {
                  _context.next = 3;
                  break;
                }

                _this.setState({
                  errorMessage: "The description field can not be empty."
                });
                return _context.abrupt("return");

              case 3:
                if (!_this.state.title.length > 1) {
                  _this.setState({ errorMessage: "Title field must be filled." });
                }
                e.preventDefault();
                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 6;
                _context.next = 9;
                return _web2.default.eth.getAccounts();

              case 9:
                accounts = _context.sent;
                _context.next = 12;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.title, _this.state.aboutCampaign).send({
                  from: accounts[0]
                });

              case 12:
                _routes.Router.pushRoute("/");
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](6);

                console.log(_context.t0);
                _this.setState({ errorMessage: _context.t0.message });

              case 19:
                _this.setState({ loading: false });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[6, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("h1", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Create a Campaign"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        error: !!this.state.errorMessage,
        onSubmit: this.onSubmit,
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        size: "big",
        icon: "ethereum",
        placeholder: "Minimum Contribution for your Campaign",
        iconPosition: "left",
        label: "wei",
        labelPosition: "right",
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          _this3.setState({
            convert: _web2.default.utils.fromWei(event.target.value, "ether")
          });
          _this3.setState({ minimumContribution: event.target.value });
          if (_this3.state.minimumContribution.length <= 1) {
            _this3.setState({ errorMessage: "" });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), this.state.convert.length > 1 ? _react2.default.createElement(_semanticUiReact.Label, { icon: "ethereum", color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "exchange", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), " ", this.state.convert, " ethers") : null, _react2.default.createElement(_semanticUiReact.Input, {
        style: { marginTop: "10px" },
        size: "large",
        placeholder: "Title",
        value: this.state.title,
        onChange: function onChange(event) {
          _this3.setState({ title: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.TextArea, {
        placeholder: "Describe your campaign",
        icon: "closed captioning outline",
        value: this.state.aboutCampaign,
        style: { minHeight: 300, marginTop: "25px" },
        onChange: function onChange(event) {
          _this3.setState({ aboutCampaign: event.target.value });
          console.log(_this3.state.aboutCampaign.length);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, loading: this.state.loading, fluid: "true", __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Create")));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJY29uIiwiSW5wdXQiLCJMYWJlbCIsIk1lc3NhZ2UiLCJUZXh0QXJlYSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJ0aXRsZSIsImFib3V0Q2FtcGFpZ24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiY29udmVydCIsIm9uU3VibWl0IiwiZSIsImxlbmd0aCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImNvbG9yIiwiZXZlbnQiLCJ1dGlscyIsImZyb21XZWkiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBQ0Y7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNuQjsyQkFBUSxBQUNlLEFBQ3JCO2FBRk0sQUFFQyxBQUNQO3FCQUhNLEFBR1MsQUFDZjtvQkFKTSxBQUlRLEFBQ2Q7ZUFMTSxBQUtHLEFBQ1Q7ZSxBQU5NLEFBTUc7QUFOSCxBQUNOLGEsQUFPRjsyRkFBVyxpQkFBQSxBQUFPLEdBQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTtzQkFDTCxDQUFD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QUEsQUFBQztlQUNRLEVBQUUsV0FEWCxBQUNTLEFBQWEsQUFDcEI7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDbEI7a0JBQVUsa0JBQUEsQUFBQyxPQUFVLEFBQ25CO2lCQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQTdCLEFBQWMsQUFBc0IsQUFDckM7QUFQSDs7b0JBQUE7c0JBeEJGLEFBd0JFLEFBU0E7QUFUQTtBQUNFLDBCQVFGLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2NBRkYsQUFFUSxBQUNOO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7ZUFBTyxFQUFFLFdBQUYsQUFBYSxLQUFLLFdBSjNCLEFBSVMsQUFBNkIsQUFDcEM7a0JBQVUsa0JBQUEsQUFBQyxPQUFVLEFBQ25CO2lCQUFBLEFBQUssU0FBUyxFQUFFLGVBQWUsTUFBQSxBQUFNLE9BQXJDLEFBQWMsQUFBOEIsQUFDNUM7a0JBQUEsQUFBUSxJQUFJLE9BQUEsQUFBSyxNQUFMLEFBQVcsY0FBdkIsQUFBcUMsQUFDdEM7QUFSSDs7b0JBQUE7c0JBdkNOLEFBS0UsQUFpQ0UsQUFDRSxBQVlKO0FBWkk7QUFDRSw0QkFXTixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQW5ERixBQW1ERSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLFNBQVMsS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFNBQVMsT0FBOUMsQUFBb0Q7b0JBQXBEO3NCQUFBO0FBQUE7U0F4RE4sQUFDRSxBQUdFLEFBb0RFLEFBTVA7Ozs7O0EsQUF0R3NDOztrQixBQUFwQiIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL1dhbGxJdCJ9