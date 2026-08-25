#!/usr/bin/env node

/**
 * Inject unified-nav.js into all pages
 * 
 * Adds <script src="/js/unified-nav.js" defer></script> before closing body
 * to ensure navbar behavior is applied everywhere.
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
    
    // Check if unified-nav.js is already linked
    if (content.includes('unified-nav.js')) {
      log.warn(`Already has unified-nav.js: ${relativePath}`);
      totalSkipped++;
      continue;
    }
    
    // Calculate relative path based on file depth
    const depth = relativePath.split(path.sep).length - 1;
    const prefix = depth === 0 ? '' : '../'.repeat(depth);
    
    const scriptTag = `<script src="${prefix}js/unified-nav.js" defer></script>`;
    
    // Add before </body>
    if (content.includes('</body>')) {
      content = content.replace('</body>', `  ${scriptTag}\n</body>`);
      fs.writeFileSync(filePath, content, 'utf8');
      log.success(`Added unified-nav.js: ${relativePath}`);
      totalUpdated++;
    } else {
      log.warn(`Could not find </body> tag: ${relativePath}`);
    }
  } catch (err) {
    log.error(`Error: ${path.relative(__dirname, filePath)} - ${err.message}`);
  }
}

console.log('\n' + colors.cyan + '═'.repeat(50) + colors.reset);
log.info(`JS injection complete`);
log.success(`${totalUpdated} files updated`);
if (totalSkipped > 0) log.info(`${totalSkipped} files already had JS`);

process.exit(0);
