const STORAGE_KEY = "searchEngines";

const defaultEngines = [
  { name: "google", url: "https://www.google.com/search?q=", default: true },
  { name: "bing", url: "https://www.bing.com/search?q=", default: false },
  { name: "duckduckgo", url: "https://duckduckgo.com/?q=", default: false },
  { name: "yandex", url: "https://yandex.com/search/?text=", default: false },
  { name: "ecosia", url: "https://www.ecosia.org/search?q=", default: false },
  {
    name: "youtube",
    url: "https://www.youtube.com/results?search_query=",
    default: false,
  },
  { name: "reddit", url: "https://www.reddit.com/search/?q=" },
  {
    name: "wikipedia",
    url: "https://en.wikipedia.org/w/index.php?search=",
    default: false,
  },
];

function initEngines() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultEngines));
  }
}

export function getEngines() {
  initEngines();
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveEngines(engines) {
  const raw = localStorage.setItem(STORAGE_KEY, JSON.stringify(engines));
  return raw ? JSON.parse(raw) : [];
}

// ------ Default Engine helpers ------
export function getDefaultEngine() {
  initEngines();
  const engines = getEngines();
  const defaultEngine = engines.find((e) => e.default);
  return defaultEngine;
}

export function setDefaultEngine(args) {
  if (args.length !== 1) {
    return `Error: Invalid number of arguments for -D | --set-default\n\nUsage:\n\tsearch -D | --set-default <engine>`;
  }
  const [name] = args;
  const engines = getEngines();
  const target = engines.find((e) => e.name === name);
  console.log({ name, target });
  if (!target) return `Engine ${name} not found`;
  if (target.default) return `Engine ${name} is already the default`;
  const newEngines = engines.map((e) => ({ ...e, default: e.name === name }));
  saveEngines(newEngines);
  return `Default engine set to ${name}.`;
}
