'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBody = exports.createSource = exports.createProgram = undefined;

var _jscodeshift = require('jscodeshift');

var _jscodeshift2 = _interopRequireDefault(_jscodeshift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProgram = exports.createProgram = function createProgram(body) {
  return _jscodeshift2.default.program(body);
};

var createSource = exports.createSource = function createSource(ast) {
  return typeof ast.toSource === 'function' ? ast.toSource() : (0, _jscodeshift2.default)(ast).toSource();
};

var getBody = exports.getBody = function getBody(src) {
  return src.find('Program').get().value.body;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQcm9ncmFtIiwicHJvZ3JhbSIsImJvZHkiLCJjcmVhdGVTb3VyY2UiLCJhc3QiLCJ0b1NvdXJjZSIsImdldEJvZHkiLCJzcmMiLCJmaW5kIiwiZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBQVEsc0JBQUVDLE9BQUYsQ0FBVUMsSUFBVixDQUFSO0FBQUEsQ0FBdEI7O0FBRUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU8sT0FBT0MsSUFBSUMsUUFBWCxLQUF3QixVQUF4QixHQUMvQkQsSUFBSUMsUUFBSixFQUQrQixHQUUvQiwyQkFBRUQsR0FBRixFQUFPQyxRQUFQLEVBRndCO0FBQUEsQ0FBckI7O0FBSUEsSUFBTUMsNEJBQVUsU0FBVkEsT0FBVTtBQUFBLFNBQU9DLElBQUlDLElBQUosQ0FBUyxTQUFULEVBQW9CQyxHQUFwQixHQUEwQkMsS0FBMUIsQ0FBZ0NSLElBQXZDO0FBQUEsQ0FBaEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaiBmcm9tICdqc2NvZGVzaGlmdCdcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9ncmFtID0gYm9keSA9PiBqLnByb2dyYW0oYm9keSlcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTb3VyY2UgPSBhc3QgPT4gdHlwZW9mIGFzdC50b1NvdXJjZSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gID8gYXN0LnRvU291cmNlKClcclxuICA6IGooYXN0KS50b1NvdXJjZSgpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Qm9keSA9IHNyYyA9PiBzcmMuZmluZCgnUHJvZ3JhbScpLmdldCgpLnZhbHVlLmJvZHlcclxuIl19