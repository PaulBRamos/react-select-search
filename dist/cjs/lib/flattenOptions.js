"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenOptions;

var _getGroupId = _interopRequireDefault(require("./getGroupId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flattenOptions(options) {
  if (!Array.isArray(options)) {
    return [];
  }

  const nextOptions = [];
  options.forEach((option, index) => {
    if ('type' in option && option.type === 'group') {
      const id = (0, _getGroupId.default)(option);
      option.items.forEach(groupOption => {
        const nextGroupOption = Object.assign({}, groupOption);
        nextGroupOption.groupId = id;
        nextGroupOption.groupName = option.name;
        nextOptions.push(nextGroupOption);
      });
    } else {
      nextOptions.push(Object.assign({}, option, {
        index
      }));
    }
  });
  return nextOptions;
}

;