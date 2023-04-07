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

var _factory = require("./../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("./../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\pages\\index.js?entry";

// import PizzaLoading from "../utils/PizzaLoading";

var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "getRandomItem",
    value: function getRandomItem() {
      var arr = ["ethereum", "tech", "web3", "bitcoin", "blockchain", "smart contracts", "Artificial intelligence", "Biometrics", "Cloud computing & virtualization", "Complex systems", "Computational science", "Conformance testing", "Cyberphysical systems", "Cybersecurity", "Data & informatics", "Federal information processing standards (FIPS)", "Health IT", "Internet of Things", "Interoperability testing", "Mobile", "Networking", "Privacy", "Software research", "Usability & human factors", "Video analytics", "Virtual / augmented reality", "Visualization research", "Voting systems"];
      var randomIndex = Math.floor(Math.random() * arr.length);
      var item = arr[randomIndex];
      var link = "https://source.unsplash.com/random/290x190/?" + item;
      return link;
    }
  }, {
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _this2 = this;

      return this.props.campaigns.map(function (address) {
        return _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement(_semanticUiReact.Card, {
          style: { overflow: "hidden" },
          raised: "true",
          fluid: "true",
          image: _this2.getRandomItem(),
          header: "Campaign address: " + (address.slice(0, 10) + "..." + address.slice(-5)),
          meta: "Check this campaign out.",
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, _react2.default.createElement(_semanticUiReact.Button, {
            inverted: true,
            icon: "eye",
            color: "red",
            content: "View Campaign",
            fluid: "true",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          })),
          extra: _react2.default.createElement(_semanticUiReact.Button, { color: "black", fluid: "true", __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }, _react2.default.createElement("a", {
            style: { color: "white" },
            target: "_blank",
            href: "https://etherscan.io/address/" + address,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sort amount up", __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }), "Check this address on Etherscan")),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        inverted: true,
        icon: "add circle",
        content: "Create a new Campaign",
        floated: "right",
        size: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), _react2.default.createElement("h2", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Open Campaigns"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), !this.props.campaigns.length ? _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement("h1", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: "big",
        name: "braille",
        style: { marginRight: "40px", color: "white" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), "Opps! No open Campaigns to show. You may Create One!")) : _react2.default.createElement(_semanticUiReact.Grid, { columns: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, this.renderCampaigns())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;

// "next": "^4.1.4",

// "dependencies": {
//   "css-loader": "^6.7.3",
//   "file-loader": "^6.2.0",
//   "fs-extra": "^11.1.1",
//   "ganache-cli": "^6.12.2",
//   "mocha": "^10.2.0",
//   "next": "^4.1.4",
//   "next-routes": "^1.4.2",
//   "react-dom": "^16.14.0",
//   "semantic-ui-css": "^2.5.0",
//   "semantic-ui-react": "^2.1.4",
//   "solc": "^0.4.26",
//   "style-loader": "^3.3.2",
//   "truffle-hdwallet-provider": "^1.0.17",
//   "url-loader": "^4.1.1",
//   "web3": "^1.9.0"
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsIkljb24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsImFyciIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaXRlbSIsImxpbmsiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJvdmVyZmxvdyIsImdldFJhbmRvbUl0ZW0iLCJzbGljZSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQVEsQUFBTSxBQUFNOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7QUFDckI7O0ksQUFDTTs7Ozs7Ozs7Ozs7b0NBS1ksQUFDZDtVQUFNLE1BQU0sQ0FBQSxBQUNWLFlBRFUsQUFFVixRQUZVLEFBR1YsUUFIVSxBQUlWLFdBSlUsQUFLVixjQUxVLEFBTVYsbUJBTlUsQUFPViwyQkFQVSxBQVFWLGNBUlUsQUFTVixvQ0FUVSxBQVVWLG1CQVZVLEFBV1YseUJBWFUsQUFZVix1QkFaVSxBQWFWLHlCQWJVLEFBY1YsaUJBZFUsQUFlVixzQkFmVSxBQWdCVixtREFoQlUsQUFpQlYsYUFqQlUsQUFrQlYsc0JBbEJVLEFBbUJWLDRCQW5CVSxBQW9CVixVQXBCVSxBQXFCVixjQXJCVSxBQXNCVixXQXRCVSxBQXVCVixxQkF2QlUsQUF3QlYsNkJBeEJVLEFBeUJWLG1CQXpCVSxBQTBCViwrQkExQlUsQUEyQlYsMEJBM0JGLEFBQVksQUE0QlYsQUFFRjtVQUFNLGNBQWMsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQVcsSUFBL0MsQUFBb0IsQUFBK0IsQUFDbkQ7VUFBTSxPQUFPLElBQWIsQUFBYSxBQUFJLEFBQ2pCO1VBQU0sd0RBQU4sQUFBNEQsQUFDNUQ7YUFBQSxBQUFPLEFBQ1I7Ozs7c0NBQ2lCO21CQUNoQjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQzNDOytCQUNHLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxBQUFDO2lCQUNRLEVBQUUsVUFEWCxBQUNTLEFBQVksQUFDbkI7a0JBRkYsQUFFUyxBQUNQO2lCQUhGLEFBR1EsQUFDTjtpQkFBTyxPQUpULEFBSVMsQUFBSyxBQUNaOzBDQUNFLFFBQUEsQUFBUSxNQUFSLEFBQWMsR0FBZCxBQUFpQixNQUFqQixBQUF1QixRQUFRLFFBQUEsQUFBUSxNQUFNLENBTmpELEFBS0UsQUFDaUMsQUFBZSxBQUVoRDtnQkFSRixBQVFRLEFBQ047dUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsQUFBQztzQkFBRCxBQUVFO2tCQUZGLEFBRU8sQUFDTDttQkFIRixBQUdRLEFBQ047cUJBSkYsQUFJVSxBQUNSO21CQUxGLEFBS1E7O3dCQUxSOzBCQVhOLEFBVUksQUFDRSxBQVNKO0FBVEk7QUFDRTtpQ0FTSixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLEFBQTRCO3dCQUE1QjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBO21CQUNTLEVBQUUsT0FEWCxBQUNTLEFBQVMsQUFDaEI7b0JBRkYsQUFFUyxBQUNQO29EQUhGLEFBR3dDOzt3QkFIeEM7MEJBQUEsQUFLRTtBQUxGO0FBQ0UsNkJBSUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7d0JBQVg7MEJBTEYsQUFLRTtBQUFBO2NBM0JSLEFBcUJJLEFBQ0U7O3NCQXRCTjt3QkFGSixBQUNFLEFBQ0UsQUFtQ0w7QUFuQ0s7QUFDRTtBQUpSLEFBQU8sQUF1Q1IsT0F2Q1E7Ozs7NkJBd0NBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFFRTtBQUZGO0FBQUEsT0FBQSxrQkFFRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztrQkFBRCxBQUVFO2NBRkYsQUFFTyxBQUNMO2lCQUhGLEFBR1UsQUFDUjtpQkFKRixBQUlVLEFBQ1I7Y0FMRixBQUtPOztvQkFMUDtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQVNKO0FBVEk7QUFDRSw0QkFRTixjQUFBLFFBQUksT0FBTyxFQUFFLE9BQWIsQUFBVyxBQUFTO29CQUFwQjtzQkFBQTtBQUFBO1NBWkYsQUFZRSxBQUNBOztvQkFBQTtzQkFiRixBQWFFLEFBQ0M7QUFERDtBQUFBLFdBQ0UsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFaLEFBQXNCLHlCQUNyQixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsUUFBSSxPQUFPLEVBQUUsT0FBYixBQUFXLEFBQVM7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO2VBQU8sRUFBRSxhQUFGLEFBQWUsUUFBUSxPQUhoQyxBQUdTLEFBQThCOztvQkFIdkM7c0JBREYsQUFDRTtBQUFBO0FBQ0UsVUFKUCxBQUNDLEFBQ0UsMkVBVUYsQUFBQyx1Q0FBSyxTQUFOLEFBQWU7b0JBQWY7c0JBQUEsQUFBbUI7QUFBbkI7T0FBQSxPQTdCUixBQUNFLEFBRUUsQUEwQkksQUFBbUIsQUFBSyxBQUtqQzs7Ozs7Ozs7Ozs7O3VCQW5IeUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOzttQkFBekQ7QTtpREFDQyxFQUFFLFcsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFIWCxBLEFBeEg0Qjs7a0JBd0g1QixBQUFlOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL1dhbGxJdCJ9