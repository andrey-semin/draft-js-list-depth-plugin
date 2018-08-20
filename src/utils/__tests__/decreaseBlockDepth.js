import { EditorState, convertFromRaw } from 'draft-js';
import decreaseBlockDepth from '../decreaseBlockDepth';

const rawContentState = {
  entityMap: {},
  blocks: [
    {
      key: 'item1',
      text: 'Some text',
      type: 'unordered-list-item',
      depth: 1
    }
  ]
};

const getFirstBlock = editorState => {
  const contentState = editorState.getCurrentContent();
  return contentState.getFirstBlock();
};

describe('utils/decreaseBlockDepth', () => {
  it('should decrease block depth', () => {
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const block = getFirstBlock(editorState);
    const newEditorState = decreaseBlockDepth(editorState, block);
    const updatedFirstBlock = getFirstBlock(newEditorState);
    const depth = updatedFirstBlock.getDepth();
    expect(depth).toEqual(0);
  });
});
