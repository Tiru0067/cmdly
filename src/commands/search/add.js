import { normalizeUrl, isValidName } from "../../utils/helpers";
import { getEngines, saveEngines } from "./engines";

// Usage message for invalid arguments
const usageMsg = `Usage:
  search -a | --add <name> <url>
`;

export default function add(args) {
  // Ensure exactly 2 arguments are passed (name + url)
  if (args.length !== 2) {
    return `Error: Invalid number of arguments for --add\n\n${usageMsg}
    `;
  }
  let [name, url] = args;

  // Validate engine name against allowed pattern
  const valid = isValidName(name);
  if (valid !== true) return valid;

  // Normalize the provided url (adds https://)
  url = normalizeUrl(url);

  // Load existing engines
  let engines = getEngines();

  // Check for duplicates: same name or same URL
  const existing = engines.find((e) => e.name == name || e.url == url);
  if (existing) {
    if (existing.name === name) {
      return `Error: Engine with name ${name} already exists.`;
    }
    if (existing.url === url) {
      return `Error: Engine with url ${url} already exists.`;
    }
  }

  // Add new engine
  const newEngine = { name, url, default: false };
  engines.push(newEngine);
  saveEngines(engines);

  return `Success: Engine ${name} added.`;
}
