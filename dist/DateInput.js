"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!

var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = "".concat(yyyy, "-").concat(mm, "-").concat(dd);

var DateInput = function DateInput(props) {
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    name: props.name,
    max: today,
    required: true
  });
};

var _default = DateInput;
exports.default = _default;