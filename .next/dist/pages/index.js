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

var _jsxFileName = "/Users/harshparmar/MyProj/BlockFunds/pages/index.js?entry";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkJ1dHRvbiIsIkNhcmQiLCJHcmlkIiwiSWNvbiIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbkluZGV4IiwiYXJyIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpdGVtIiwibGluayIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiYWRkcmVzcyIsIm92ZXJmbG93IiwiZ2V0UmFuZG9tSXRlbSIsInNsaWNlIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBUSxBQUFNLEFBQU07O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7OztBQUNyQjs7SSxBQUNNOzs7Ozs7Ozs7OztvQ0FLWSxBQUNkO1VBQU0sTUFBTSxDQUFBLEFBQ1YsWUFEVSxBQUVWLFFBRlUsQUFHVixRQUhVLEFBSVYsV0FKVSxBQUtWLGNBTFUsQUFNVixtQkFOVSxBQU9WLDJCQVBVLEFBUVYsY0FSVSxBQVNWLG9DQVRVLEFBVVYsbUJBVlUsQUFXVix5QkFYVSxBQVlWLHVCQVpVLEFBYVYseUJBYlUsQUFjVixpQkFkVSxBQWVWLHNCQWZVLEFBZ0JWLG1EQWhCVSxBQWlCVixhQWpCVSxBQWtCVixzQkFsQlUsQUFtQlYsNEJBbkJVLEFBb0JWLFVBcEJVLEFBcUJWLGNBckJVLEFBc0JWLFdBdEJVLEFBdUJWLHFCQXZCVSxBQXdCViw2QkF4QlUsQUF5QlYsbUJBekJVLEFBMEJWLCtCQTFCVSxBQTJCViwwQkEzQkYsQUFBWSxBQTRCVixBQUVGO1VBQU0sY0FBYyxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBVyxJQUEvQyxBQUFvQixBQUErQixBQUNuRDtVQUFNLE9BQU8sSUFBYixBQUFhLEFBQUksQUFDakI7VUFBTSx3REFBTixBQUE0RCxBQUM1RDthQUFBLEFBQU8sQUFDUjs7OztzQ0FDaUI7bUJBQ2hCOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFNBQVksQUFDM0M7K0JBQ0csY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLEFBQUM7aUJBQ1EsRUFBRSxVQURYLEFBQ1MsQUFBWSxBQUNuQjtrQkFGRixBQUVTLEFBQ1A7aUJBSEYsQUFHUSxBQUNOO2lCQUFPLE9BSlQsQUFJUyxBQUFLLEFBQ1o7MENBQ0UsUUFBQSxBQUFRLE1BQVIsQUFBYyxHQUFkLEFBQWlCLE1BQWpCLEFBQXVCLFFBQVEsUUFBQSxBQUFRLE1BQU0sQ0FOakQsQUFLRSxBQUNpQyxBQUFlLEFBRWhEO2dCQVJGLEFBUVEsQUFDTjt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxBQUFDO3NCQUFELEFBRUU7a0JBRkYsQUFFTyxBQUNMO21CQUhGLEFBR1EsQUFDTjtxQkFKRixBQUlVLEFBQ1I7bUJBTEYsQUFLUTs7d0JBTFI7MEJBWE4sQUFVSSxBQUNFLEFBU0o7QUFUSTtBQUNFO2lDQVNKLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsQUFBNEI7d0JBQTVCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7bUJBQ1MsRUFBRSxPQURYLEFBQ1MsQUFBUyxBQUNoQjtvQkFGRixBQUVTLEFBQ1A7b0RBSEYsQUFHd0M7O3dCQUh4QzswQkFBQSxBQUtFO0FBTEY7QUFDRSw2QkFJQSxBQUFDLHVDQUFLLE1BQU4sQUFBVzt3QkFBWDswQkFMRixBQUtFO0FBQUE7Y0EzQlIsQUFxQkksQUFDRTs7c0JBdEJOO3dCQUZKLEFBQ0UsQUFDRSxBQW1DTDtBQW5DSztBQUNFO0FBSlIsQUFBTyxBQXVDUixPQXZDUTs7Ozs2QkF3Q0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUVFO0FBRkY7QUFBQSxPQUFBLGtCQUVFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2tCQUFELEFBRUU7Y0FGRixBQUVPLEFBQ0w7aUJBSEYsQUFHVSxBQUNSO2lCQUpGLEFBSVUsQUFDUjtjQUxGLEFBS087O29CQUxQO3NCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBU0o7QUFUSTtBQUNFLDRCQVFOLGNBQUEsUUFBSSxPQUFPLEVBQUUsT0FBYixBQUFXLEFBQVM7b0JBQXBCO3NCQUFBO0FBQUE7U0FaRixBQVlFLEFBQ0E7O29CQUFBO3NCQWJGLEFBYUUsQUFDQztBQUREO0FBQUEsV0FDRSxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVosQUFBc0IseUJBQ3JCLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBRSxPQUFiLEFBQVcsQUFBUztvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7ZUFBTyxFQUFFLGFBQUYsQUFBZSxRQUFRLE9BSGhDLEFBR1MsQUFBOEI7O29CQUh2QztzQkFERixBQUNFO0FBQUE7QUFDRSxVQUpQLEFBQ0MsQUFDRSwyRUFVRixBQUFDLHVDQUFLLFNBQU4sQUFBZTtvQkFBZjtzQkFBQSxBQUFtQjtBQUFuQjtPQUFBLE9BN0JSLEFBQ0UsQUFFRSxBQTBCSSxBQUFtQixBQUFLLEFBS2pDOzs7Ozs7Ozs7Ozs7dUJBbkh5QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O21CQUF6RDtBO2lEQUNDLEVBQUUsVyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUhYLEEsQUF4SDRCOztrQkF3SDVCLEFBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFyc2hwYXJtYXIvTXlQcm9qL0Jsb2NrRnVuZHMifQ==