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

var _PizzaLoading = require("../utils/PizzaLoading");

var _PizzaLoading2 = _interopRequireDefault(_PizzaLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\pages\\index.js?entry";


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
          image: _this2.getRandomItem(),
          header: "Campaign name",
          meta: "Campaign address: " + (address.slice(0, 10) + "..." + address.slice(-5)),
          description: "Description of this campaign",
          extra: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { icon: "eye", content: "View Campaign", fluid: "true", __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          })),
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
          lineNumber: 72
        }
      }, _react2.default.createElement(_PizzaLoading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        icon: "add circle",
        content: "Create a new Campaign",
        color: "black",
        floated: "right",
        size: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Open Campaigns"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), !this.props.campaigns.length ? _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { size: "big", name: "braille", style: { marginRight: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), "Opps! No open Campaigns to show. You may Create One!")) : _react2.default.createElement(_semanticUiReact.Grid, { columns: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsIkljb24iLCJMYXlvdXQiLCJMaW5rIiwiUGl6emFMb2FkaW5nIiwiQ2FtcGFpZ25JbmRleCIsImFyciIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaXRlbSIsImxpbmsiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJvdmVyZmxvdyIsImdldFJhbmRvbUl0ZW0iLCJzbGljZSIsIm1hcmdpblJpZ2h0IiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFRLEFBQU0sQUFBTTs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFrQjs7Ozs7Ozs7O0ksQUFDbkI7Ozs7Ozs7Ozs7O29DQUtZLEFBQ2Q7VUFBTSxNQUFNLENBQUEsQUFDVixZQURVLEFBRVYsUUFGVSxBQUdWLFFBSFUsQUFJVixXQUpVLEFBS1YsY0FMVSxBQU1WLG1CQU5VLEFBT1YsMkJBUFUsQUFRVixjQVJVLEFBU1Ysb0NBVFUsQUFVVixtQkFWVSxBQVdWLHlCQVhVLEFBWVYsdUJBWlUsQUFhVix5QkFiVSxBQWNWLGlCQWRVLEFBZVYsc0JBZlUsQUFnQlYsbURBaEJVLEFBaUJWLGFBakJVLEFBa0JWLHNCQWxCVSxBQW1CViw0QkFuQlUsQUFvQlYsVUFwQlUsQUFxQlYsY0FyQlUsQUFzQlYsV0F0QlUsQUF1QlYscUJBdkJVLEFBd0JWLDZCQXhCVSxBQXlCVixtQkF6QlUsQUEwQlYsK0JBMUJVLEFBMkJWLDBCQTNCRixBQUFZLEFBNEJWLEFBRUY7VUFBTSxjQUFjLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFXLElBQS9DLEFBQW9CLEFBQStCLEFBQ25EO1VBQU0sT0FBTyxJQUFiLEFBQWEsQUFBSSxBQUNqQjtVQUFNLHdEQUFOLEFBQTRELEFBQzVEO2FBQUEsQUFBTyxBQUNSOzs7O3NDQUNpQjttQkFDaEI7O2tCQUFPLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUMzQzsrQkFDRyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsQUFBQztpQkFDUSxFQUFFLFVBRFgsQUFDUyxBQUFZLEFBQ25CO2lCQUFPLE9BRlQsQUFFUyxBQUFLLEFBQ1o7a0JBSEYsQUFHUyxBQUNQO3dDQUNFLFFBQUEsQUFBUSxNQUFSLEFBQWMsR0FBZCxBQUFpQixNQUFqQixBQUF1QixRQUFRLFFBQUEsQUFBUSxNQUFNLENBTGpELEFBSUUsQUFDaUMsQUFBZSxBQUVoRDt1QkFQRixBQU9lLEFBQ2I7aUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsT0FBTSxTQUFuQixBQUEyQixpQkFBZ0IsT0FBM0MsQUFBaUQ7d0JBQWpEOzBCQVZOLEFBU0ksQUFDRTtBQUFBOzs7c0JBVk47d0JBRkosQUFDRSxBQUNFLEFBZ0JMO0FBaEJLO0FBQ0U7QUFKUixBQUFPLEFBb0JSLE9BcEJROzs7OzZCQXFCQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztjQUFELEFBQ08sQUFDTDtpQkFGRixBQUVVLEFBQ1I7ZUFIRixBQUdRLEFBQ047aUJBSkYsQUFJVSxBQUNSO2NBTEYsQUFLTzs7b0JBTFA7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFTSjtBQVRJO0FBQ0UsNEJBUU4sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBWkYsQUFZRSxBQUNBOztvQkFBQTtzQkFiRixBQWFFLEFBQ0M7QUFERDtBQUFBLFdBQ0UsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFaLEFBQXNCLHlCQUNyQixjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLE9BQU0sTUFBakIsQUFBc0IsV0FBVSxPQUFPLEVBQUMsYUFBeEMsQUFBdUMsQUFBYTtvQkFBcEQ7c0JBREYsQUFDRTtBQUFBO1VBSEgsQUFDQyxBQUNBLDJFQU1BLEFBQUMsdUNBQUssU0FBTixBQUFlO29CQUFmO3NCQUFBLEFBQW1CO0FBQW5CO09BQUEsT0F6QlIsQUFDRSxBQUVFLEFBc0JJLEFBQW1CLEFBQUssQUFLakM7Ozs7Ozs7Ozs7Ozt1QkE1RnlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7bUJBQXpEO0E7aURBQ0MsRUFBRSxXLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RlgsQSxBQWpHNEI7O2tCQWlHNUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91c2VyL0Rlc2t0b3AvV2FsbEl0In0=