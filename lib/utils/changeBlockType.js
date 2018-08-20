'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

exports.default = function (editorState) {
  return _draftJs.EditorState.push(editorState, _draftJs.RichUtils.tryToRemoveBlockStyle(editorState), 'change-block-type');
};