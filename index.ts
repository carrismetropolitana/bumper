#!/usr/bin/env node

/* * */

import fs from 'node:fs';
import path from 'node:path';

/* * */

const currentDir = process.cwd();
const packageJsonPath = path.join(currentDir, 'package.json');

const pJson = fs.readFileSync(packageJsonPath, 'utf8');
const pJsonData = JSON.parse(pJson);

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const seconds = Math.floor(now.getTime() / 1000);

const version = `${year}.${month}.${seconds}`;

pJsonData.version = version;

fs.writeFileSync(packageJsonPath, JSON.stringify(pJsonData, null, 4));
