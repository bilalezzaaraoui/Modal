"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _lib = require("./lib");

var _jsxFileName = "/Users/bilalezzaaraoui/Modal/src/index.js";

const App = () => /*#__PURE__*/_react.default.createElement("div", {
  style: {
    width: 640,
    margin: "15px auto"
  },
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, /*#__PURE__*/_react.default.createElement("h1", {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, "Hello React"), /*#__PURE__*/_react.default.createElement(_lib.DateInput, {
  name: "ok",
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}));

(0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(App, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 8
  }
}), document.getElementById("root"));