const fs = require("fs");
const path = require("path");

// Read directory contents
const iconsDir = "./assets";
const icons = {};

fs.readdirSync(iconsDir).forEach(file => {
  if (file.endsWith(".svg")) {
    const content = fs.readFileSync(path.join(iconsDir, file), "utf-8");
    const name = file.toLowerCase().replace(/\.svg$/, "");
    icons[name] = content;
  }
});

// Convert icons to JSON string
const iconsJSON = JSON.stringify(icons);

// Read content of api/icons/index.go
const indexPath = "./api/icons/index.go";
let indexContent = fs.readFileSync(indexPath, "utf-8");

// Split the content into lines
const lines = indexContent.split("\n");

// Inject the JSON into line 18 (index 17)
lines[17] = `\n\tvar iconsJSON = \`${iconsJSON}\`\n`;

const modifiedContent = lines.join("\n");

// Write back to file
fs.writeFileSync(indexPath, modifiedContent, "utf-8");

console.log("Modified content saved to api/icons/index.go");
