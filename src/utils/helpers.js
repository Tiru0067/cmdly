/**
 * Validates a search engine name.
 * Rules:
 * 1. Must start with a letter or number.
 * 2. Can contain letters, numbers, hyphens (-), or underscores (_) in the middle.
 * 3. Must end with a letter or number (cannot end with - or _).
 * 4. Case-insensitive.
 */

export function isValidName(name) {
  if (!name) return "Error: Engine name cannot be empty.";
  if (name.length > 15)
    return "Error: Engine name must be 15 characters or fewer.";
  const regex = /^[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?$/i;
  return regex.test(name)
    ? true
    : "Invalid engine name. Use only letters, numbers, '-' or '_', and start/end with a letter or number.";
}

// ----- url helper -----
export function normalizeUrl(url) {
  if (!url) return "";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
}
