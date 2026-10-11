import {readFile,stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('dist/index.html','utf8');
assert(html.includes('<div id="root"></div>'));
for(const file of ['dist/app.js','dist/app.css','dist/assets/favicon.svg',...['nexa-preview.png','cemos-preview.png','jibouli-preview.png','nexa-ledger-original.png','charcoal-field.png','archivo-black.ttf','menbere-regular.ttf','menbere-bold.ttf','dm-mono-regular.ttf'].map(f=>'dist/assets/'+f)])assert((await stat(file)).size>0,file);
const captures={...JSON.parse(await readFile('src/nexa-screenshots.json','utf8')),...JSON.parse(await readFile('src/nexa-screenshots-more.json','utf8'))};
assert.equal(Object.keys(captures).length,8);
for(const [name,base64] of Object.entries(captures)){
 const data=await readFile('dist/assets/'+name);
 assert(data.equals(Buffer.from(base64,'base64')),name+' must preserve the original capture');
 assert.equal(data.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
}
for(const name of ['fullstack','mobile','data']){
 const file=await readFile(`dist/assets/cv_${name}.pdf`);
 assert.equal(file.subarray(0,5).toString(),'%PDF-');
}
const js=await readFile('dist/app.js','utf8');
for(const id of ['about','contact','research'])assert(js.includes(id));
assert(!js.includes('unreviewed and undocumented'));
assert(!html.includes('source_repository_credential'));
console.log('Verified build assets, three PDFs, navigation content, and clean delivered metadata.');
