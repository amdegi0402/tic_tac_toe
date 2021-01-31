webpackHotUpdate_N_E("pages/index",{

/***/ "./componets/Game.js":
/*!***************************!*\
  !*** ./componets/Game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Board.js */ "./componets/Board.js");
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");







var _jsxFileName = "/home/anet/nextApp-2/componets/Game.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var _default = /*#__PURE__*/function (_React$Component) {
  Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
    return _this;
  }

  Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (this.calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      var all_history = history.concat([{
        squares: squares
      }]);

      if (all_history.length === 3) {
        all_history.shift();
      }

      this.setState({
        history: all_history,
        stepNumber: all_history.length - 1,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "calculateWinner",
    value: function calculateWinner(squares) {
      var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

      for (var i = 0; i < lines.length; i++) {
        var _lines$i = Object(_home_anet_nextApp_2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(lines[i], 3),
            a = _lines$i[0],
            b = _lines$i[1],
            c = _lines$i[2];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }

      return null;
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      var xIsNext = step !== this.state.stepNumber ? !this.state.xIsNext : this.state.xIsNext;
      this.setState({
        stepNumber: step,
        xIsNext: xIsNext
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var history = this.state.history;
      var current = history[history.length - 1];
      var winner = this.calculateWinner(current.squares);
      var status;

      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      var moves = history.length < 2 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return _this2.jumpTo(0);
        },
        children: "1\u56DE\u524D\u3078\u623B\u308B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "game",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game-board",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Board_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
            squares: current.squares,
            onClick: function onClick(i) {
              return _this2.handleClick(i);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            children: moves
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componets_Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componets/Game.js */ "./componets/Game.js");



/* harmony default export */ __webpack_exports__["default"] = (_componets_Game_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/home/anet/nextApp-2/static/Style.js";
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
  children: "\n    body{\n        font: 14px \"Century Gothic\", Futura, sans-serif;\n        margin: 20px;\n    }\n\n    ol, ul{\n        padding-left: 30px;\n    }\n\n    .board-row:after{\n        clear: both;\n        content: \"\";\n        display: table;\n    }\n\n    .status{\n        margin-bottom: 10px;\n    }\n\n    .square{\n        background: #fff;\n        border: 1px solid #999;\n        float: left;\n        font-size: 24px;\n        font-weight: bold;\n        line-height: 34px;\n        height: 34px;\n        margin-right: -1px;\n        margin-top: -1px;\n        padding: 0;\n        text-align: center;\n        width: 34px;\n    }\n\n    .square:focus{\n        outline: none;\n    }\n\n    .kbd-navigation .square:focus{\n        background: #ddd;\n    }\n\n    .kbd-navigation .square:focus{\n        background: #ddd;\n    }\n\n    .game{\n        display: flex;\n        flex-direction: row;\n    }\n\n    .game-info{\n        margin-left: 20px;\n    }\n"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 16
}, undefined));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zdGF0aWMvU3R5bGUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImhpc3RvcnkiLCJzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwieElzTmV4dCIsInN0ZXBOdW1iZXIiLCJpIiwic2xpY2UiLCJjdXJyZW50IiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwiYWxsX2hpc3RvcnkiLCJjb25jYXQiLCJzaGlmdCIsInNldFN0YXRlIiwibGluZXMiLCJhIiwiYiIsImMiLCJzdGVwIiwid2lubmVyIiwic3RhdHVzIiwibW92ZXMiLCJqdW1wVG8iLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiR2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQUdJLG9CQUFZQSxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsYUFBTyxFQUFFLENBQUM7QUFDTkMsZUFBTyxFQUFDQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLElBQVQsQ0FBYyxJQUFkO0FBREYsT0FBRCxDQURBO0FBSVRDLGFBQU8sRUFBRSxJQUpBO0FBS1RDLGdCQUFVLEVBQUU7QUFMSCxLQUFiO0FBRmM7QUFTakI7Ozs7Z0NBRVdDLEMsRUFBRTtBQUNWLFVBQU1OLE9BQU8sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJPLEtBQW5CLENBQXlCLENBQXpCLEVBQTRCLEtBQUtSLEtBQUwsQ0FBV00sVUFBWCxHQUF3QixDQUFwRCxDQUFoQjtBQUNBLFVBQU1HLE9BQU8sR0FBR1IsT0FBTyxDQUFDQSxPQUFPLENBQUNTLE1BQVIsR0FBaUIsQ0FBbEIsQ0FBdkI7QUFDQSxVQUFNUixPQUFPLEdBQUdPLE9BQU8sQ0FBQ1AsT0FBUixDQUFnQk0sS0FBaEIsRUFBaEI7O0FBQ0EsVUFBRyxLQUFLRyxlQUFMLENBQXFCVCxPQUFyQixLQUFpQ0EsT0FBTyxDQUFDSyxDQUFELENBQTNDLEVBQStDO0FBQzNDO0FBQ0g7O0FBQ0RMLGFBQU8sQ0FBQ0ssQ0FBRCxDQUFQLEdBQWEsS0FBS1AsS0FBTCxDQUFXSyxPQUFYLEdBQXFCLEdBQXJCLEdBQTJCLEdBQXhDO0FBRUEsVUFBSU8sV0FBVyxHQUFHWCxPQUFPLENBQUNZLE1BQVIsQ0FBZSxDQUFDO0FBQzlCWCxlQUFPLEVBQUVBO0FBRHFCLE9BQUQsQ0FBZixDQUFsQjs7QUFHQSxVQUFHVSxXQUFXLENBQUNGLE1BQVosS0FBdUIsQ0FBMUIsRUFBNEI7QUFDeEJFLG1CQUFXLENBQUNFLEtBQVo7QUFDSDs7QUFFRCxXQUFLQyxRQUFMLENBQWM7QUFDVmQsZUFBTyxFQUFFVyxXQURDO0FBRVZOLGtCQUFVLEVBQUVNLFdBQVcsQ0FBQ0YsTUFBWixHQUFvQixDQUZ0QjtBQUdWTCxlQUFPLEVBQUUsQ0FBQyxLQUFLTCxLQUFMLENBQVdLO0FBSFgsT0FBZDtBQUtIOzs7b0NBRWVILE8sRUFBUTtBQUNwQixVQUFNYyxLQUFLLEdBQUcsQ0FDVixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURVLEVBRVYsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGVSxFQUdWLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFUsRUFJVixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpVLEVBS1YsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMVSxFQU1WLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTlUsRUFPVixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVBVLEVBUVYsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FSVSxDQUFkOztBQVVBLFdBQUksSUFBSVQsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHUyxLQUFLLENBQUNOLE1BQXpCLEVBQWlDSCxDQUFDLEVBQWxDLEVBQXFDO0FBQUEsaUpBQ2ZTLEtBQUssQ0FBQ1QsQ0FBRCxDQURVO0FBQUEsWUFDMUJVLENBRDBCO0FBQUEsWUFDdkJDLENBRHVCO0FBQUEsWUFDcEJDLENBRG9COztBQUVqQyxZQUFHakIsT0FBTyxDQUFDZSxDQUFELENBQVAsSUFBY2YsT0FBTyxDQUFDZSxDQUFELENBQVAsS0FBZWYsT0FBTyxDQUFDZ0IsQ0FBRCxDQUFwQyxJQUEyQ2hCLE9BQU8sQ0FBQ2UsQ0FBRCxDQUFQLEtBQWVmLE9BQU8sQ0FBQ2lCLENBQUQsQ0FBcEUsRUFBd0U7QUFDcEUsaUJBQU9qQixPQUFPLENBQUNlLENBQUQsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7OzsyQkFFTUcsSSxFQUFLO0FBQ1IsVUFBTWYsT0FBTyxHQUFHZSxJQUFJLEtBQUssS0FBS3BCLEtBQUwsQ0FBV00sVUFBcEIsR0FBaUMsQ0FBQyxLQUFLTixLQUFMLENBQVdLLE9BQTdDLEdBQXVELEtBQUtMLEtBQUwsQ0FBV0ssT0FBbEY7QUFDQSxXQUFLVSxRQUFMLENBQWM7QUFDVlQsa0JBQVUsRUFBRWMsSUFERjtBQUVWZixlQUFPLEVBQVBBO0FBRlUsT0FBZDtBQUlIOzs7NkJBRU87QUFBQTs7QUFDSixVQUFNSixPQUFPLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjtBQUNBLFVBQU1RLE9BQU8sR0FBR1IsT0FBTyxDQUFDQSxPQUFPLENBQUNTLE1BQVIsR0FBaUIsQ0FBbEIsQ0FBdkI7QUFDQSxVQUFNVyxNQUFNLEdBQUcsS0FBS1YsZUFBTCxDQUFxQkYsT0FBTyxDQUFDUCxPQUE3QixDQUFmO0FBQ0EsVUFBSW9CLE1BQUo7O0FBQ0EsVUFBR0QsTUFBSCxFQUFVO0FBQ05DLGNBQU0sR0FBRyxhQUFhRCxNQUF0QjtBQUNILE9BRkQsTUFFSztBQUNEQyxjQUFNLEdBQUcsbUJBQW1CLEtBQUt0QixLQUFMLENBQVdLLE9BQVgsR0FBcUIsR0FBckIsR0FBMkIsR0FBOUMsQ0FBVDtBQUNIOztBQUNELFVBQU1rQixLQUFLLEdBQUd0QixPQUFPLENBQUNTLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBckIsZ0JBQ1Y7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNjLE1BQUwsQ0FBWSxDQUFaLENBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBSUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFHLE1BQWpCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFHLFlBQWpCO0FBQUEsaUNBQ0kscUVBQUMsaURBQUQ7QUFDSSxtQkFBTyxFQUFJZixPQUFPLENBQUNQLE9BRHZCO0FBRUksbUJBQU8sRUFBRSxpQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPLE1BQUksQ0FBQ2tCLFdBQUwsQ0FBaUJsQixDQUFqQixDQUFQO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU9JO0FBQUssbUJBQVMsRUFBRyxXQUFqQjtBQUFBLGtDQUNJO0FBQUEsc0JBQU1lO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsc0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBZUg7Ozs7RUE1RndCRyw0Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHZUMseUhBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNzdjNTZhOTM5ZTdmNDU4Mzc1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGlzdG9yeTogW3tcbiAgICAgICAgICAgICAgICBzcXVhcmVzOkFycmF5KDkpLmZpbGwobnVsbCksXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHhJc05leHQ6IHRydWUsXG4gICAgICAgICAgICBzdGVwTnVtYmVyOiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGkpe1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuc3RhdGUuc3RlcE51bWJlciArIDEpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gY3VycmVudC5zcXVhcmVzLnNsaWNlKCk7XG4gICAgICAgIGlmKHRoaXMuY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHx8IHNxdWFyZXNbaV0pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNxdWFyZXNbaV0gPSB0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTyc7XG5cbiAgICAgICAgbGV0IGFsbF9oaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoW3tcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXNcbiAgICAgICAgfV0pXG4gICAgICAgIGlmKGFsbF9oaXN0b3J5Lmxlbmd0aCA9PT0gMyl7XG4gICAgICAgICAgICBhbGxfaGlzdG9yeS5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoaXN0b3J5OiBhbGxfaGlzdG9yeSxcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IGFsbF9oaXN0b3J5Lmxlbmd0aCAtMSxcbiAgICAgICAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKXtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXG4gICAgICAgICAgICBbMCwgMSwgMl0sXG4gICAgICAgICAgICBbMywgNCwgNV0sXG4gICAgICAgICAgICBbNiwgNywgOF0sXG4gICAgICAgICAgICBbMCwgMywgNl0sXG4gICAgICAgICAgICBbMSwgNCwgN10sXG4gICAgICAgICAgICBbMiwgNSwgOF0sXG4gICAgICAgICAgICBbMCwgNCwgOF0sXG4gICAgICAgICAgICBbMiwgNCwgNl0sXG4gICAgICAgIF07XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGlmKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBqdW1wVG8oc3RlcCl7XG4gICAgICAgIGNvbnN0IHhJc05leHQgPSBzdGVwICE9PSB0aGlzLnN0YXRlLnN0ZXBOdW1iZXIgPyAhdGhpcy5zdGF0ZS54SXNOZXh0IDogdGhpcy5zdGF0ZS54SXNOZXh0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IHN0ZXAsXG4gICAgICAgICAgICB4SXNOZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmNhbGN1bGF0ZVdpbm5lcihjdXJyZW50LnNxdWFyZXMpO1xuICAgICAgICBsZXQgc3RhdHVzO1xuICAgICAgICBpZih3aW5uZXIpe1xuICAgICAgICAgICAgc3RhdHVzID0gJ1dpbm5lcjogJyArIHdpbm5lcjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzdGF0dXMgPSAnTmV4dCBwbGF5ZXI6ICcgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubGVuZ3RoIDwgMiA/IG51bGwgOihcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5qdW1wVG8oMCl9PjHlm57liY3jgbjmiLvjgos8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdhbWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ2FtZS1ib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm9hcmQgXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzID0ge2N1cnJlbnQuc3F1YXJlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhpKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDxvbD57LyogVE9ETyAqL308L29sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBHYW1lIGZyb20gJy4uL2NvbXBvbmV0cy9HYW1lLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lICIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcbiAgICBib2R5e1xuICAgICAgICBmb250OiAxNHB4IFwiQ2VudHVyeSBHb3RoaWNcIiwgRnV0dXJhLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuXG4gICAgb2wsIHVse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJvYXJkLXJvdzphZnRlcntcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIH1cblxuICAgIC5zdGF0dXN7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnNxdWFyZXtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICB9XG5cbiAgICAuc3F1YXJlOmZvY3Vze1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC5rYmQtbmF2aWdhdGlvbiAuc3F1YXJlOmZvY3Vze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIH1cblxuICAgIC5rYmQtbmF2aWdhdGlvbiAuc3F1YXJlOmZvY3Vze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIH1cblxuICAgIC5nYW1le1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5nYW1lLWluZm97XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbmB9PC9zdHlsZT47Il0sInNvdXJjZVJvb3QiOiIifQ==