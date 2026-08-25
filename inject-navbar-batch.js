#!/usr/bin/env node

/**
 * Batch Navbar Injector
 * 
 * Replaces navbar sections in all index.html files across the site
 * with the single-source-of-truth version from _navbar.html
 * 
 * This ensures all pages get the same navbar without duplicating code,
 * and changes to _navbar.html automatically propagate everywhere.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
};

// Read _navbar.html
const navbarPath = path.join(__dirname, '_navbar.html');
let navbarContent;

try {
  navbarContent = fs.readFileSync(navbarPath, 'utf8');
  log.success(`Loaded _navbar.html (${navbarContent.length} bytes)`);
} catch (err) {
  log.error(`Failed to read _navbar.html: ${err.message}`);
  process.exit(1);
}

// Find all index.html files recursively
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

const indexFiles = findIndexFiles(__dirname).filter(f => f !== navbarPath);
log.info(`Found ${indexFiles.length} index.html files to update`);

// Pattern to match old navbar sections
// This is flexible to handle various navbar formats
const navbarPatterns = [
  // Pattern 1: <header> ... </header> (new format)
  /<header>\s*<nav[^>]*class="sq-nav"[\s\S]*?<\/header>/i,
  // Pattern 2: <nav> ... </nav> (standalone nav, old format)
  /<nav[^>]*class="sq-nav"[\s\S]*?<\/nav>/i,
  // Pattern 3: nav-renderer.js comment (dynamic nav placeholder)
  /<!-- Navigation \(rendered dynamically by nav-renderer\.js\) -->\s*<script[^>]*src="[^"]*nav-renderer\.js"[^>]*><\/script>/i,
];

let totalUpdated = 0;
let totalSkipped = 0;
let errors = [];

for (const filePath of indexFiles) {
  try {
    const relativePath = path.relative(__dirname, filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;
    
    // Try each pattern
    for (const pattern of navbarPatterns) {
      if (pattern.test(content)) {
        content = content.replace(pattern, navbarContent);
        updated = true;
        break;
      }
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      log.success(`Updated: ${relativePath}`);
      totalUpdated++;
    } else {
      log.warn(`Skipped (no navbar found): ${relativePath}`);
      totalSkipped++;
    }
  } catch (err) {
    log.error(`Failed: ${path.relative(__dirname, filePath)}`);
    errors.push({ file: filePath, error: err.message });
  }
}

// Summary
console.log('\n' + colors.cyan + '═'.repeat(50) + colors.reset);
log.info(`Update complete`);
log.success(`${totalUpdated} files updated`);
if (totalSkipped > 0) log.warn(`${totalSkipped} files skipped (no navbar pattern found)`);
if (errors.length > 0) log.error(`${errors.length} errors encountered`);

if (errors.length > 0) {
  console.log('\nErrors:');
  errors.forEach(({ file, error }) => {
    console.log(`  ${path.relative(__dirname, file)}: ${error}`);
  });
  process.exit(1);
}

process.exit(0);
