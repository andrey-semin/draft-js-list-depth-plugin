export default editorState => {
  const selection = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const blockStartKey = selection.getStartKey();

  return contentState.getBlockMap().get(blockStartKey);
};
