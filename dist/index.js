"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _TextGenerator = _interopRequireDefault(require("./TextGenerator.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const root = _client.default.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_TextGenerator.default, null)));