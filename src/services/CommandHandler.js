import { commands } from "../commands";

function normalizeOutput(text) {
  if (!text) return "";
  if (typeof text === "object" && text.clear) return text; // clear command
  return text; // plain text stays as-is
}

export function runCommand(input, setLines, lines) {
  const [cmd, ...args] = input.trim().split(/\s+/);
  let output;
  let htmlOutput = false;

  if (commands[cmd]) {
    try {
      output = commands[cmd](args);

      // If the command returned HTML (like bookmark list)
      if (typeof output === "object" && output.html) {
        htmlOutput = true;
        output = output.html;
      }
    } catch (err) {
      output = `Error: ${err.message}`;
    }
  } else {
    output = `${cmd}: command not found`;
  }

  if (output?.clear) {
    setLines([]);
    return;
  }

  setLines([
    ...lines,
    { type: "command", value: input },
    { type: "output", value: normalizeOutput(output), htmlOutput },
  ]);
}
