import { parse } from 'svelte-markdown-parser';
import fs from 'fs';
import { join } from 'path';

function parseMetadata(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { metadata } = parse(fileContents);
  return metadata.tags || [];
}

function getMetadataTags(folderPath) {
  const files = fs.readdirSync(folderPath);
  const tags = [];

  files.forEach((file) => {
    const filePath = join(folderPath, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isFile() && file.endsWith('.md')) {
      const fileTags = parseMetadata(filePath);
      tags.push(...fileTags);
    }
  });

  return tags;
}
