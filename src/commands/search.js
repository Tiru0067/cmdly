export default function search(args) {
  if (!args.length) return "Usage: search <query>";
  const query = args.join(" ");

  window.open(
    `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    "_blank"
  );

  return `Searching for: ${query}`;
}
