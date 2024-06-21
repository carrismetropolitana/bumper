#!/usr/bin/env node

/* * */

import fs from 'node:fs';
import path from 'node:path';

/* * */

function padNumber(number) {
	return number.toString().padStart(2, '0');
}

/* * */

const currentDir = process.cwd();
const packageJsonPath = path.join(currentDir, 'package.json');

const pJson = fs.readFileSync(packageJsonPath, 'utf8');
const pJsonData = JSON.parse(pJson);

const now = new Date();
const year = now.getFullYear();
const month = padNumber(now.getMonth() + 1);
const day = padNumber(now.getDate());
const hours = padNumber(now.getHours());
const minutes = padNumber(now.getMinutes());
const seconds = padNumber(now.getSeconds());

const version = `${year}${month}${day}.${hours}${minutes}.${seconds}`;

pJsonData.version = version;

fs.writeFileSync(packageJsonPath, JSON.stringify(pJsonData, null, '\t'));
