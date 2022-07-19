import * as fs from 'fs';
import { readFile as readFilePromise } from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readAndWriteCallbackHell = () => {
  fs.readFile(path.join(__dirname, "/files/fsSimple/file1.txt"), ((err, data) => {
    if (err) throw err;
    fs.writeFile(path.join(__dirname, "/files/fsSimple/file2.txt"), data, ()=>{});
  }));
};

const readAndWritePromises = () => {
  let a = new Promise((resolve, reject) => {
    resolve(readFilePromise(path.join(__dirname, "/files/fsSimple/file1.txt")));
  })
  .then(value => fs.writeFile(path.join(__dirname, "/files/fsSimple/file2.txt"), value, ()=>{}));
};

const readAndWriteAsyncAwait = async () => {
  let a = readFilePromise(path.join(__dirname, "/files/fsSimple/file1.txt"))
  fs.writeFile(path.join(__dirname, "/files/fsSimple/file2.txt"), await a, ()=>{})
};

export {
  readAndWriteAsyncAwait,
  readAndWritePromises,
  readAndWriteCallbackHell,
};

readAndWritePromises();