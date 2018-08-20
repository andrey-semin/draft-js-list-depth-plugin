import { EditorState } from 'draft-js';

export default (editorState, block) => {
  const blockKey = block.getKey();
  const depth = block.getDepth();
  const contentState = editorState.getCurrentContent();
  const blockMap = contentState.getBlockMap();

  const newBlock = block.set('depth', depth - 1);
  const newBlockMap = blockMap.set(blockKey, newBlock);

  return EditorState.push(
    editorState,
    contentState.merge({ blockMap: newBlockMap }),
    'adjust-depth'
  );
};
