//const fs = require("fs");
import fs from 'fs';
import process from 'process';
import rdl from 'readline';
export const progressbar = async () => {
    let size = 80;
    let stepsSize  = 0;
    let cursor = 0;
    let filesArray = [];
    filesArray = await fs.promises.readdir("./files/fsHard");
    for (const file of filesArray) {
        let stats = await fs.statSync("./files/fsHard/" + file);
        stepsSize += stats.size;
    }
//    process.stdout.write("\x1Bc\x1B[?25l");
    rdl.cursorTo(process.stdout, cursor);
    for (let i = 0; i < size + 3; i++) {
        process.stdout.write("-")
    }
    rdl.cursorTo(process.stdout, cursor);
    for (const file of filesArray) {
//        await readFileByName(file);
//        setTimeout(() => {
            fs.promises.readFile("./files/fsHard/" + file, 'utf8')
            const stats = fs.statSync("./files/fsHard/" + file);
            let stepSize = size * ((stats.size * 100) / stepsSize) / 100;
            for (let i = 0; i < stepSize; i++) {
                process.stdout.write("#");
            }
//        }, Math.random()*3000);
        cursor++;
    }
}
// function readFileByName(name) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(
//                 fs.promises.readFile("./files/fsHard/" + name, 'utf8')
//             )}, Math.random()*3000);
//     });
// }
progressbar();