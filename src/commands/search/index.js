import { getEngines, getDefaultEngine, setDefaultEngine } from "./engines";
import add from "./add";
import edit from "./edit";
import del from "./del";
import help from "./help";
import list from "./list";

const flags = {
  "-L": list,
  "--list-engines": list,
  "-D": setDefaultEngine,
  "--set-default": setDefaultEngine,
  "-a": add,
  "--add": add,
  "-e": edit,
  "--edit": edit,
  "-d": del,
  "--delete": del,
  "-h": help,
  "--help": help,
};

export default function search(args) {
  if (!args.length)
    return `Error: missing arguments
Usage:
  search <query> | search <engine> <query>
  Run 'search --help' for more information.`;

  const flag = args[0];
  const rest = args.slice(1);

  if (flags[flag]) return flags[flag](rest);

  // No flag? treat as search query
  const engines = getEngines();
  let engine = engines.find((e) => e.name === flag);
  let query = rest.join(" ");

  if (!engine || !query) {
    engine = getDefaultEngine();
    query = args.join(" ");
  }

  window.open(`${engine.url}${encodeURIComponent(query)}`, "_blank");

  return `Searching for: ${query}`;
}
