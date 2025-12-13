const fs = require('fs');
const content = fs.readFileSync('src/utils/translations.ts', 'utf8');

// Extract ar and en objects
const arStart = content.indexOf('ar: {');
const arEnd = content.indexOf('\n  },\n  en:');
const enStart = content.indexOf('en: {');
const enEnd = content.lastIndexOf('}');

const arSection = content.substring(arStart, arEnd);
const enSection = content.substring(enStart, enEnd);

// Extract all keys from ar
const arKeys = new Set();
const arMatches = arSection.matchAll(/^\s*(\w+):/gm);
for (const match of arMatches) {
  arKeys.add(match[1]);
}

// Extract all keys from en
const enKeys = new Set();
const enMatches = enSection.matchAll(/^\s*(\w+):/gm);
for (const match of enMatches) {
  enKeys.add(match[1]);
}

console.log('Keys in AR but NOT in EN:');
let missing = 0;
for (const key of arKeys) {
  if (!enKeys.has(key)) {
    console.log(`  - ${key}`);
    missing++;
  }
}
console.log(`\nTotal missing in EN: ${missing}`);

console.log('\nKeys in EN but NOT in AR:');
let extra = 0;
for (const key of enKeys) {
  if (!arKeys.has(key)) {
    console.log(`  - ${key}`);
    extra++;
  }
}
console.log(`\nTotal extra in EN: ${extra}`);
