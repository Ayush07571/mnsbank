const fs = require('fs');
const path = require('path');

function removeUnstableInstant(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      removeUnstableInstant(filePath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unstable_instant exports
      content = content.replace(/export const unstable_instant = \{[^}]+\};\s*/g, '');
      
      // Clean up any extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      console.log(`Processed: ${filePath}`);
    }
  }
}

// Start from src/app directory
removeUnstableInstant('./src/app');
console.log('Done removing unstable_instant exports!');
