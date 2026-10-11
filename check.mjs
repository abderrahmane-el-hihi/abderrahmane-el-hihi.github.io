import {readFile,stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('dist/index.html','utf8');
assert(html.includes('<div id="root"></div>'));
for(const file of ['dist/app.js','dist/app.css','dist/assets/favicon.svg',...['nexa-preview.png','cemos-preview.png','jibouli-preview.png','nexa-ledger-original.png','charcoal-field.png','archivo-black.ttf','menbere-regular.ttf','menbere-bold.ttf','dm-mono-regular.ttf'].map(f=>'dist/assets/'+f)])assert((await stat(file)).size>0,file);
for(const name of ['fullstack','mobile','data']){
 const file=await readFile(`dist/assets/cv_${name}.pdf`);
 assert.equal(file.subarray(0,5).toString(),'%PDF-');
}
const js=await readFile('dist/app.js','utf8');
for(const id of ['about','contact','research'])assert(js.includes(id));
assert(!js.includes('unreviewed and undocumented'));
assert(!html.includes('source_repository_credential'));
console.log('Verified build assets, three PDFs, navigation content, and clean delivered metadata.');
