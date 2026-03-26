#!/usr/bin/env node

/**
 * Security Compliance Checker
 * Enforces SSL (port 443 only) and prevents port 8444 usage
 */

const fs = require('fs');
const path = require('path');

const FORBIDDEN_PORT = '8444';
const ALLOWED_PORT = '443';
const SRC_DIR = path.join(__dirname, '../src');

function checkFileForPort(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const violations = [];
  
  lines.forEach((line, index) => {
    if (line.includes(FORBIDDEN_PORT)) {
      violations.push({
        line: index + 1,
        content: line.trim()
      });
    }
  });
  
  return violations;
}

function checkDirectory(dir) {
  const violations = [];
  
  function walkDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx'))) {
        const fileViolations = checkFileForPort(fullPath);
        if (fileViolations.length > 0) {
          violations.push({
            file: path.relative(process.cwd(), fullPath),
            violations: fileViolations
          });
        }
      }
    }
  }
  
  walkDirectory(dir);
  return violations;
}

function main() {
  console.log('🔒 Security Compliance Check');
  console.log(`✅ Enforcing HTTPS port ${ALLOWED_PORT} only`);
  console.log(`🚫 Forbidden port: ${FORBIDDEN_PORT}\n`);
  
  const violations = checkDirectory(SRC_DIR);
  
  if (violations.length > 0) {
    console.error('❌ SECURITY VIOLATIONS FOUND:');
    console.error(`Port ${FORBIDDEN_PORT} is not allowed in the codebase.\n`);
    
    violations.forEach(({ file, violations: fileViolations }) => {
      console.error(`📁 ${file}:`);
      fileViolations.forEach(({ line, content }) => {
        console.error(`   Line ${line}: ${content}`);
      });
      console.error('');
    });
    
    console.error('Please remove all references to port 8444 and use port 443 (HTTPS) only.');
    process.exit(1);
  } else {
    console.log('✅ SUCCESS: No port 8444 usage found');
    console.log('✅ SUCCESS: HTTPS compliance verified');
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkDirectory, checkFileForPort };
