"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.default = exports.data = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _chart = require("chart.js");

var _reactChartjs = require("react-chartjs-2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chart.Chart.register(_chart.CategoryScale, _chart.LinearScale, _chart.BarElement, _chart.Title, _chart.Tooltip, _chart.Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    }
  }
};
exports.options = options;
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [{
    label: "Dataset 1",
    data: [864, 976, 591, 419, 395, 379, 42],
    backgroundColor: "rgba(255, 99, 132, 0.5)"
  }, {
    label: "Dataset 2",
    data: [764, 876, 491, 319, 295, 279, 32],
    backgroundColor: "rgba(53, 162, 235, 0.5)"
  }]
};
exports.data = data;

const MainApp = props => {
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 2,
    m: 0
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    options: options,
    data: data
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    options: options,
    data: data
  })))));
};

var _default = MainApp;
exports.default = _default;