/**
 * This file is NOT meant to be run in the browser.
 * It's a Node.js script to bulk-update all HTML files with nav-renderer.js
 * 
 * Usage: node js/bulk-update-nav.js
 * 
 * Run this from the project root directory
 */

const fs = require('fs');
const path = require('path');

// Simple replacement: find <nav class="sq-nav" and </nav>, replace with script
const navScriptReplacement = `  <!-- Navigation (rendered dynamically by nav-renderer.js) -->
  <script src="js/nav-renderer.js" defer></script>`;

function findAndReplaceNav(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already updated
    if (content.includes('nav-renderer.js')) {
      return { file: filePath, status: 'already_updated' };
    }
    
    // Skip if no nav to replace
    if (!content.includes('<nav class="sq-nav"')) {
      return { file: filePath, status: 'no_nav' };
    }
    
    // Find nav start and end
    const navStart = content.indexOf('  <!-- Navigation');
    if (navStart === -1) {
      return { file: filePath, status: 'nav_comment_not_found' };
    }
    
    const navEnd = content.indexOf('  </nav>', navStart);
    if (navEnd === -1) {
      return { file: filePath, status: 'nav_closing_not_found' };
    }
    
    // Replace from nav comment to closing nav tag
    const before = content.substring(0, navStart);
    const after = content.substring(navEnd + 8); // 8 = length of "  </nav>"
    const updated = before + navScriptReplacement + '\n' + after;
    
    fs.writeFileSync(filePath, updated, 'utf8');
    return { file: filePath, status: 'updated' };
    
  } catch (err) {
    return { file: filePath, status: 'error', error: err.message };
  }
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file !== 'node_modules' && file !== '.git' && !file.startsWith('.')) {
        walkDir(filePath, callback);
      }
    } else if (file === 'index.html' || file.endsWith('.html')) {
      callback(filePath);
    }
  });
}

// Main execution
console.log('Updating HTML files with nav-renderer.js...\n');

const results = [];
walkDir('.', (filePath) => {
  const result = findAndReplaceNav(filePath);
  results.push(result);
  
  if (result.status === 'updated') {
    console.log(`✓ ${filePath}`);
  } else if (result.status === 'already_updated') {
    console.log(`⊘ ${filePath} (already using nav-renderer)`);
  }
});

const updated = results.filter(r => r.status === 'updated').length;
const skipped = results.filter(r => r.status === 'already_updated').length;
const errors = results.filter(r => r.status === 'error').length;

console.log(`\n✓ Updated ${updated} files`);
console.log(`⊘ Skipped ${skipped} files`);
if (errors > 0) console.log(`✗ Errors: ${errors} files`);
console.log('\nDone! All pages now use centralized navigation.');
