const engines = [
  { name: "google", url: "https://www.google.com/search?q=", default: true },
  { name: "bing", url: "https://www.bing.com/search?q=" },
  { name: "duckduckgo", url: "https://duckduckgo.com/?q=" },
  { name: "yandex", url: "https://yandex.com/search/?text=" },
  { name: "ecosia", url: "https://www.ecosia.org/search?q=" },
  { name: "youtube", url: "https://www.youtube.com/results?search_query=" },
  { name: "reddit", url: "https://www.reddit.com/search/?q=" },
  { name: "wikipedia", url: "https://en.wikipedia.org/w/index.php?search=" },
];

export default function search(args) {
  if (!args.length) return "Usage: search <query> | search <engine> <query>";
  let [engineName, ...queryStrings] = args;
  let engine = engines.find((e) => e.name === engineName);
  let query = queryStrings.join(" ");

  if (!engine || !query) {
    engine = engines.find((e) => e.default);
    query = args.join(" ");
  }

  window.open(`${engine.url}${encodeURIComponent(query)}`, "_blank");

  return `Searching for: ${query}`;
}
