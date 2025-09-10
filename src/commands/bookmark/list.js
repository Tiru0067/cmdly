import { getBookmarks } from "./helpers";

export default function list() {
  const bookmarks = getBookmarks();
  if (bookmarks.length === 0) return "No bookmarks found!";
  const html = bookmarks
    .map(
      (b, i) => `<a href="${b.url}" target="_blank" >${i + 1}. ${b.name}</a>`
    )
    .join("<br>");
  return { html }; // return Html output for clickable links
}
