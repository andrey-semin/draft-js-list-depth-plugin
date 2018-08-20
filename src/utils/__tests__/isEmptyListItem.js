import { EditorState, convertFromRaw } from 'draft-js';
import isEmptyListItem from '../isEmptyListItem';

const getFirstBlock = editorState => {
  const contentState = editorState.getCurrentContent();
  return contentState.getFirstBlock();
};

const buildRawContentStateObject = (text, type) => ({
  entityMap: {},
  blocks: [
    {
      key: 'item1',
      text,
      type,
      depth: 0
    }
  ]
});

describe('utils/isEmptyListItem', () => {
  it('should return true for empty unordered list item', () => {
    const rawContentState = buildRawContentStateObject(
      '',
      'unordered-list-item'
    );
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const block = getFirstBlock(editorState);
    const result = isEmptyListItem(block);
    expect(result).toBeTruthy;
  });

  it('should return true for empty ordered list item', () => {
    const rawContentState = buildRawContentStateObject('', 'ordered-list-item');
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const block = getFirstBlock(editorState);
    const result = isEmptyListItem(block);
    expect(result).toBeTruthy;
  });

  it('should return false for non-empty unordered list item', () => {
    const rawContentState = buildRawContentStateObject(
      'some text',
      'unordered-list-item'
    );
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const block = getFirstBlock(editorState);
    const result = isEmptyListItem(block);
    expect(result).toBeFalsy;
  });

  it('should return false for non-empty ordered list item', () => {
    const rawContentState = buildRawContentStateObject(
      'some text',
      'ordered-list-item'
    );
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const block = getFirstBlock(editorState);
    const result = isEmptyListItem(block);
    expect(result).toBeFalsy;
  });

  it('should return false for non list item block', () => {
    const rawContentState = buildRawContentStateObject('some text', 'unstyled');
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const block = getFirstBlock(editorState);
    const result = isEmptyListItem(block);
    expect(result).toBeFalsy;
  });
});
