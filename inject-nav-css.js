#!/usr/bin/env node

/**
 * Inject unified-nav.css into all pages
 * 
 * Adds <link rel="stylesheet" href="/css/unified-nav.css"> after components.css
 * to ensure navbar styling is applied everywhere.
 */

const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
};

function findIndexFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findIndexFiles(fullPath));
    } else if (stat.isFile() && item === 'index.html') {
      files.push(fullPath);
    }
  }
  
  return files;
}

const indexFiles = findIndexFiles(__dirname);
log.info(`Found ${indexFiles.length} index.html files`);

let totalUpdated = 0;
let totalSkipped = 0;

for (const filePath of indexFiles) {
  try {
    const relativePath = path.relative(__dirname, filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if unified-nav.css is already linked
    if (content.includes('unified-nav.css')) {
      log.warn(`Already has unified-nav.css: ${relativePath}`);
      totalSkipped++;
      continue;
    }
    
    // Find components.css and add unified-nav.css after it
    // Calculate relative path based on file depth
    const depth = relativePath.split(path.sep).length - 1;
    const prefix = depth === 0 ? '' : '../'.repeat(depth);
    
    const componentsCssLink = `<link rel="stylesheet" href="${prefix}css/components.css">`;
    const navCssLink = `<link rel="stylesheet" href="${prefix}css/unified-nav.css">`;
    
    if (content.includes(componentsCssLink)) {
      content = content.replace(componentsCssLink, componentsCssLink + '\n  ' + navCssLink);
      fs.writeFileSync(filePath, content, 'utf8');
      log.success(`Added unified-nav.css: ${relativePath}`);
      totalUpdated++;
    } else {
      // Try alternative pattern (with different spacing)
      const pattern = /(<link rel="stylesheet" href="[^"]*css\/components\.css">)/;
      if (pattern.test(content)) {
        content = content.replace(pattern, `$1\n  ${navCssLink}`);
        fs.writeFileSync(filePath, content, 'utf8');
        log.success(`Added unified-nav.css (alt pattern): ${relativePath}`);
        totalUpdated++;
      } else {
        log.warn(`Could not find components.css link: ${relativePath}`);
      }
    }
  } catch (err) {
    log.error(`Error: ${path.relative(__dirname, filePath)} - ${err.message}`);
  }
}

console.log('\n' + colors.cyan + '═'.repeat(50) + colors.reset);
log.info(`CSS injection complete`);
log.success(`${totalUpdated} files updated`);
if (totalSkipped > 0) log.info(`${totalSkipped} files already had CSS`);

process.exit(0);
