module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componets/Board.js":
/*!****************************!*\
  !*** ./componets/Board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _square_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./square.js */ "./componets/square.js");

var _jsxFileName = "/home/anet/nextApp-2/componets/Board.js";


class Board extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderSquare(i) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_square_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "board-row",
        children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "board-row",
        children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "board-row",
        children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./componets/Game.js":
/*!***************************!*\
  !*** ./componets/Game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.js */ "./componets/Board.js");
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");

var _jsxFileName = "/home/anet/nextApp-2/componets/Game.js";



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  async handleClick(i) {
    const squares = this.getCurrentBoard();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    let all_history = history.concat([{
      squares: squares
    }]);

    if (all_history.length === 3) {
      all_history.shift();
    }

    await this.setState({
      history: all_history,
      stepNumber: all_history.length - 1,
      xIsNext: !this.state.xIsNext
    });
    this.comAction(squares);
  } //盤面


  getCurrentBoard() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    return squares;
  }

  calculateWinner(squares) {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  jumpTo(step) {
    const xIsNext = step !== this.state.stepNumber ? !this.state.xIsNext : this.state.xIsNext;
    this.setState({
      stepNumber: step,
      xIsNext
    });
  } //com action


  comAction(squares) {
    if (this.calculateWinner(squares)) return;
    let history = this.state.history.slice(0, this.state.stepNumber + 1); //空いているマスを取得

    const possible_hands = [];
    let hand = squares.indexOf(null);

    while (hand !== -1) {
      possible_hands.push(hand);
      hand = squares.indexOf(null, hand + 1);
    } //空いているマスがなければ終了


    if (possible_hands.length === 0) return; //空いているマスのうちランダムで1マス取得

    const action_hand = possible_hands[Math.floor(Math.random() * possible_hands.length)]; //選択した手で盤面を更新

    squares[action_hand] = this.state.xIsNext ? 'X' : 'O';
    history[history.length - 1].squares = squares;
    this.setState({
      history,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.length < 2 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: () => this.jumpTo(0),
      children: "1\u56DE\u524D\u3078\u623B\u308B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, this);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "game",
      children: [_static_Style__WEBPACK_IMPORTED_MODULE_3__["default"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "game-board",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Board_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
          squares: current.squares,
          onClick: i => this.handleClick(i)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "game-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
          children: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this);
  }

});

/***/ }),

/***/ "./componets/square.js":
/*!*****************************!*\
  !*** ./componets/square.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/anet/nextApp-2/componets/square.js";

function Square(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "square",
    onClick: props.onClick,
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componets_Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componets/Game.js */ "./componets/Game.js");



/* harmony default export */ __webpack_exports__["default"] = (_componets_Game_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/home/anet/nextApp-2/static/Style.js";
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
  children: `
    body{
        font: 14px "Century Gothic", Futura, sans-serif;
        margin: 20px;
    }

    ol, ul{
        padding-left: 30px;
    }

    .board-row:after{
        clear: both;
        content: "";
        display: table;
    }

    .status{
        margin-bottom: 10px;
    }

    .square{
        background: #fff;
        border: 1px solid #999;
        float: left;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        height: 34px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        text-align: center;
        width: 34px;
    }

    .square:focus{
        outline: none;
    }

    .kbd-navigation .square:focus{
        background: #ddd;
    }

    .kbd-navigation .square:focus{
        background: #ddd;
    }

    .game{
        display: flex;
        flex-direction: row;
    }

    .game-info{
        margin-left: 20px;
    }
`
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 16
}, undefined));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZXRzL0JvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmV0cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmV0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL1N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQm9hcmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlclNxdWFyZSIsImkiLCJwcm9wcyIsInNxdWFyZXMiLCJvbkNsaWNrIiwicmVuZGVyIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImhpc3RvcnkiLCJBcnJheSIsImZpbGwiLCJ4SXNOZXh0Iiwic3RlcE51bWJlciIsImhhbmRsZUNsaWNrIiwiZ2V0Q3VycmVudEJvYXJkIiwiY2FsY3VsYXRlV2lubmVyIiwic2xpY2UiLCJhbGxfaGlzdG9yeSIsImNvbmNhdCIsImxlbmd0aCIsInNoaWZ0Iiwic2V0U3RhdGUiLCJjb21BY3Rpb24iLCJjdXJyZW50IiwibGluZXMiLCJhIiwiYiIsImMiLCJqdW1wVG8iLCJzdGVwIiwicG9zc2libGVfaGFuZHMiLCJoYW5kIiwiaW5kZXhPZiIsInB1c2giLCJhY3Rpb25faGFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIndpbm5lciIsInN0YXR1cyIsIm1vdmVzIiwic3R5bGUiLCJTcXVhcmUiLCJ2YWx1ZSIsIkdhbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNUM7QUFFZSxTQUFTRSxNQUFULENBQWdCeEMsS0FBaEIsRUFBc0I7QUFDakMsc0JBQ0k7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBMkIsV0FBTyxFQUFFQSxLQUFLLENBQUNFLE9BQTFDO0FBQUEsY0FDS0YsS0FBSyxDQUFDeUM7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHZUMseUhBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUFBLFlBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2RGU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmLEU7Ozs7Ozs7Ozs7O0FDRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9zcXVhcmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgcmVuZGVyU3F1YXJlKGkpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8U3F1YXJlXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zcXVhcmVzW2ldfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDApfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMSl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgyKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMyl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg0KX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDUpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg2KX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDcpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoOCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGlzdG9yeTogW3tcbiAgICAgICAgICAgICAgICBzcXVhcmVzOkFycmF5KDkpLmZpbGwobnVsbCksXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHhJc05leHQ6IHRydWUsXG4gICAgICAgICAgICBzdGVwTnVtYmVyOiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUNsaWNrKGkpe1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5nZXRDdXJyZW50Qm9hcmQoKTtcbiAgICAgICAgaWYodGhpcy5jYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XG5cbiAgICAgICAgbGV0IGFsbF9oaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoW3tcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXNcbiAgICAgICAgfV0pXG4gICAgICAgIGlmKGFsbF9oaXN0b3J5Lmxlbmd0aCA9PT0gMyl7XG4gICAgICAgICAgICBhbGxfaGlzdG9yeS5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoaXN0b3J5OiBhbGxfaGlzdG9yeSxcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IGFsbF9oaXN0b3J5Lmxlbmd0aCAtMSxcbiAgICAgICAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbUFjdGlvbihzcXVhcmVzKTtcbiAgICB9XG5cbiAgICAvL+ebpOmdolxuICAgIGdldEN1cnJlbnRCb2FyZCgpe1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuc3RhdGUuc3RlcE51bWJlciArIDEpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gY3VycmVudC5zcXVhcmVzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBzcXVhcmVzO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKXtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXG4gICAgICAgICAgICBbMCwgMSwgMl0sXG4gICAgICAgICAgICBbMywgNCwgNV0sXG4gICAgICAgICAgICBbNiwgNywgOF0sXG4gICAgICAgICAgICBbMCwgMywgNl0sXG4gICAgICAgICAgICBbMSwgNCwgN10sXG4gICAgICAgICAgICBbMiwgNSwgOF0sXG4gICAgICAgICAgICBbMCwgNCwgOF0sXG4gICAgICAgICAgICBbMiwgNCwgNl0sXG4gICAgICAgIF07XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGlmKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBqdW1wVG8oc3RlcCl7XG4gICAgICAgIGNvbnN0IHhJc05leHQgPSBzdGVwICE9PSB0aGlzLnN0YXRlLnN0ZXBOdW1iZXIgPyAhdGhpcy5zdGF0ZS54SXNOZXh0IDogdGhpcy5zdGF0ZS54SXNOZXh0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IHN0ZXAsXG4gICAgICAgICAgICB4SXNOZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vY29tIGFjdGlvblxuICAgIGNvbUFjdGlvbihzcXVhcmVzKXtcbiAgICAgICAgaWYodGhpcy5jYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykpIHJldHVybjtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XG5cbiAgICAgICAgLy/nqbrjgYTjgabjgYTjgovjg57jgrnjgpLlj5blvpdcbiAgICAgICAgY29uc3QgcG9zc2libGVfaGFuZHMgPSBbXTtcbiAgICAgICAgbGV0IGhhbmQgPSBzcXVhcmVzLmluZGV4T2YobnVsbCk7XG4gICAgICAgIHdoaWxlKGhhbmQgIT09IC0xKXtcbiAgICAgICAgICAgIHBvc3NpYmxlX2hhbmRzLnB1c2goaGFuZCk7XG4gICAgICAgICAgICBoYW5kID0gc3F1YXJlcy5pbmRleE9mKG51bGwsIGhhbmQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAvL+epuuOBhOOBpuOBhOOCi+ODnuOCueOBjOOBquOBkeOCjOOBsOe1guS6hlxuICAgICAgICBpZihwb3NzaWJsZV9oYW5kcy5sZW5ndGggPT09IDApcmV0dXJuO1xuICAgICAgICAvL+epuuOBhOOBpuOBhOOCi+ODnuOCueOBruOBhuOBoeODqeODs+ODgOODoOOBpzHjg57jgrnlj5blvpdcbiAgICAgICAgY29uc3QgYWN0aW9uX2hhbmQgPSBwb3NzaWJsZV9oYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcG9zc2libGVfaGFuZHMubGVuZ3RoKV07XG5cbiAgICAgICAgLy/pgbjmip7jgZfjgZ/miYvjgafnm6TpnaLjgpLmm7TmlrBcbiAgICAgICAgc3F1YXJlc1thY3Rpb25faGFuZF0gPSB0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTyc7XG4gICAgICAgIGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXS5zcXVhcmVzID0gc3F1YXJlcztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhpc3RvcnksXG4gICAgICAgICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmNhbGN1bGF0ZVdpbm5lcihjdXJyZW50LnNxdWFyZXMpO1xuICAgICAgICBsZXQgc3RhdHVzO1xuICAgICAgICBpZih3aW5uZXIpe1xuICAgICAgICAgICAgc3RhdHVzID0gJ1dpbm5lcjogJyArIHdpbm5lcjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzdGF0dXMgPSAnTmV4dCBwbGF5ZXI6ICcgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubGVuZ3RoIDwgMiA/IG51bGwgOihcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5qdW1wVG8oMCl9PjHlm57liY3jgbjmiLvjgos8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ2FtZVwiPlxuICAgICAgICAgICAgICAgIHtzdHlsZX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ2FtZS1ib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm9hcmQgXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzID0ge2N1cnJlbnQuc3F1YXJlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhpKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDxvbD57LyogVE9ETyAqL308L29sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNxdWFyZShwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAge3Byb3BzLnZhbHVlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBHYW1lIGZyb20gJy4uL2NvbXBvbmV0cy9HYW1lLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lICIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcbiAgICBib2R5e1xuICAgICAgICBmb250OiAxNHB4IFwiQ2VudHVyeSBHb3RoaWNcIiwgRnV0dXJhLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuXG4gICAgb2wsIHVse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJvYXJkLXJvdzphZnRlcntcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIH1cblxuICAgIC5zdGF0dXN7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnNxdWFyZXtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICB9XG5cbiAgICAuc3F1YXJlOmZvY3Vze1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC5rYmQtbmF2aWdhdGlvbiAuc3F1YXJlOmZvY3Vze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIH1cblxuICAgIC5rYmQtbmF2aWdhdGlvbiAuc3F1YXJlOmZvY3Vze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIH1cblxuICAgIC5nYW1le1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5nYW1lLWluZm97XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbmB9PC9zdHlsZT47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9