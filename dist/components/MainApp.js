"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _Container = _interopRequireDefault(require("@mui/material/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainApp = props => {
  return /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sx: {
      bgcolor: "blue"
    }
  }, "MAIN"), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sx: {
      bgcolor: "violet"
    }
  }, "APP")));
};

var _default = MainApp;
exports.default = _default;