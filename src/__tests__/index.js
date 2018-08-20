import { RichUtils, EditorState, convertFromRaw } from 'draft-js';
import createListDepthPlugin from '../index';

const plugin = createListDepthPlugin();
RichUtils.onTab = jest.fn();
const store = {
  setEditorState: jest.fn(),
  getEditorState: jest.fn()
};

describe('draft-js-list-depth-plugin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update editor state when onTab is called', () => {
    plugin.onTab({}, store);
    expect(store.getEditorState).toHaveBeenCalled();
    expect(RichUtils.onTab).toHaveBeenCalled();
    expect(store.setEditorState).toHaveBeenCalled();
  });

  it('should return `handled` and set new editor state', () => {
    const rawContentState = {
      entityMap: {},
      blocks: [
        {
          key: 'item1',
          text: '',
          type: 'unordered-list-item',
          depth: 1
        }
      ]
    };
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const result = plugin.handleReturn({}, editorState, store);

    expect(result).toEqual('handled');
    expect(store.setEditorState).toHaveBeenCalled();
  });

  it('should return `not-handled` and set new editor state', () => {
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
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const result = plugin.handleReturn({}, editorState, store);

    expect(result).toEqual('not-handled');
    expect(store.setEditorState).not.toHaveBeenCalled();
  });

  it('should return `not-handled` and set new editor state', () => {
    const rawContentState = {
      entityMap: {},
      blocks: [
        {
          key: 'item1',
          text: 'Some text',
          type: 'unstyled',
          depth: 1
        }
      ]
    };
    const editorState = EditorState.createWithContent(
      convertFromRaw(rawContentState)
    );
    const result = plugin.handleReturn({}, editorState, store);

    expect(result).toEqual('not-handled');
    expect(store.setEditorState).not.toHaveBeenCalled();
  });
});
