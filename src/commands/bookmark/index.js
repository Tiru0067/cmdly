import create from "./create";
import list from "./list";
import edit from "./edit";
import del from "./del";
import help from "./help";

const commands = { create, add: create, edit, delete: del, del, list, help };

export default function bookmark(args) {
  const cmd = args[0];
  if (!cmd) return `No subcommand provided.\n\n${help()}`;
  if (!commands[cmd]) return `Unknown subcommand "${cmd}".\n\n${help()}`;
  return commands[cmd](args.slice(1));
}
