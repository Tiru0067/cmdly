const STORAGE_KEY = "termianl_bookmarks";

export function getBookmarks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveBookmarks(bookmarks) {
  const raw = localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  return raw ? JSON.parse(raw) : [];
}

export function normalizeUrl(url) {
  if (!url) return "";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
}
