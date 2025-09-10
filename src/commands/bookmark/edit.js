import { getBookmarks, saveBookmarks, normalizeUrl } from "./helpers";

export default function edit(args) {
  const oldName = args[0];
  if (!oldName)
    return "Usage:\n  bookmark edit <oldName> [--name <newName>] [--url <newUrl>]";
  const bookmarks = getBookmarks();
  const bookmark = bookmarks.find((b) => b.name === oldName);
  if (!bookmark) return `No bookmark found with name: ${oldName}`;

  let changed = false;

  // parse optional flags
  for (let i = 1; i < args.length; i++) {
    if (args[i] === "--name") {
      const newName = args[i + 1];
      if (!newName || newName.startsWith("--")) {
        return "Error: --name flag requires a value";
      }
      bookmark.name = newName;
      changed = true;
      i++;
    } else if (args[i] === "--url") {
      const newUrl = args[i + 1];
      if (!newUrl || newUrl.startsWith("--")) {
        return "Error: --url flag requires a value";
      }
      bookmark.url = normalizeUrl(newUrl);
      changed = true;
      i++;
    }
  }
  if (!changed) {
    return "Nothing to update. Use --name and /or --url flags";
  }

  saveBookmarks(bookmarks);
  return `Updated bookmark: ${bookmark.name} -> ${bookmark.url}`;
}
