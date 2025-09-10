function padRight(str, length) {
  return str + " ".repeat(Math.max(0, length - str.length));
}

export default function help() {
  const commands = [
    ["date", "Show current date and time"],
    ["site <url>", "Open a website in new tab"],
    ["search <query>", "Search Google"],
    ["bookmark", "Manage bookmarks (create, list and more)"],
    ["clear", "Clear the screen"],
    ["help", "Show this help message"],
  ];

  // find longest command for padding
  const maxLength = commands.reduce(
    (max, [cmd]) => Math.max(max, cmd.length),
    0
  );

  return (
    "Available commands:\n" +
    commands
      .map(([cmd, desc]) => `  ${padRight(cmd, maxLength + 2)}${desc}`)
      .join("\n")
  );
}
