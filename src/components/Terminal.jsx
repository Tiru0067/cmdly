import { useRef, useState } from "react";
import { runCommand } from "../services/CommandHandler";
import { navigateHistory } from "../services/historyHander";
import { placeCaretAtEnd } from "../services/caretHandler";

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.currentTarget.textContent);
  };

  const setDivContent = (value) => {
    setInput(value);
    if (inputRef.current) {
      inputRef.current.textContent = value;
      placeCaretAtEnd(inputRef.current);
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setLines([]);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() !== "") {
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(-1);
      }
      runCommand(input, setLines, lines);
      setDivContent("");
      return;
    }

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const { newIndex, newInput } = navigateHistory(
        e.key,
        history,
        historyIndex
      );
      setHistoryIndex(newIndex);
      setDivContent(newInput);
    }
  };

  return (
    <div
      className="w-full h-full overflow-y-auto font-mono no-scrollbar text-xs tabular md:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, i) =>
        line.type === "command" ? (
          <div key={i} className="whitespace-pre-wrap">
            <span>$ </span>
            <span>{line.value}</span>
          </div>
        ) : line.htmlOutput ? (
          // HTML output (like bookmark links)
          <div
            key={i}
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: line.value }}
          />
        ) : (
          // Plain text output (help, date, search)
          <div key={i} className="whitespace-pre-wrap">
            {line.value}
          </div>
        )
      )}

      {/* active typing line */}
      <div className="flex">
        <span className="mr-2">$ </span>
        <div
          ref={inputRef}
          contentEditable
          spellCheck={false}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          className="whitespace-pre-wrap break-all outline-none font-mono"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
