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

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    let all_history = history.concat([{
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
      lineNumber: 81,
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
          lineNumber: 89,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "game-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
          children: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZXRzL0JvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmV0cy9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmV0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL1N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQm9hcmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlclNxdWFyZSIsImkiLCJwcm9wcyIsInNxdWFyZXMiLCJvbkNsaWNrIiwicmVuZGVyIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImhpc3RvcnkiLCJBcnJheSIsImZpbGwiLCJ4SXNOZXh0Iiwic3RlcE51bWJlciIsImhhbmRsZUNsaWNrIiwic2xpY2UiLCJjdXJyZW50IiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwiYWxsX2hpc3RvcnkiLCJjb25jYXQiLCJzaGlmdCIsInNldFN0YXRlIiwibGluZXMiLCJhIiwiYiIsImMiLCJqdW1wVG8iLCJzdGVwIiwid2lubmVyIiwic3RhdHVzIiwibW92ZXMiLCJzdHlsZSIsIlNxdWFyZSIsInZhbHVlIiwiR2FtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZEZTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWYsRTs7Ozs7Ozs7Ozs7QUNGQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICByZW5kZXJTcXVhcmUoaSl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxTcXVhcmVcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNxdWFyZXNbaV19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soaSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgxKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgzKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDQpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDYpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNyl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg4KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoaXN0b3J5OiBbe1xuICAgICAgICAgICAgICAgIHNxdWFyZXM6QXJyYXkoOSkuZmlsbChudWxsKSxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeElzTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaSl7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBjdXJyZW50LnNxdWFyZXMuc2xpY2UoKTtcbiAgICAgICAgaWYodGhpcy5jYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJztcblxuICAgICAgICBsZXQgYWxsX2hpc3RvcnkgPSBoaXN0b3J5LmNvbmNhdChbe1xuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlc1xuICAgICAgICB9XSlcbiAgICAgICAgaWYoYWxsX2hpc3RvcnkubGVuZ3RoID09PSAzKXtcbiAgICAgICAgICAgIGFsbF9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhpc3Rvcnk6IGFsbF9oaXN0b3J5LFxuICAgICAgICAgICAgc3RlcE51bWJlcjogYWxsX2hpc3RvcnkubGVuZ3RoIC0xLFxuICAgICAgICAgICAgeElzTmV4dDogIXRoaXMuc3RhdGUueElzTmV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpe1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtcbiAgICAgICAgICAgIFswLCAxLCAyXSxcbiAgICAgICAgICAgIFszLCA0LCA1XSxcbiAgICAgICAgICAgIFs2LCA3LCA4XSxcbiAgICAgICAgICAgIFswLCAzLCA2XSxcbiAgICAgICAgICAgIFsxLCA0LCA3XSxcbiAgICAgICAgICAgIFsyLCA1LCA4XSxcbiAgICAgICAgICAgIFswLCA0LCA4XSxcbiAgICAgICAgICAgIFsyLCA0LCA2XSxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgaWYoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pe1xuICAgICAgICAgICAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGp1bXBUbyhzdGVwKXtcbiAgICAgICAgY29uc3QgeElzTmV4dCA9IHN0ZXAgIT09IHRoaXMuc3RhdGUuc3RlcE51bWJlciA/ICF0aGlzLnN0YXRlLnhJc05leHQgOiB0aGlzLnN0YXRlLnhJc05leHQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RlcE51bWJlcjogc3RlcCxcbiAgICAgICAgICAgIHhJc05leHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuY2FsY3VsYXRlV2lubmVyKGN1cnJlbnQuc3F1YXJlcyk7XG4gICAgICAgIGxldCBzdGF0dXM7XG4gICAgICAgIGlmKHdpbm5lcil7XG4gICAgICAgICAgICBzdGF0dXMgPSAnV2lubmVyOiAnICsgd2lubmVyO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdOZXh0IHBsYXllcjogJyArICh0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vdmVzID0gaGlzdG9yeS5sZW5ndGggPCAyID8gbnVsbCA6KFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmp1bXBUbygwKX0+MeWbnuWJjeOBuOaIu+OCizwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIFxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lXCI+XG4gICAgICAgICAgICAgICAge3N0eWxlfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lLWJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb2FyZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMgPSB7Y3VycmVudC5zcXVhcmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGkpID0+IHRoaXMuaGFuZGxlQ2xpY2soaSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdhbWUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntzdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxvbD57bW92ZXN9PC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPG9sPnsvKiBUT0RPICovfTwvb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3F1YXJlKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3F1YXJlXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICAgICAgICB7cHJvcHMudmFsdWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vY29tcG9uZXRzL0dhbWUuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUgIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxzdHlsZT57YFxuICAgIGJvZHl7XG4gICAgICAgIGZvbnQ6IDE0cHggXCJDZW50dXJ5IEdvdGhpY1wiLCBGdXR1cmEsIHNhbnMtc2VyaWY7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG5cbiAgICBvbCwgdWx7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAuYm9hcmQtcm93OmFmdGVye1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuXG4gICAgLnN0YXR1c3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuc3F1YXJle1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgIH1cblxuICAgIC5zcXVhcmU6Zm9jdXN7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgLmtiZC1uYXZpZ2F0aW9uIC5zcXVhcmU6Zm9jdXN7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgfVxuXG4gICAgLmtiZC1uYXZpZ2F0aW9uIC5zcXVhcmU6Zm9jdXN7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgfVxuXG4gICAgLmdhbWV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgLmdhbWUtaW5mb3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuYH08L3N0eWxlPjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=