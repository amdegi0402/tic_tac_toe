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
        lineNumber: 80,
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
            lineNumber: 86,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "game-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            children: moves
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0dhbWUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImhpc3RvcnkiLCJzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwieElzTmV4dCIsInN0ZXBOdW1iZXIiLCJpIiwic2xpY2UiLCJjdXJyZW50IiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwiYWxsX2hpc3RvcnkiLCJjb25jYXQiLCJzaGlmdCIsInNldFN0YXRlIiwibGluZXMiLCJhIiwiYiIsImMiLCJzdGVwIiwid2lubmVyIiwic3RhdHVzIiwibW92ZXMiLCJqdW1wVG8iLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBSUksb0JBQVlBLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxhQUFPLEVBQUUsQ0FBQztBQUNOQyxlQUFPLEVBQUNDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsSUFBVCxDQUFjLElBQWQ7QUFERixPQUFELENBREE7QUFJVEMsYUFBTyxFQUFFLElBSkE7QUFLVEMsZ0JBQVUsRUFBRTtBQUxILEtBQWI7QUFGYztBQVNqQjs7OztnQ0FFV0MsQyxFQUFFO0FBQ1YsVUFBTU4sT0FBTyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQk8sS0FBbkIsQ0FBeUIsQ0FBekIsRUFBNEIsS0FBS1IsS0FBTCxDQUFXTSxVQUFYLEdBQXdCLENBQXBELENBQWhCO0FBQ0EsVUFBTUcsT0FBTyxHQUFHUixPQUFPLENBQUNBLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQixDQUFsQixDQUF2QjtBQUNBLFVBQU1SLE9BQU8sR0FBR08sT0FBTyxDQUFDUCxPQUFSLENBQWdCTSxLQUFoQixFQUFoQjs7QUFDQSxVQUFHLEtBQUtH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Q0FBQ1MsTUFBUixHQUFpQixDQUFqQixHQUFxQixJQUFyQixnQkFDVjtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ2MsTUFBTCxDQUFZLENBQVosQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFJQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUcsTUFBakI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUcsWUFBakI7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNJLG1CQUFPLEVBQUlmLE9BQU8sQ0FBQ1AsT0FEdkI7QUFFSSxtQkFBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEscUJBQU8sTUFBSSxDQUFDa0IsV0FBTCxDQUFpQmxCLENBQWpCLENBQVA7QUFBQTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0k7QUFBSyxtQkFBUyxFQUFHLFdBQWpCO0FBQUEsa0NBQ0k7QUFBQSxzQkFBTWU7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFlSDs7OztFQTVGd0JHLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDIyYmZiN2NiMmY4NmY1YTQxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3RhdGljL1N0eWxlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhpc3Rvcnk6IFt7XG4gICAgICAgICAgICAgICAgc3F1YXJlczpBcnJheSg5KS5maWxsKG51bGwpLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB4SXNOZXh0OiB0cnVlLFxuICAgICAgICAgICAgc3RlcE51bWJlcjogMCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhpKXtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeS5zbGljZSgwLCB0aGlzLnN0YXRlLnN0ZXBOdW1iZXIgKyAxKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGN1cnJlbnQuc3F1YXJlcy5zbGljZSgpO1xuICAgICAgICBpZih0aGlzLmNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB8fCBzcXVhcmVzW2ldKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nO1xuXG4gICAgICAgIGxldCBhbGxfaGlzdG9yeSA9IGhpc3RvcnkuY29uY2F0KFt7XG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzXG4gICAgICAgIH1dKVxuICAgICAgICBpZihhbGxfaGlzdG9yeS5sZW5ndGggPT09IDMpe1xuICAgICAgICAgICAgYWxsX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaGlzdG9yeTogYWxsX2hpc3RvcnksXG4gICAgICAgICAgICBzdGVwTnVtYmVyOiBhbGxfaGlzdG9yeS5sZW5ndGggLTEsXG4gICAgICAgICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcyl7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW1xuICAgICAgICAgICAgWzAsIDEsIDJdLFxuICAgICAgICAgICAgWzMsIDQsIDVdLFxuICAgICAgICAgICAgWzYsIDcsIDhdLFxuICAgICAgICAgICAgWzAsIDMsIDZdLFxuICAgICAgICAgICAgWzEsIDQsIDddLFxuICAgICAgICAgICAgWzIsIDUsIDhdLFxuICAgICAgICAgICAgWzAsIDQsIDhdLFxuICAgICAgICAgICAgWzIsIDQsIDZdLFxuICAgICAgICBdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XG4gICAgICAgICAgICBpZihzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNxdWFyZXNbYV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAganVtcFRvKHN0ZXApe1xuICAgICAgICBjb25zdCB4SXNOZXh0ID0gc3RlcCAhPT0gdGhpcy5zdGF0ZS5zdGVwTnVtYmVyID8gIXRoaXMuc3RhdGUueElzTmV4dCA6IHRoaXMuc3RhdGUueElzTmV4dDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGVwTnVtYmVyOiBzdGVwLFxuICAgICAgICAgICAgeElzTmV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5jYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcbiAgICAgICAgbGV0IHN0YXR1cztcbiAgICAgICAgaWYod2lubmVyKXtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdXaW5uZXI6ICcgKyB3aW5uZXI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc3RhdHVzID0gJ05leHQgcGxheWVyOiAnICsgKHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lmxlbmd0aCA8IDIgPyBudWxsIDooXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuanVtcFRvKDApfT4x5Zue5YmN44G45oi744KLPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdhbWUtYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJvYXJkIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcyA9IHtjdXJyZW50LnNxdWFyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoaSkgPT4gdGhpcy5oYW5kbGVDbGljayhpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ2FtZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG9sPnttb3Zlc308L29sPlxuICAgICAgICAgICAgICAgICAgICA8b2w+ey8qIFRPRE8gKi99PC9vbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9