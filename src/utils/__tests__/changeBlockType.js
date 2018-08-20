import { EditorState, convertFromRaw } from 'draft-js';
import changeBlockType from '../changeBlockType';

const rawContentState = {
  entityMap: {},
  blocks: [
    {
      key: 'item1',
      text: 'Some text',
      type: 'unordered-list-item',
      depth: 0
    }
  ]
};

describe('utils/changeBlockType', () => {
  it('should change block type to unstyled', () => {
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const newEditorState = changeBlockType(editorState);
    const contentState = newEditorState.getCurrentContent();
    const block = contentState.getFirstBlock();
    const blockType = block.getType();

    expect(blockType).toEqual('unstyled');
  });
});
