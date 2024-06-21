/* * */

import fs from 'fs';

/* * */

const pJson = fs.readFileSync('./package.json', 'utf8');
const pJsonData = JSON.parse(pJson);

const now = new Date();
const year = now.getFullYear();
const month = Number(now.getMonth() + 1);
const seconds = Number(parseInt(String(now.getTime() / 1000)));

const version = `${year}.${month}.${seconds}`;

pJsonData.version = version;

fs.writeFileSync('./package.json', JSON.stringify(pJsonData, null, 4));
