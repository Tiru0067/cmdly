import { getEngines } from "./engines";

export default function list() {
  const engines = getEngines();
  const html = engines
    .map((e, i) => `${i + 1}.${e.name} ${e.default ? "(default)" : ""}`)
    .join("\n");

  return { html };
}
