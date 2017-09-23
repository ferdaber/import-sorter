'use strict';

var _jscodeshift = require('jscodeshift');

var _jscodeshift2 = _interopRequireDefault(_jscodeshift);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _general = require('./utils/general');

var _importTypes = require('./utils/import-types');

var _stringManipulations = require('./utils/string-manipulations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const source = _fs2.default.readFileSync(_path2.default.resolve('samples/sample-2.js')).toString(),
      src = (0, _jscodeshift2.default)(source),
      body = (0, _general.getBody)(src);

// console.log(getSourceFromBody(body))

// console.log(getImports(body))


const spacedBody = (0, _importTypes.getImports)(body).reduce((a, i) => [...a, i, ' '], []);

console.log((0, _stringManipulations.stripSemicolons)((0, _general.getSourceFromBody)(src, spacedBody)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb3VyY2UiLCJyZWFkRmlsZVN5bmMiLCJyZXNvbHZlIiwidG9TdHJpbmciLCJzcmMiLCJib2R5Iiwic3BhY2VkQm9keSIsInJlZHVjZSIsImEiLCJpIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLFNBQVMsYUFBR0MsWUFBSCxDQUFnQixlQUFLQyxPQUFMLENBQWEscUJBQWIsQ0FBaEIsRUFBcURDLFFBQXJELEVBQWY7QUFBQSxNQUNFQyxNQUFNLDJCQUFFSixNQUFGLENBRFI7QUFBQSxNQUVFSyxPQUFPLHNCQUFRRCxHQUFSLENBRlQ7O0FBSUE7O0FBRUE7OztBQUdBLE1BQU1FLGFBQWEsNkJBQVdELElBQVgsRUFBaUJFLE1BQWpCLENBQXdCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVLENBQUMsR0FBR0QsQ0FBSixFQUFPQyxDQUFQLEVBQVUsR0FBVixDQUFsQyxFQUFrRCxFQUFsRCxDQUFuQjs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLDBDQUFnQixnQ0FBa0JQLEdBQWxCLEVBQXVCRSxVQUF2QixDQUFoQixDQUFaIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGogZnJvbSAnanNjb2Rlc2hpZnQnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmltcG9ydCB7IGdldEJvZHksIGdldFNvdXJjZUZyb21Cb2R5IH0gZnJvbSAnLi91dGlscy9nZW5lcmFsJ1xyXG5pbXBvcnQgeyBnZXRJbXBvcnRzIH0gZnJvbSAnLi91dGlscy9pbXBvcnQtdHlwZXMnXHJcbmltcG9ydCB7IHN0cmlwU2VtaWNvbG9ucyB9IGZyb20gJy4vdXRpbHMvc3RyaW5nLW1hbmlwdWxhdGlvbnMnXHJcblxyXG5jb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKCdzYW1wbGVzL3NhbXBsZS0yLmpzJykpLnRvU3RyaW5nKCksXHJcbiAgc3JjID0gaihzb3VyY2UpLFxyXG4gIGJvZHkgPSBnZXRCb2R5KHNyYylcclxuXHJcbi8vIGNvbnNvbGUubG9nKGdldFNvdXJjZUZyb21Cb2R5KGJvZHkpKVxyXG5cclxuLy8gY29uc29sZS5sb2coZ2V0SW1wb3J0cyhib2R5KSlcclxuXHJcblxyXG5jb25zdCBzcGFjZWRCb2R5ID0gZ2V0SW1wb3J0cyhib2R5KS5yZWR1Y2UoKGEsIGkpID0+IFsuLi5hLCBpLCAnICddLCBbXSlcclxuXHJcbmNvbnNvbGUubG9nKHN0cmlwU2VtaWNvbG9ucyhnZXRTb3VyY2VGcm9tQm9keShzcmMsIHNwYWNlZEJvZHkpKSlcclxuIl19