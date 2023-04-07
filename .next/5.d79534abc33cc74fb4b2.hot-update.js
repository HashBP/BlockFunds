webpackHotUpdate(5,{

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(1084);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(450);

var _Layout = __webpack_require__(758);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(560);

var _PizzaLoading = __webpack_require__(1094);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\user\\Desktop\\WallIt\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\WallIt\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(450);

var _pizza = __webpack_require__(1095);

var _pizza2 = _interopRequireDefault(_pizza);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\user\\Desktop\\WallIt\\utils\\PizzaLoading.js";

exports.default = PizzaLoading = function PizzaLoading(props) {
  return _react2.default.createElement(_semanticUiReact.Image, {
    src: _pizza2.default,
    alt: "Pizza Loading",
    width: "350px",
    height: "300px",
    layout: "responsive",

    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxQaXp6YUxvYWRpbmcuanMiXSwibmFtZXMiOlsiSW1hZ2UiLCJteXBpYyIsIlBpenphTG9hZGluZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQVcsQUFDbEI7Ozs7Ozs7O2tCQUFlLGVBQWUsc0JBQUEsQUFBQyxPQUFVLEFBQ3ZDO3lCQUNFLEFBQUM7QUFBRCxBQUNPLEFBQ0w7U0FGRixBQUVNLEFBQ0o7V0FIRixBQUdRLEFBQ047WUFKRixBQUlTLEFBQ1A7WUFMRixBQUtTOzs7Z0JBTFQ7a0JBREYsQUFDRSxBQVNIO0FBVEc7QUFDRSxHQURGO0FBRkoiLCJmaWxlIjoiUGl6emFMb2FkaW5nLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC9XYWxsSXQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\user\\Desktop\\WallIt\\utils\\PizzaLoading.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\WallIt\\utils\\PizzaLoading.js"); } } })();

/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\user\\Desktop\\WallIt\\utils\\pizza.gif Unexpected character '�' (1:6)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kNzk1MzRhYmMzM2NjNzRmYjRiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjBkY2Q5YiIsIndlYnBhY2s6Ly8vLi91dGlscy9QaXp6YUxvYWRpbmcuanM/MjBkY2Q5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLy4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBHcmlkLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi8uLi9yb3V0ZXNcIjtcclxuaW1wb3J0IFBpenphTG9hZGluZyBmcm9tIFwiLi4vdXRpbHMvUGl6emFMb2FkaW5nXCI7XHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICByZXR1cm4geyBjYW1wYWlnbnMgfTtcclxuICB9XHJcbiAgZ2V0UmFuZG9tSXRlbSgpIHtcclxuICAgIGNvbnN0IGFyciA9IFtcclxuICAgICAgXCJldGhlcmV1bVwiLFxyXG4gICAgICBcInRlY2hcIixcclxuICAgICAgXCJ3ZWIzXCIsXHJcbiAgICAgIFwiYml0Y29pblwiLFxyXG4gICAgICBcImJsb2NrY2hhaW5cIixcclxuICAgICAgXCJzbWFydCBjb250cmFjdHNcIixcclxuICAgICAgXCJBcnRpZmljaWFsIGludGVsbGlnZW5jZVwiLFxyXG4gICAgICBcIkJpb21ldHJpY3NcIixcclxuICAgICAgXCJDbG91ZCBjb21wdXRpbmcgJiB2aXJ0dWFsaXphdGlvblwiLFxyXG4gICAgICBcIkNvbXBsZXggc3lzdGVtc1wiLFxyXG4gICAgICBcIkNvbXB1dGF0aW9uYWwgc2NpZW5jZVwiLFxyXG4gICAgICBcIkNvbmZvcm1hbmNlIHRlc3RpbmdcIixcclxuICAgICAgXCJDeWJlcnBoeXNpY2FsIHN5c3RlbXNcIixcclxuICAgICAgXCJDeWJlcnNlY3VyaXR5XCIsXHJcbiAgICAgIFwiRGF0YSAmIGluZm9ybWF0aWNzXCIsXHJcbiAgICAgIFwiRmVkZXJhbCBpbmZvcm1hdGlvbiBwcm9jZXNzaW5nIHN0YW5kYXJkcyAoRklQUylcIixcclxuICAgICAgXCJIZWFsdGggSVRcIixcclxuICAgICAgXCJJbnRlcm5ldCBvZiBUaGluZ3NcIixcclxuICAgICAgXCJJbnRlcm9wZXJhYmlsaXR5IHRlc3RpbmdcIixcclxuICAgICAgXCJNb2JpbGVcIixcclxuICAgICAgXCJOZXR3b3JraW5nXCIsXHJcbiAgICAgIFwiUHJpdmFjeVwiLFxyXG4gICAgICBcIlNvZnR3YXJlIHJlc2VhcmNoXCIsXHJcbiAgICAgIFwiVXNhYmlsaXR5ICYgaHVtYW4gZmFjdG9yc1wiLFxyXG4gICAgICBcIlZpZGVvIGFuYWx5dGljc1wiLFxyXG4gICAgICBcIlZpcnR1YWwgLyBhdWdtZW50ZWQgcmVhbGl0eVwiLFxyXG4gICAgICBcIlZpc3VhbGl6YXRpb24gcmVzZWFyY2hcIixcclxuICAgICAgXCJWb3Rpbmcgc3lzdGVtc1wiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XHJcbiAgICBjb25zdCBpdGVtID0gYXJyW3JhbmRvbUluZGV4XTtcclxuICAgIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8yOTB4MTkwLz8ke2l0ZW19YDtcclxuICAgIHJldHVybiBsaW5rO1xyXG4gIH1cclxuICByZW5kZXJDYW1wYWlnbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKChhZGRyZXNzKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX1cclxuICAgICAgICAgICAgaW1hZ2U9e3RoaXMuZ2V0UmFuZG9tSXRlbSgpfVxyXG4gICAgICAgICAgICBoZWFkZXI9XCJDYW1wYWlnbiBuYW1lXCJcclxuICAgICAgICAgICAgbWV0YT17YENhbXBhaWduIGFkZHJlc3M6ICR7XHJcbiAgICAgICAgICAgICAgYWRkcmVzcy5zbGljZSgwLCAxMCkgKyBcIi4uLlwiICsgYWRkcmVzcy5zbGljZSgtNSlcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRlc2NyaXB0aW9uIG9mIHRoaXMgY2FtcGFpZ25cIn1cclxuICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJleWVcIiBjb250ZW50PVwiVmlldyBDYW1wYWlnblwiIGZsdWlkPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8UGl6emFMb2FkaW5nLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIGEgbmV3IENhbXBhaWduXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxoMj5PcGVuIENhbXBhaWduczwvaDI+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIHshdGhpcy5wcm9wcy5jYW1wYWlnbnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPEljb24gc2l6ZT1cImJpZ1wiIG5hbWU9XCJicmFpbGxlXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjQwcHhcIn19Lz5cclxuICAgICAgICAgICAgICBPcHBzISBObyBvcGVuIENhbXBhaWducyB0byBzaG93LiBZb3UgbWF5IENyZWF0ZSBPbmUhXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17M30+e3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9PC9HcmlkPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgbXlwaWMgZnJvbSBcIi4vcGl6emEuZ2lmXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFBpenphTG9hZGluZyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VcclxuICAgICAgc3JjPXtteXBpY31cclxuICAgICAgYWx0PVwiUGl6emEgTG9hZGluZ1wiXHJcbiAgICAgIHdpZHRoPVwiMzUwcHhcIlxyXG4gICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICBcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvUGl6emFMb2FkaW5nLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFBQTtBQThCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBVkE7QUFnQkE7QUFoQkE7QUFDQTtBQWdCQTs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUF2RkE7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQU5BO0FBU0E7QUFUQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=