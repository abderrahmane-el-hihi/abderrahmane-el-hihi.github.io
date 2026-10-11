import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
// Keep the original test captures in source; emit separate images for lazy loading.
const captures = {
  ...JSON.parse(await readFile('src/nexa-screenshots.json', 'utf8')),
  ...JSON.parse(await readFile('src/nexa-screenshots-more.json', 'utf8'))
};
await mkdir('dist/assets', { recursive: true });
for (const [name, content] of Object.entries(captures)) {
  await writeFile(`dist/assets/${name}`, Buffer.from(content, 'base64'));
}
await build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  external: ['/assets/*'],
  minify: true,
  sourcemap: false,
  outfile: 'dist/app.js',
  target: ['es2020'],
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'eof',
  metafile: false
});
console.log('Built React portfolio in dist/');
