"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isFalsy = function isFalsy(value) {
  return value === false || value === 0 || value === '' || value === null || value === undefined;
};

function useValidatedInput(defaultValue, validator) {
  var validateImmediately = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(validateImmediately),
      _useState4 = _slicedToArray(_useState3, 2),
      touched = _useState4[0],
      setTouched = _useState4[1];

  var validationMessage = validator(value);

  var setValueAndTouch = function setValueAndTouch(newValue) {
    setTouched(true);
    setValue(newValue);
  };

  return {
    value: value,
    onBlur: function onBlur() {
      return setTouched(true);
    },
    onChange: function onChange(event) {
      return setValueAndTouch(event.target.value);
    },
    invalid: touched && !isFalsy(validationMessage),
    // TODO support async/promise
    feedback: validationMessage
  };
}

;
var _default = useValidatedInput;
exports["default"] = _default;