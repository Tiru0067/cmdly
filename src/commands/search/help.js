export default function help() {
  return `Usage:
  search <query>
  search <engine> <query>
  search [options]

Search Commands:
  search <query>                Search using the default engine
  search <engine> <query>       Search using the specified engine
                                (falls back to default if engine not found)

Management Commands:
  -a, --add <name> <url>        Add a new search engine
  -e, --edit <oldName> [--name <newName>] [--url <newUrl>]
                                Edit an existing engine
                                (at least one of --name or --url must be given)
  -d, --delete <name>           Delete a search engine
  -L, --list-engines            List all search engines (default highlighted)
  -D, --set-default <name>      Set default search engine

Options:
  -h, --help                    Show this help message and exit

Examples:
  search cats                   → Search "cats" using default engine
  search google cats            → Search "cats" using Google
  search -a ecosia "https://www.ecosia.org/search?q="
  search -e google --url "https://www.google.com/search?q="
  search -D duckduckgo
    `;
}
