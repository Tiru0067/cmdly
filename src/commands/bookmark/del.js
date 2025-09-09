import { getBookmarks, saveBookmarks } from "./helpers";

export default function del(args) {
  const [name] = args;
  if (!name) return "Usage: \nbookmark delete <name>";

  let bookmarks = getBookmarks();
  const initializeLength = bookmarks.length;
  bookmarks = bookmarks.filter((b) => b.name !== name);
  saveBookmarks(bookmarks);

  return bookmarks.length < initializeLength
    ? `Deleted bookmark: ${name}`
    : `No bookmark found with name: ${name}`;
}
