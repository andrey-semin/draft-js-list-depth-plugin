"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState) {
  var selection = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var blockStartKey = selection.getStartKey();

  return contentState.getBlockMap().get(blockStartKey);
};