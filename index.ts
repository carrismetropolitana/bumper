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

const packageJsonFile = fs.readFileSync(packageJsonPath, 'utf8');
const packageJsonData = JSON.parse(packageJsonFile);

const now = new Date();
const year = now.getFullYear();
const month = padNumber(now.getMonth() + 1);
const day = padNumber(now.getDate());
const hours = padNumber(now.getHours());
const minutes = padNumber(now.getMinutes());
const seconds = padNumber(now.getSeconds());

const curentPackageVersion = packageJsonData.version;
const futurePackageVersion = `${year}${month}${day}.${hours}${minutes}.${seconds}`;

packageJsonData.version = futurePackageVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, '\t'));

console.log(`✓ Package Version updated from "${curentPackageVersion}" to "${futurePackageVersion}".`);
