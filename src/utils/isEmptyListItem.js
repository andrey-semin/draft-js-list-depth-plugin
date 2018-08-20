export default block => {
  const text = block.getText();
  const hasEmptyText = text.length === 0;
  const blockType = block.getType();
  const isListItemBlock =
    blockType === 'unordered-list-item' || blockType === 'ordered-list-item';

  return isListItemBlock && hasEmptyText;
};
