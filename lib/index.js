'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var _utils = require('./utils');

var handleReturnForListItem = function handleReturnForListItem(editorState, block) {
  var depth = block.getDepth();
  if (depth > 0) {
    return (0, _utils.decreaseBlockDepth)(editorState, block);
  }
  return (0, _utils.changeBlockType)(editorState);
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { maxDepth: 4 };
  return {
    handleReturn: function handleReturn(event, editorState, _ref) {
      var setEditorState = _ref.setEditorState;

      var block = (0, _utils.getSelectedBlock)(editorState);

      if ((0, _utils.isEmptyListItem)(block)) {
        var newEditorState = handleReturnForListItem(editorState, block);
        setEditorState(newEditorState);
        return 'handled';
      }

      return 'not-handled';
    },
    onTab: function onTab(event, _ref2) {
      var setEditorState = _ref2.setEditorState,
          getEditorState = _ref2.getEditorState;
      var maxDepth = options.maxDepth;

      var editorState = getEditorState();

      setEditorState(_draftJs.RichUtils.onTab(event, editorState, maxDepth));
    }
  };
};