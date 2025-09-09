export const navigateHistory = (key, history, historyIndex) => {
  if (history.length === 0) return { newIndex: historyIndex, newInput: "" };

  if (key === "ArrowUp") {
    const newIndex =
      historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
    return { newIndex, newInput: history[newIndex] };
  }

  if (key === "ArrowDown") {
    const newIndex =
      historyIndex === -1 ? -1 : Math.min(history.length - 1, historyIndex + 1);

    const newInput = newIndex === -1 ? "" : history[newIndex];
    return { newIndex, newInput };
  }

  return { newIndex: historyIndex, newInput: "" };
};
