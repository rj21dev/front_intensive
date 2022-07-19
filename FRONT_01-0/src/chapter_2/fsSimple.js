// const fs = import('fs');
import fs from 'fs';
const readAndWriteCallbackHell = () => {
  fs.readFile("./files/fsSimple/file1.txt", 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile("./files/fsSimple/file2.txt", data, (err) => {
      if (err) throw err;
    })
  });
};
const readAndWritePromises = () => {
  fs.promises.readFile("./files/fsSimple/file1.txt", 'utf8')
    .then((data) => {
      fs.writeFile("./files/fsSimple/file2.txt", data, (err) => {
        if (err) throw err;
      })
    })
    .catch((err) => {
      if (err) throw err;
    })
};
const readAndWriteAsyncAwait = async () => {
  const data = await fs.promises.readFile("./files/fsSimple/file1.txt", 'utf8');
  fs.writeFile("./files/fsSimple/file2.txt", data, (err) => {
    if (err) throw err;
  })
};
export {
  readAndWriteAsyncAwait,
  readAndWritePromises,
  readAndWriteCallbackHell,
};
// readAndWriteAsyncAwait();
// readAndWritePromises();
// readAndWriteCallbackHell();