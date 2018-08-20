import { RichUtils } from 'draft-js'
import {
  getSelectedBlock,
  isEmptyListItem,
  decreaseBlockDepth,
  changeBlockType
} from './utils';

const handleReturnForListItem = (editorState, block) => {
  const depth = block.getDepth();
  if (depth > 0) {
    return decreaseBlockDepth(editorState, block);
  }
  return changeBlockType(editorState);
};

export default (options = { maxDepth: 4 }) => ({
  handleReturn: (event, editorState, { setEditorState }) => {
    const block = getSelectedBlock(editorState);

    if (isEmptyListItem(block)) {
      const newEditorState = handleReturnForListItem(editorState, block);
      setEditorState(newEditorState);
      return 'handled';
    }

    return 'not-handled';
  },
  onTab: (event, { setEditorState, getEditorState }) => {
    const { maxDepth } = options
    const editorState = getEditorState()

    setEditorState(RichUtils.onTab(event, editorState, maxDepth));
  }
});
