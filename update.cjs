
const fs = require("fs");

// 1. Update src/lib/locations.ts
let locationsFile = fs.readFileSync("src/lib/locations.ts", "utf8");

// Replace timings globally in locations
locationsFile = locationsFile.replace(/hours: \"[^\"]+\"/g, "hours: \"Monday – Saturday: 7:00 AM – 12:30 PM & 5:00 PM – 9:00 PM, Sunday: Closed\"");

// Helper to update location
function updateLoc(slug, name, address, newSlug) {
  let regex = new RegExp("{([^{}]*slug: \"" + slug + "\"[^{}]*)}", "g");
  locationsFile = locationsFile.replace(regex, (match, inner) => {
    let replaced = match;
    if (newSlug) replaced = replaced.replace("slug: \"" + slug + "\"", "slug: \"" + newSlug + "\"");
    replaced = replaced.replace(/name: \"[^\"]+\"/, "name: \"" + name + "\"");
    replaced = replaced.replace(/address: \"[^\"]+\"/, "address: \"" + address + "\"");
    return replaced;
  });
}

// Ensure proper spacing and escaping
updateLoc("punjabi-bagh", "Punjabi Bagh", "NWA 10, Club Road, Punjabi Bagh, Delhi – 110026");
updateLoc("rajouri-garden", "Rajouri Garden", "WZ 153, Next to Cambridge Foundation School, Block J, Rajouri Garden, New Delhi – 110027");
updateLoc("paschim-vihar", "Paschim Vihar", "A, Pizza Hut, Building 1, Shubham Enclave, Reserve Bank Enclave, Paschim Vihar, Delhi – 110087");
updateLoc("janakpuri", "Janak Puri", "C1/3, Block C1, Janak Puri, New Delhi – 110058, Opposite Mata Chandan Devi Hospital", "janak-puri");
updateLoc("kirti-nagar", "Kirti Nagar", "42, Basement, Opposite Singh Chicken, DLE Industrial Area, Kirti Nagar, New Delhi – 110015");
updateLoc("prashant-vihar", "Rohini", "D13, 1st Floor, Prashant Vihar, Near Axis Bank, Sector 14, Rohini, New Delhi – 110085", "rohini");
updateLoc("dwarka", "Dwarka", "HOD Building, Basement, Parmanand Colony, Block B, Sector 12, Dwarka, New Delhi – 110078");
updateLoc("vikas-puri", "Vikas Puri", "139, H1 Block, Vikas Puri, New Delhi – 110018");

// Update image keys if we changed slugs
locationsFile = locationsFile.replace(/locations\[\"janakpuri\"\]/g, "locations[\"janak-puri\"]");
locationsFile = locationsFile.replace(/locations\[\"prashant-vihar\"\]/g, "locations[\"rohini\"]");

fs.writeFileSync("src/lib/locations.ts", locationsFile);

// 2. Update images.ts
let imagesFile = fs.readFileSync("src/lib/images.ts", "utf8");
imagesFile = imagesFile.replace(/janakpuri:/g, "\"janak-puri\":");
imagesFile = imagesFile.replace(/\"prashant-vihar\":/g, "\"rohini\":");
fs.writeFileSync("src/lib/images.ts", imagesFile);

// 3. Update trainers.ts
let trainersFile = fs.readFileSync("src/lib/trainers.ts", "utf8");
trainersFile = trainersFile.replace(/Janakpuri/g, "Janak Puri");
trainersFile = trainersFile.replace(/Prashant Vihar/g, "Rohini");
fs.writeFileSync("src/lib/trainers.ts", trainersFile);

// 4. Update FAQ.tsx
let faqFile = fs.readFileSync("src/components/site/FAQ.tsx", "utf8");
faqFile = faqFile.replace(/Prashant Vihar/g, "Rohini");
faqFile = faqFile.replace(/6:00 am – 10:00 pm, seven days a week\. Personal training slots run from 5:30 am/, "Monday – Saturday: 7:00 AM – 12:30 PM & 5:00 PM – 9:00 PM, Sunday: Closed");
fs.writeFileSync("src/components/site/FAQ.tsx", faqFile);

// 5. Update LocationPageView.tsx
let locationPageViewFile = fs.readFileSync("src/components/site/LocationPageView.tsx", "utf8");
locationPageViewFile = locationPageViewFile.replace(/Personal training slots begin as early as 5:30 am on request./, "");
fs.writeFileSync("src/components/site/LocationPageView.tsx", locationPageViewFile);

// 6. Update locations.$location.tsx (Schema.org hours)
let locRouteFile = fs.readFileSync("src/routes/locations.$location.tsx", "utf8");
locRouteFile = locRouteFile.replace(/openingHours: \"Mo-Su 06:00-22:00\"/, "openingHours: \"Mo-Sa 07:00-12:30, 17:00-21:00\"");
fs.writeFileSync("src/routes/locations.$location.tsx", locRouteFile);

// 7. Update ChatBot.tsx and others that might have "Prashant Vihar"
let chatBotFile = fs.readFileSync("src/components/site/ChatBot.tsx", "utf8");
chatBotFile = chatBotFile.replace(/Prashant Vihar/g, "Rohini");
chatBotFile = chatBotFile.replace(/Janakpuri/g, "Janak Puri");
chatBotFile = chatBotFile.replace(/6:00 am – 10:00 pm, seven days a week/, "Monday – Saturday: 7:00 AM – 12:30 PM & 5:00 PM – 9:00 PM, Sunday: Closed");
fs.writeFileSync("src/components/site/ChatBot.tsx", chatBotFile);

let testimonialsFile = fs.readFileSync("src/components/site/Testimonials.tsx", "utf8");
testimonialsFile = testimonialsFile.replace(/Prashant Vihar/g, "Rohini");
fs.writeFileSync("src/components/site/Testimonials.tsx", testimonialsFile);

let locationsIndexFile = fs.readFileSync("src/routes/locations.index.tsx", "utf8");
locationsIndexFile = locationsIndexFile.replace(/Prashant Vihar/g, "Rohini");
locationsIndexFile = locationsIndexFile.replace(/Janakpuri/g, "Janak Puri");
fs.writeFileSync("src/routes/locations.index.tsx", locationsIndexFile);

let aboutFile = fs.readFileSync("src/routes/about.tsx", "utf8");
aboutFile = aboutFile.replace(/Prashant Vihar/g, "Rohini");
aboutFile = aboutFile.replace(/Janakpuri/g, "Janak Puri");
fs.writeFileSync("src/routes/about.tsx", aboutFile);

console.log("Updated addresses, timings, and names.");

