// bookmark/help.js
const bookmarkHelp = `Usage: bookmark <command> [options]

Commands:
  create <name> <url>          Create a new bookmark
  add <name> <url>             Alias for create
  edit <name> [--name newName] [--url newUrl]
                               Edit an existing bookmark
  delete <name>                Delete a bookmark
  del <name>                   Alias for delete
  list                         Show all bookmarks
  help                         Show this help message`;

export default function help() {
  return bookmarkHelp;
}
