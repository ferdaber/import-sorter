'use strict';

var _jscodeshift = require('jscodeshift');

var _jscodeshift2 = _interopRequireDefault(_jscodeshift);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _general = require('./utils/general');

var _importTypes = require('./utils/import-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const source = _fs2.default.readFileSync(_path2.default.resolve('samples/sample-2.js')).toString(),
      src = (0, _jscodeshift2.default)(source),
      body = (0, _general.getBody)(src);

const config = ['default', 'destructured-multi', 'destructured-single', 'namespace', 'unbound'];

console.log((0, _general.stripSemicolons)((0, _general.setSourceFromBody)(src, (0, _importTypes.importSorter)(true, config)((0, _general.stripLines)((0, _importTypes.getImports)(body))))));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb3VyY2UiLCJyZWFkRmlsZVN5bmMiLCJyZXNvbHZlIiwidG9TdHJpbmciLCJzcmMiLCJib2R5IiwiY29uZmlnIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUVBLE1BQU1BLFNBQVMsYUFBR0MsWUFBSCxDQUFnQixlQUFLQyxPQUFMLENBQWEscUJBQWIsQ0FBaEIsRUFBcURDLFFBQXJELEVBQWY7QUFBQSxNQUNFQyxNQUFNLDJCQUFFSixNQUFGLENBRFI7QUFBQSxNQUVFSyxPQUFPLHNCQUFRRCxHQUFSLENBRlQ7O0FBSUEsTUFBTUUsU0FBUyxDQUFDLFNBQUQsRUFBWSxvQkFBWixFQUFrQyxxQkFBbEMsRUFBeUQsV0FBekQsRUFBc0UsU0FBdEUsQ0FBZjs7QUFFQUMsUUFBUUMsR0FBUixDQUNFLDhCQUNFLGdDQUFrQkosR0FBbEIsRUFDRSwrQkFBYSxJQUFiLEVBQW1CRSxNQUFuQixFQUNFLHlCQUNFLDZCQUFXRCxJQUFYLENBREYsQ0FERixDQURGLENBREYsQ0FERiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqIGZyb20gJ2pzY29kZXNoaWZ0J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5pbXBvcnQgeyBnZXRCb2R5LCBzZXRTb3VyY2VGcm9tQm9keSwgc3RyaXBTZW1pY29sb25zLCBzdHJpcExpbmVzIH0gZnJvbSAnLi91dGlscy9nZW5lcmFsJ1xyXG5pbXBvcnQgeyBnZXRJbXBvcnRzLCBpbXBvcnRTb3J0ZXIgfSBmcm9tICcuL3V0aWxzL2ltcG9ydC10eXBlcydcclxuXHJcbmNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoJ3NhbXBsZXMvc2FtcGxlLTIuanMnKSkudG9TdHJpbmcoKSxcclxuICBzcmMgPSBqKHNvdXJjZSksXHJcbiAgYm9keSA9IGdldEJvZHkoc3JjKVxyXG5cclxuY29uc3QgY29uZmlnID0gWydkZWZhdWx0JywgJ2Rlc3RydWN0dXJlZC1tdWx0aScsICdkZXN0cnVjdHVyZWQtc2luZ2xlJywgJ25hbWVzcGFjZScsICd1bmJvdW5kJ11cclxuXHJcbmNvbnNvbGUubG9nKFxyXG4gIHN0cmlwU2VtaWNvbG9ucyhcclxuICAgIHNldFNvdXJjZUZyb21Cb2R5KHNyYyxcclxuICAgICAgaW1wb3J0U29ydGVyKHRydWUsIGNvbmZpZykoXHJcbiAgICAgICAgc3RyaXBMaW5lcyhcclxuICAgICAgICAgIGdldEltcG9ydHMoYm9keSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIClcclxuICApXHJcbilcclxuIl19