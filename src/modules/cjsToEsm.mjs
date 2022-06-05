import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import fs from "fs";
import url from "url";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(fs.readFileSync('./files/a.json', 'utf-8'));
} else {
    unknownObject = JSON.parse(fs.readFileSync('./files/b.json', 'utf-8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${url.fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(url.fileURLToPath(import.meta.url))}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};
