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
          header: "Campaign name",
          meta: "Campaign address: " + (address.slice(0, 10) + "..." + address.slice(-5)),
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, icon: "eye", color: "red", content: "View Campaign", fluid: "true", __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          })),
          extra: _react2.default.createElement(_semanticUiReact.Button, { color: "black", fluid: "true", __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, _react2.default.createElement("a", {
            style: { color: "white" },
            target: "_blank",
            href: "https://etherscan.io/address/" + address,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sort amount up", __source: {
              fileName: _jsxFileName,
              lineNumber: 73
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
          lineNumber: 85
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        inverted: true,
        icon: "add circle",
        content: "Create a new Campaign",
        floated: "right",
        size: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), _react2.default.createElement("h2", { style: { color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Open Campaigns"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), !this.props.campaigns.length ? _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: "big",
        name: "braille",
        style: { marginRight: "40px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), "Opps! No open Campaigns to show. You may Create One!")) : _react2.default.createElement(_semanticUiReact.Grid, { columns: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsIkljb24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsImFyciIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaXRlbSIsImxpbmsiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJvdmVyZmxvdyIsImdldFJhbmRvbUl0ZW0iLCJzbGljZSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQVEsQUFBTSxBQUFNOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7QUFDckI7O0ksQUFDTTs7Ozs7Ozs7Ozs7b0NBS1ksQUFDZDtVQUFNLE1BQU0sQ0FBQSxBQUNWLFlBRFUsQUFFVixRQUZVLEFBR1YsUUFIVSxBQUlWLFdBSlUsQUFLVixjQUxVLEFBTVYsbUJBTlUsQUFPViwyQkFQVSxBQVFWLGNBUlUsQUFTVixvQ0FUVSxBQVVWLG1CQVZVLEFBV1YseUJBWFUsQUFZVix1QkFaVSxBQWFWLHlCQWJVLEFBY1YsaUJBZFUsQUFlVixzQkFmVSxBQWdCVixtREFoQlUsQUFpQlYsYUFqQlUsQUFrQlYsc0JBbEJVLEFBbUJWLDRCQW5CVSxBQW9CVixVQXBCVSxBQXFCVixjQXJCVSxBQXNCVixXQXRCVSxBQXVCVixxQkF2QlUsQUF3QlYsNkJBeEJVLEFBeUJWLG1CQXpCVSxBQTBCViwrQkExQlUsQUEyQlYsMEJBM0JGLEFBQVksQUE0QlYsQUFFRjtVQUFNLGNBQWMsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQVcsSUFBL0MsQUFBb0IsQUFBK0IsQUFDbkQ7VUFBTSxPQUFPLElBQWIsQUFBYSxBQUFJLEFBQ2pCO1VBQU0sd0RBQU4sQUFBNEQsQUFDNUQ7YUFBQSxBQUFPLEFBQ1I7Ozs7c0NBQ2lCO21CQUNoQjs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQzNDOytCQUNHLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxBQUFDO2lCQUNRLEVBQUUsVUFEWCxBQUNTLEFBQVksQUFDbkI7a0JBRkYsQUFFUyxBQUNQO2lCQUhGLEFBR1EsQUFDTjtpQkFBTyxPQUpULEFBSVMsQUFBSyxBQUNaO2tCQUxGLEFBS1MsQUFDUDt3Q0FDRSxRQUFBLEFBQVEsTUFBUixBQUFjLEdBQWQsQUFBaUIsTUFBakIsQUFBdUIsUUFBUSxRQUFBLEFBQVEsTUFBTSxDQVBqRCxBQU1FLEFBQ2lDLEFBQWUsQUFFaEQ7dUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE1BQWpCLEFBQXNCLE9BQU0sT0FBNUIsQUFBa0MsT0FBTSxTQUF4QyxBQUFnRCxpQkFBZ0IsT0FBaEUsQUFBc0U7d0JBQXRFOzBCQVhOLEFBVUksQUFDRSxBQUdKO0FBSEk7O2lDQUlGLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsQUFBNEI7d0JBQTVCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7bUJBQ1MsRUFBRSxPQURYLEFBQ1MsQUFBUyxBQUNoQjtvQkFGRixBQUVTLEFBQ1A7b0RBSEYsQUFHd0M7O3dCQUh4QzswQkFBQSxBQUtFO0FBTEY7QUFDRSw2QkFJQSxBQUFDLHVDQUFLLE1BQU4sQUFBVzt3QkFBWDswQkFMRixBQUtFO0FBQUE7Y0FyQlIsQUFlSSxBQUNFOztzQkFoQk47d0JBRkosQUFDRSxBQUNFLEFBNkJMO0FBN0JLO0FBQ0U7QUFKUixBQUFPLEFBaUNSLE9BakNROzs7OzZCQWtDQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsa0JBRUUsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7a0JBQUQsQUFFRTtjQUZGLEFBRU8sQUFDTDtpQkFIRixBQUdVLEFBQ1I7aUJBSkYsQUFJVSxBQUNSO2NBTEYsQUFLTzs7b0JBTFA7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFTSjtBQVRJO0FBQ0UsNEJBUU4sY0FBQSxRQUFJLE9BQU8sRUFBQyxPQUFaLEFBQVcsQUFBTztvQkFBbEI7c0JBQUE7QUFBQTtTQVpGLEFBWUUsQUFDQTs7b0JBQUE7c0JBYkYsQUFhRSxBQUNDO0FBREQ7QUFBQSxXQUNFLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBWixBQUFzQix5QkFDckIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO2VBQU8sRUFBRSxhQUhYLEFBR1MsQUFBZTs7b0JBSHhCO3NCQURGLEFBQ0U7QUFBQTtBQUNFLFVBSlAsQUFDQyxBQUNFLDJFQVVGLEFBQUMsdUNBQUssU0FBTixBQUFlO29CQUFmO3NCQUFBLEFBQW1CO0FBQW5CO09BQUEsT0E3QlIsQUFDRSxBQUVFLEFBMEJJLEFBQW1CLEFBQUssQUFLakM7Ozs7Ozs7Ozs7Ozt1QkE3R3lCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7bUJBQXpEO0E7aURBQ0MsRUFBRSxXLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErR1gsQSxBQWxINEI7O2tCQWtINUIsQUFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC9XYWxsSXQifQ==