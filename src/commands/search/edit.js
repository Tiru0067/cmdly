import { normalizeUrl, isValidName } from "../../utils/helpers";
import { getEngines, saveEngines } from "./engines";

const errorMsg = `Error: missing arguments for --edit

Usage:
  search -e | --edit <oldName> [--name <newName>] [--url <newUrl>]
  At least one of --name or --url must be provided.

Run 'search --help' for more information.
`;

export default function edit(args) {
  const oldName = args[0];
  if (!oldName) return errorMsg;

  const engines = getEngines();
  const oldEngine = engines.find((e) => e.name === oldName);
  if (!oldEngine) return `No engine found with name: ${oldName}`;
  let newName;

  let changed = false;

  // parse optional flags
  for (let i = 1; i < args.length; i++) {
    if (args[i] === "--name") {
      newName = args[i + 1];
      if (oldName === newName) {
        return "The new name is the same as the current name.";
      }
      const valid = isValidName(newName);
      if (!valid) return valid;
      oldEngine.name = newName;
      changed = true;
      i++;
    } else if (args[i] === "--url") {
      const newUrl = args[i + 1];
      if (oldEngine.url === newUrl) {
        return "The new url is the same as the current url.";
      }
      if (!newUrl || newUrl.startsWith("--")) {
        return "Error: --url flag requires a value";
      }
      oldEngine.url = normalizeUrl(newUrl);
      changed = true;
      i++;
    }
  }

  if (!changed) {
    return "Nothing to update. Use --name and / or --url flags";
  }

  saveEngines(engines);
  return `Success: Engine ${newName || oldName} updated.`;
}
