import { EditorState, RichUtils } from 'draft-js';

export default editorState =>
  EditorState.push(
    editorState,
    RichUtils.tryToRemoveBlockStyle(editorState),
    'change-block-type'
  );
