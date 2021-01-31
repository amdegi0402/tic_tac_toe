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

      {
        _static_Style__WEBPACK_IMPORTED_MODULE_9__["default"];
      }
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
        lineNumber: 82,
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
            lineNumber: 88,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            children: moves
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0dhbWUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImhpc3RvcnkiLCJzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwieElzTmV4dCIsInN0ZXBOdW1iZXIiLCJpIiwic2xpY2UiLCJjdXJyZW50IiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwiYWxsX2hpc3RvcnkiLCJjb25jYXQiLCJzaGlmdCIsInNldFN0YXRlIiwibGluZXMiLCJhIiwiYiIsImMiLCJzdGVwIiwic3R5bGUiLCJ3aW5uZXIiLCJzdGF0dXMiLCJtb3ZlcyIsImp1bXBUbyIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFLSSxvQkFBWUEsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRSxDQUFDO0FBQ05DLGVBQU8sRUFBQ0MsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxJQUFULENBQWMsSUFBZDtBQURGLE9BQUQsQ0FEQTtBQUlUQyxhQUFPLEVBQUUsSUFKQTtBQUtUQyxnQkFBVSxFQUFFO0FBTEgsS0FBYjtBQUZjO0FBU2pCOzs7O2dDQUVXQyxDLEVBQUU7QUFDVixVQUFNTixPQUFPLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxPQUFYLENBQW1CTyxLQUFuQixDQUF5QixDQUF6QixFQUE0QixLQUFLUixLQUFMLENBQVdNLFVBQVgsR0FBd0IsQ0FBcEQsQ0FBaEI7QUFDQSxVQUFNRyxPQUFPLEdBQUdSLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDUyxNQUFSLEdBQWlCLENBQWxCLENBQXZCO0FBQ0EsVUFBTVIsT0FBTyxHQUFHTyxPQUFPLENBQUNQLE9BQVIsQ0FBZ0JNLEtBQWhCLEVBQWhCOztBQUNBLFVB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SDs7QUFDRCxVQUFNbUIsS0FBSyxHQUFHdkIsT0FBTyxDQUFDUyxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLElBQXJCLGdCQUNWO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDZSxNQUFMLENBQVksQ0FBWixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUlBLDBCQUNJO0FBQUssaUJBQVMsRUFBRyxNQUFqQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRyxZQUFqQjtBQUFBLGlDQUNJLHFFQUFDLGlEQUFEO0FBQ0ksbUJBQU8sRUFBSWhCLE9BQU8sQ0FBQ1AsT0FEdkI7QUFFSSxtQkFBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEscUJBQU8sTUFBSSxDQUFDbUIsV0FBTCxDQUFpQm5CLENBQWpCLENBQVA7QUFBQTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0k7QUFBSyxtQkFBUyxFQUFHLFdBQWpCO0FBQUEsa0NBQ0k7QUFBQSxzQkFBTWdCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsc0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBZUg7Ozs7RUE5RndCRyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0N2FkZTQ0MjhjNDdiNTUxM2FhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoaXN0b3J5OiBbe1xuICAgICAgICAgICAgICAgIHNxdWFyZXM6QXJyYXkoOSkuZmlsbChudWxsKSxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeElzTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaSl7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBjdXJyZW50LnNxdWFyZXMuc2xpY2UoKTtcbiAgICAgICAgaWYodGhpcy5jYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJztcblxuICAgICAgICBsZXQgYWxsX2hpc3RvcnkgPSBoaXN0b3J5LmNvbmNhdChbe1xuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlc1xuICAgICAgICB9XSlcbiAgICAgICAgaWYoYWxsX2hpc3RvcnkubGVuZ3RoID09PSAzKXtcbiAgICAgICAgICAgIGFsbF9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhpc3Rvcnk6IGFsbF9oaXN0b3J5LFxuICAgICAgICAgICAgc3RlcE51bWJlcjogYWxsX2hpc3RvcnkubGVuZ3RoIC0xLFxuICAgICAgICAgICAgeElzTmV4dDogIXRoaXMuc3RhdGUueElzTmV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpe1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtcbiAgICAgICAgICAgIFswLCAxLCAyXSxcbiAgICAgICAgICAgIFszLCA0LCA1XSxcbiAgICAgICAgICAgIFs2LCA3LCA4XSxcbiAgICAgICAgICAgIFswLCAzLCA2XSxcbiAgICAgICAgICAgIFsxLCA0LCA3XSxcbiAgICAgICAgICAgIFsyLCA1LCA4XSxcbiAgICAgICAgICAgIFswLCA0LCA4XSxcbiAgICAgICAgICAgIFsyLCA0LCA2XSxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgaWYoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pe1xuICAgICAgICAgICAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGp1bXBUbyhzdGVwKXtcbiAgICAgICAgY29uc3QgeElzTmV4dCA9IHN0ZXAgIT09IHRoaXMuc3RhdGUuc3RlcE51bWJlciA/ICF0aGlzLnN0YXRlLnhJc05leHQgOiB0aGlzLnN0YXRlLnhJc05leHQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RlcE51bWJlcjogc3RlcCxcbiAgICAgICAgICAgIHhJc05leHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHtzdHlsZX1cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5jYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcbiAgICAgICAgbGV0IHN0YXR1cztcbiAgICAgICAgaWYod2lubmVyKXtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdXaW5uZXI6ICcgKyB3aW5uZXI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc3RhdHVzID0gJ05leHQgcGxheWVyOiAnICsgKHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lmxlbmd0aCA8IDIgPyBudWxsIDooXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuanVtcFRvKDApfT4x5Zue5YmN44G45oi744KLPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdhbWUtYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJvYXJkIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcyA9IHtjdXJyZW50LnNxdWFyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoaSkgPT4gdGhpcy5oYW5kbGVDbGljayhpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ2FtZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG9sPnttb3Zlc308L29sPlxuICAgICAgICAgICAgICAgICAgICA8b2w+ey8qIFRPRE8gKi99PC9vbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9