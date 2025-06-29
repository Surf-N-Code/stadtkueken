#!/usr/bin/env node

const { generateKitaPages } = require('../src/lib/generate-kita-pages.ts');

async function main() {
  try {
    console.log('Generating Kita pages...');
    await generateKitaPages();
    console.log('Kita pages generated successfully!');
  } catch (error) {
    console.error('Error generating Kita pages:', error);
    process.exit(1);
  }
}

main(); 