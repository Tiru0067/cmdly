import { getEngines, saveEngines } from "./engines";

export default function del(args) {
  const [name] = args;
  if (!name) return `Usage: search -d /--delete <name>`;
  const engines = getEngines();
  const target = engines.find((e) => e.name === name);
  if (!target) return `Error: Engine "${name}" not found.`;
  if (target.default) return `Error: Cannot delete default engine`;
  const UpdatedEngines = engines.filter((e) => e.name !== name);
  saveEngines(UpdatedEngines);
  return `Engine ${name} is deleted`;
}
