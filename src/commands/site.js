export default function site(args) {
  if (!args[0]) return "Usage: site <url>";
  let url = args[0];
  if (!url.startsWith("http")) {
    url = `https://${url}`;
  }
  window.open(url, "_blank");
  return "Opened ${url}";
}
