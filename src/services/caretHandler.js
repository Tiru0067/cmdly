// helper: move caret to end after React sets text
export const placeCaretAtEnd = (el) => {
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
};
