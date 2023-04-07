"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("./../../../routes");

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\pages\\campaigns\\requests\\index.js?entry";


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement("h2", {
        style: { color: "white" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Requests on campaign " + this.props.address), _react2.default.createElement("h3", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Manager: " + this.props.manager), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        inverted: true,
        icon: "plus circle",
        floated: "right",
        style: { marginBottom: 10 },
        content: "Add new request",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))), _react2.default.createElement(_semanticUiReact.Label, { pointing: "right", as: "a", color: "red", tag: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Note: You can only add request if you are the manager of this campaign."), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Amount (in Wei)"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Approval Count"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.renderRows())), this.props.requestCount === "0" ? _react2.default.createElement("h1", { style: { marginTop: "55px", color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { size: "big", name: "braille", style: { marginRight: "25px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), "\"No request found on this campaign by the manager.\"") : null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, summary, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return campaign.methods.getSummary().call();

              case 10:
                summary = _context.sent;
                _context.next = 13;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 13:
                requests = _context.sent;
                return _context.abrupt("return", (0, _defineProperty3.default)({
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  campaignTitle: summary[5],
                  campaignDescription: summary[6],
                  address: props.query.address,
                  requests: requests,
                  requestCount: requestCount
                }, "approversCount", approversCount));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJJY29uIiwiTGFiZWwiLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsImNvbG9yIiwibWFuYWdlciIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImNhbXBhaWduVGl0bGUiLCJjYW1wYWlnbkRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBQ0Y7Ozs7Ozs7Ozs7O2lDQTZCTjttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNqRDsrQkFDRSxBQUFDO2VBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTSxBQUNKO21C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LEFBQVMsUUFBVCxBQUFpQixtQixBQUFqQixBQUFvQzs7bUJBQXpEO0E7O3VCQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7bUJBQXpEO0E7O3VCQUNnQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QTs7eUNBQ2lCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0EsQUFMa0IsQUFDckIsaUJBQUEsQ0FEcUI7O21CQUFqQjtBOzt1Q0FRaUIsUSxBQUFBLEFBQVEsQUFDN0I7MkJBQVMsUSxBQUFBLEFBQVEsQUFDakI7aUNBQWUsUSxBQUFBLEFBQVEsQUFDdkI7a0NBQWdCLFFBQ2hCLEEsQUFEZ0IsQUFBUTsyQkFDZixRQUNULEEsQUFEUyxBQUFRO2lDQUNGLFEsQUFBQSxBQUFRLEFBQ3ZCO3VDQUFxQixRLEFBQUEsQUFBUSxBQUM3QjsyQkFBUyxNQUFBLEFBQU0sTUFDZixBLEFBRHFCOzRCQUVyQixBOztBQVRBLHFDLEFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQXpCb0M7O2tCLEFBQXJCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC9XYWxsSXQifQ==