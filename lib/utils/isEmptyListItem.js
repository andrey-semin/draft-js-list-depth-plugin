'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (block) {
  var text = block.getText();
  var hasEmptyText = text.length === 0;
  var blockType = block.getType();
  var isListItemBlock = blockType === 'unordered-list-item' || blockType === 'ordered-list-item';

  return isListItemBlock && hasEmptyText;
};