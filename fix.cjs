
const fs = require("fs");
const files = ["src/lib/locations.ts", "src/components/site/FAQ.tsx", "src/components/site/ChatBot.tsx"];
for (let file of files) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/Monday [^\s] Saturday: 7:00 AM [^\s] 12:30 PM & 5:00 PM [^\s] 9:00 PM/g, "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM");
  fs.writeFileSync(file, content);
}
let loc = fs.readFileSync("src/lib/locations.ts", "utf8");
loc = loc.replace(/name: "Prashant Vihar"/g, "name: \"Rohini\"");
fs.writeFileSync("src/lib/locations.ts", loc);

