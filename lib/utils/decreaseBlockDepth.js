'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

exports.default = function (editorState, block) {
  var blockKey = block.getKey();
  var depth = block.getDepth();
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();

  var newBlock = block.set('depth', depth - 1);
  var newBlockMap = blockMap.set(blockKey, newBlock);

  return _draftJs.EditorState.push(editorState, contentState.merge({ blockMap: newBlockMap }), 'adjust-depth');
};