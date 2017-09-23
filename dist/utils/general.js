'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameSource = exports.nodeShifter = exports.getSourceFromBody = exports.getBody = exports.getSource = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jscodeshift = require('jscodeshift');

var _jscodeshift2 = _interopRequireDefault(_jscodeshift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  tabWidth: 4,
  reuseWhitespace: false,
  quote: 'single'
};

const getSource = exports.getSource = ast => typeof ast.toSource === 'function' ? ast.toSource() : (0, _jscodeshift2.default)(ast).toSource(options);

const getBody = exports.getBody = srcAst => [...srcAst.find('Program').get().value.body];

const getSourceFromBody = exports.getSourceFromBody = (srcAst, body = []) => {
  srcAst.find('Program').get().value.body = body;
  return getSource(srcAst);
};

const nodeShifter = exports.nodeShifter = (linesDown = 1, linesUp = 0) => node => _extends({}, node, {
  loc: _extends({}, node.loc, {
    start: _extends({}, node.loc.start, {
      line: node.loc.start.line - linesUp + linesDown
    }),
    end: _extends({}, node.loc.end, {
      line: node.loc.end.line - linesUp + linesDown
    })
  })
});

const renameSource = exports.renameSource = (newName = 'foo') => node => _extends({}, node, {
  source: _extends({}, node.source, {
    raw: `'${newName}'`,
    rawValue: newName,
    value: newName
  })
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0YWJXaWR0aCIsInJldXNlV2hpdGVzcGFjZSIsInF1b3RlIiwiZ2V0U291cmNlIiwiYXN0IiwidG9Tb3VyY2UiLCJnZXRCb2R5Iiwic3JjQXN0IiwiZmluZCIsImdldCIsInZhbHVlIiwiYm9keSIsImdldFNvdXJjZUZyb21Cb2R5Iiwibm9kZVNoaWZ0ZXIiLCJsaW5lc0Rvd24iLCJsaW5lc1VwIiwibm9kZSIsImxvYyIsInN0YXJ0IiwibGluZSIsImVuZCIsInJlbmFtZVNvdXJjZSIsIm5ld05hbWUiLCJzb3VyY2UiLCJyYXciLCJyYXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLFVBQVU7QUFDZEMsWUFBVSxDQURJO0FBRWRDLG1CQUFpQixLQUZIO0FBR2RDLFNBQU87QUFITyxDQUFoQjs7QUFNTyxNQUFNQyxnQ0FBWUMsT0FBUSxPQUFPQSxJQUFJQyxRQUFYLEtBQXdCLFVBQXhCLEdBQXFDRCxJQUFJQyxRQUFKLEVBQXJDLEdBQXNELDJCQUFFRCxHQUFGLEVBQU9DLFFBQVAsQ0FBZ0JOLE9BQWhCLENBQWhGOztBQUVBLE1BQU1PLDRCQUFVQyxVQUFVLENBQUMsR0FBR0EsT0FBT0MsSUFBUCxDQUFZLFNBQVosRUFBdUJDLEdBQXZCLEdBQTZCQyxLQUE3QixDQUFtQ0MsSUFBdkMsQ0FBMUI7O0FBRUEsTUFBTUMsZ0RBQW9CLENBQUNMLE1BQUQsRUFBU0ksT0FBTyxFQUFoQixLQUF1QjtBQUN0REosU0FBT0MsSUFBUCxDQUFZLFNBQVosRUFBdUJDLEdBQXZCLEdBQTZCQyxLQUE3QixDQUFtQ0MsSUFBbkMsR0FBMENBLElBQTFDO0FBQ0EsU0FBT1IsVUFBVUksTUFBVixDQUFQO0FBQ0QsQ0FITTs7QUFLQSxNQUFNTSxvQ0FBYyxDQUFDQyxZQUFZLENBQWIsRUFBZ0JDLFVBQVUsQ0FBMUIsS0FBZ0NDLHFCQUN0REEsSUFEc0Q7QUFFekRDLG9CQUNLRCxLQUFLQyxHQURWO0FBRUVDLHdCQUNLRixLQUFLQyxHQUFMLENBQVNDLEtBRGQ7QUFFRUMsWUFBTUgsS0FBS0MsR0FBTCxDQUFTQyxLQUFULENBQWVDLElBQWYsR0FBc0JKLE9BQXRCLEdBQWdDRDtBQUZ4QyxNQUZGO0FBTUVNLHNCQUNLSixLQUFLQyxHQUFMLENBQVNHLEdBRGQ7QUFFRUQsWUFBTUgsS0FBS0MsR0FBTCxDQUFTRyxHQUFULENBQWFELElBQWIsR0FBb0JKLE9BQXBCLEdBQThCRDtBQUZ0QztBQU5GO0FBRnlELEVBQXBEOztBQWVBLE1BQU1PLHNDQUFlLENBQUNDLFVBQVUsS0FBWCxLQUFxQk4scUJBQzVDQSxJQUQ0QztBQUUvQ08sdUJBQ0tQLEtBQUtPLE1BRFY7QUFFRUMsU0FBTSxJQUFHRixPQUFRLEdBRm5CO0FBR0VHLGNBQVVILE9BSFo7QUFJRVosV0FBT1k7QUFKVDtBQUYrQyxFQUExQyIsImZpbGUiOiJnZW5lcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGogZnJvbSAnanNjb2Rlc2hpZnQnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHRhYldpZHRoOiA0LFxyXG4gIHJldXNlV2hpdGVzcGFjZTogZmFsc2UsXHJcbiAgcXVvdGU6ICdzaW5nbGUnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3VyY2UgPSBhc3QgPT4gKHR5cGVvZiBhc3QudG9Tb3VyY2UgPT09ICdmdW5jdGlvbicgPyBhc3QudG9Tb3VyY2UoKSA6IGooYXN0KS50b1NvdXJjZShvcHRpb25zKSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCb2R5ID0gc3JjQXN0ID0+IFsuLi5zcmNBc3QuZmluZCgnUHJvZ3JhbScpLmdldCgpLnZhbHVlLmJvZHldXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U291cmNlRnJvbUJvZHkgPSAoc3JjQXN0LCBib2R5ID0gW10pID0+IHtcclxuICBzcmNBc3QuZmluZCgnUHJvZ3JhbScpLmdldCgpLnZhbHVlLmJvZHkgPSBib2R5XHJcbiAgcmV0dXJuIGdldFNvdXJjZShzcmNBc3QpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub2RlU2hpZnRlciA9IChsaW5lc0Rvd24gPSAxLCBsaW5lc1VwID0gMCkgPT4gbm9kZSA9PiAoe1xyXG4gIC4uLm5vZGUsXHJcbiAgbG9jOiB7XHJcbiAgICAuLi5ub2RlLmxvYyxcclxuICAgIHN0YXJ0OiB7XHJcbiAgICAgIC4uLm5vZGUubG9jLnN0YXJ0LFxyXG4gICAgICBsaW5lOiBub2RlLmxvYy5zdGFydC5saW5lIC0gbGluZXNVcCArIGxpbmVzRG93blxyXG4gICAgfSxcclxuICAgIGVuZDoge1xyXG4gICAgICAuLi5ub2RlLmxvYy5lbmQsXHJcbiAgICAgIGxpbmU6IG5vZGUubG9jLmVuZC5saW5lIC0gbGluZXNVcCArIGxpbmVzRG93blxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW5hbWVTb3VyY2UgPSAobmV3TmFtZSA9ICdmb28nKSA9PiBub2RlID0+ICh7XHJcbiAgLi4ubm9kZSxcclxuICBzb3VyY2U6IHtcclxuICAgIC4uLm5vZGUuc291cmNlLFxyXG4gICAgcmF3OiBgJyR7bmV3TmFtZX0nYCxcclxuICAgIHJhd1ZhbHVlOiBuZXdOYW1lLFxyXG4gICAgdmFsdWU6IG5ld05hbWVcclxuICB9XHJcbn0pXHJcblxyXG4iXX0=