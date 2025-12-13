// Extract only the first ar and the second en section
const lines = require('fs').readFileSync('src/utils/translations.ts', 'utf8').split('\n');

// Find ar and en section line numbers
let arStart = -1, arEnd = -1, en1Start = -1, en1End = -1, en2Start = -1, en2End = -1;
let braceCount = 0;
let inAr = false, inEn1 = false, inEn2 = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('ar: {')) {
    arStart = i;
    inAr = true;
    braceCount = 1;
  } else if (inAr && !inEn1) {
    braceCount += (lines[i].match(/{/g) || []).length;
    braceCount -= (lines[i].match(/}/g) || []).length;
    if (braceCount === 0 && lines[i].includes('}')) {
      arEnd = i;
      inAr = false;
    }
  } else if (lines[i].includes('en: {') && !inEn1) {
    en1Start = i;
    inEn1 = true;
    braceCount = 1;
  } else if (inEn1 && !inEn2) {
    braceCount += (lines[i].match(/{/g) || []).length;
    braceCount -= (lines[i].match(/}/g) || []).length;
    if (braceCount === 0 && lines[i].includes('}')) {
      en1End = i;
      inEn1 = false;
    }
  } else if (lines[i].includes('en: {') && en1End >= 0 && !inEn2) {
    en2Start = i;
    inEn2 = true;
    braceCount = 1;
  }
}

// Keep ar and en2 sections only
let output = lines.slice(0, arStart).join('\n') + '\n' +
             lines.slice(arStart, arEnd + 1).join('\n') + ',\n' +
             lines.slice(en2Start, lines.length).join('\n');

console.log('Fixed!');
