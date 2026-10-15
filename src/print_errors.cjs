const fs = require('fs');
const path = require('path');
const katex = require('katex');

function findFiles(dir, ext) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) files = files.concat(findFiles(full, ext));
    else if (full.endsWith(ext)) files.push(full);
  }
  return files;
}

const files = findFiles('src/data/questionBanks', '.ts');
let count = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const formulaBlockRegex = /formulas\s*:\s*\[([\s\S]*?)\]/g;
  let blockMatch;
  while ((blockMatch = formulaBlockRegex.exec(content)) !== null) {
    const inside = blockMatch[1];
    const stringRegex = /(?:'((?:\\.|[^'])*)'|"((?:\\.|[^"])*)"|`((?:\\.|[^`])*)`)/g;
    let strMatch;
    while ((strMatch = stringRegex.exec(inside)) !== null) {
      const rawStr = strMatch[1] !== undefined ? strMatch[1] : (strMatch[2] !== undefined ? strMatch[2] : strMatch[3]);
      if (!rawStr) continue;
      const formula = rawStr.replace(/\\\\/g, '\\');
      try {
        katex.renderToString(formula, { throwOnError: true });
      } catch (e) {
        count++;
        console.log(`[#${count}] ${file}:`);
        console.log(`   raw: ${rawStr}`);
        console.log(`   err: ${e.message}`);
      }
    }
  }
}
