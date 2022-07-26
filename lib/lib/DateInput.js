"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/bilalezzaaraoui/Modal/src/lib/DateInput.js";
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!

const yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = `${yyyy}-${mm}-${dd}`;

const DateInput = props => {
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    name: props.name,
    max: today,
    required: true,
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  });
};

var _default = DateInput;
exports.default = _default;