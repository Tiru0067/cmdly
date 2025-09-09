import { getBookmarks, saveBookmarks, normalizeUrl } from "./helpers";

export default function create(args) {
  let [name, url] = args;
  if (!name || !url) return "Usage:\nbookmark create <name> <url>";
  url = normalizeUrl(url);
  const bookmarks = getBookmarks();
  bookmarks.push({ name, url });
  saveBookmarks(bookmarks);
  return `Bookmark added:\n${name} -> ${url}`;
}
