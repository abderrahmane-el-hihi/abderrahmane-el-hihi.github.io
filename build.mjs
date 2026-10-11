import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
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
