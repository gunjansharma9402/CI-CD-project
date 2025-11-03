// build.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'index.html');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
fs.copyFileSync(src, path.join(distDir, 'index.html'));
console.log('Build complete — dist/index.html created');

